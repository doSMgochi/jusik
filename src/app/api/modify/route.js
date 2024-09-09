import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function PUT(request) {
  const { joinId, joinPassword, joinName, joinNick, joinSex } =
    await request.json();

  try {
    let hashedPassword = undefined;
    if (joinPassword) {
      hashedPassword = await bcrypt.hash(joinPassword, 10);
    }

    const user = await prisma.tbl_users.update({
      where: { user_id: joinId },
      data: {
        user_name: joinName,
        user_nick: joinNick,
        user_sex: joinSex,
        ...(hashedPassword && { user_password: hashedPassword }),
      },
    });

    return NextResponse.json({
      message: "회원정보가 성공적으로 수정되었습니다.",
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "회원정보 수정 중 오류가 발생했습니다.", error },
      { status: 500 }
    );
  }
}
