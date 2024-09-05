import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request) {
  const { joinId, joinPassword, joinName, joinNick, joinSex } =
    await request.json();

  try {
    const existingUser = await prisma.tbl_users.findUnique({
      where: { user_id: joinId },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "이미 사용 중인 아이디입니다." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(joinPassword, 10);

    const user = await prisma.tbl_users.create({
      data: {
        user_id: joinId,
        user_password: hashedPassword,
        user_name: joinName,
        user_nick: joinNick,
        user_sex: joinSex,
        user_stock_iscd: null,
      },
    });

    return NextResponse.json({
      message: "회원가입이 성공적으로 완료되었습니다.",
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "회원가입 중 오류가 발생했습니다.", error },
      { status: 500 }
    );
  }
}
