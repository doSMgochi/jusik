import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const user_id = url.searchParams.get("user_id");

  if (!user_id) {
    return new Response(JSON.stringify({ error: "사용자 ID가 필요합니다." }), {
      status: 400,
    });
  }

  try {
    const favorites = await prisma.tbl_favorites.findMany({
      where: { f_user_id: user_id },
      include: { tbl_stocks: true }, // 주식 정보 포함
    });

    return new Response(JSON.stringify(favorites), { status: 200 });
  } catch (error) {
    console.error("즐겨찾기 조회 중 오류 발생:", error);
    return new Response(
      JSON.stringify({ error: "즐겨찾기 조회 중 오류가 발생했습니다." }),
      { status: 500 }
    );
  }
}
