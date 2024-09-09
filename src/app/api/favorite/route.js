import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const stock_iscd = url.searchParams.get("stock_iscd");
  const user_id = url.searchParams.get("user_id");

  if (!stock_iscd || !user_id) {
    return new Response(
      JSON.stringify({ error: "필수 파라미터가 누락되었습니다." }),
      { status: 400 }
    );
  }

  try {
    const favorite = await prisma.tbl_favorites.findFirst({
      where: {
        f_stock_iscd: stock_iscd,
        f_user_id: user_id,
      },
    });

    return new Response(JSON.stringify({ isFavorite: !!favorite }), {
      status: 200,
    });
  } catch (error) {
    console.error("즐겨찾기 상태 확인 중 오류 발생:", error);
    return new Response(
      JSON.stringify({ error: "즐겨찾기 상태 확인 중 오류가 발생했습니다." }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { stock_iscd, user_id } = await request.json();

  if (!stock_iscd || !user_id) {
    return new Response(
      JSON.stringify({ error: "필수 파라미터가 누락되었습니다." }),
      { status: 400 }
    );
  }

  try {
    const favorite = await prisma.tbl_favorites.create({
      data: {
        f_stock_iscd: stock_iscd,
        f_user_id: user_id,
      },
    });
    return new Response(JSON.stringify(favorite), { status: 200 });
  } catch (error) {
    console.error("즐겨찾기 추가 중 오류 발생:", error);
    return new Response(
      JSON.stringify({ error: "즐겨찾기 추가 중 오류가 발생했습니다." }),
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const { stock_iscd, user_id } = await request.json();

  if (!stock_iscd || !user_id) {
    return new Response(
      JSON.stringify({ error: "필수 파라미터가 누락되었습니다." }),
      { status: 400 }
    );
  }

  try {
    const favorite = await prisma.tbl_favorites.deleteMany({
      where: {
        f_stock_iscd: stock_iscd,
        f_user_id: user_id,
      },
    });

    if (favorite.count === 0) {
      return new Response(
        JSON.stringify({ error: "즐겨찾기를 찾을 수 없습니다." }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "즐겨찾기가 삭제되었습니다." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("즐겨찾기 삭제 중 오류 발생:", error);
    return new Response(
      JSON.stringify({ error: "즐겨찾기 삭제 중 오류가 발생했습니다." }),
      { status: 500 }
    );
  }
}
