import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route.js";
const prisma = new PrismaClient();

export async function DELETE() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "로그인이 필요합니다." },
      { status: 401 }
    );
  }

  const userId = session.user.id;

  if (!userId) {
    return NextResponse.json(
      { message: "userId가 존재하지 않습니다." },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.tbl_users.findUnique({
      where: { user_id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { message: "해당 아이디의 사용자가 존재하지 않습니다." },
        { status: 404 }
      );
    }

    await prisma.tbl_users.delete({ where: { user_id: userId } });

    return NextResponse.json({
      message: "회원탈퇴가 성공적으로 완료되었습니다.",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "회원 탈퇴 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
