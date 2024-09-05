import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request) {
  const { loginId, loginPassword } = await request.json();

  try {
    const user = await prisma.tbl_users.findUnique({
      where: {
        user_id: loginId,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "아이디가 존재하지 않습니다." },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(loginPassword, user.user_password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "비밀번호가 일치하지 않습니다." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "로그인 성공!",
      user: {
        id: user.user_id,
        name: user.user_name,
      },
    });
  } catch (error) {
    console.error("로그인 처리 중 오류:", error);
    return NextResponse.json(
      { message: "로그인 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
