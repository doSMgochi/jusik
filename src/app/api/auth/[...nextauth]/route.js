import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "Login ID", type: "text", placeholder: "ID" },
        loginPassword: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { loginId, loginPassword } = credentials;

        const user = await prisma.tbl_users.findUnique({
          where: { user_id: loginId },
        });

        if (!user) {
          throw new Error("존재하지 않는 사용자입니다.");
        }

        const isMatch = await bcrypt.compare(loginPassword, user.user_password);
        if (!isMatch) {
          throw new Error("비밀번호가 일치하지 않습니다.");
        }

        return {
          id: user.user_id,
          name: user.user_name,
          nick: user.user_nick,
          sex: user.user_sex,
          stock_iscd: user.user_stock_iscd,
        };
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.nick = user.nick;
        token.sex = user.sex;
        token.stock_iscd = user.stock_iscd;
      }
      return token;
    },
    async session({ session, token }) {
      const user = await prisma.tbl_users.findUnique({
        where: { user_id: token.id },
      });

      if (user) {
        session.user.id = user.user_id;
        session.user.name = user.user_name;
        session.user.nick = user.user_nick;
        session.user.sex = user.user_sex;
        session.user.stock_iscd = user.user_stock_iscd;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
