import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    // 구글 로그인 제공자
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // 네이버 로그인 제공자
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    // 커스텀 로그인 제공자 (아이디/패스워드 기반)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "Login ID", type: "text", placeholder: "ID" },
        loginPassword: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { loginId, loginPassword } = credentials;

        // DB에서 유저 찾기
        const user = await prisma.tbl_users.findUnique({
          where: { user_id: loginId },
        });

        if (!user) {
          throw new Error("존재하지 않는 사용자입니다.");
        }

        // 패스워드 검증
        const isMatch = await bcrypt.compare(loginPassword, user.user_password);
        if (!isMatch) {
          throw new Error("비밀번호가 일치하지 않습니다.");
        }

        // 유저 정보 반환 (세션에 저장할 정보)
        return { id: user.user_id, name: user.user_name };
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
