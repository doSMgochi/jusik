import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const comment_stock_iscd = url.searchParams.get("comment_stock_iscd");

    if (!comment_stock_iscd) {
      return new Response(
        JSON.stringify({ error: "주식 코드가 필요합니다." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const comments = await prisma.tbl_comments.findMany({
      where: { comment_stock_iscd: comment_stock_iscd },
    });

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("댓글을 불러오는 중 오류 발생:", error);
    return new Response(
      JSON.stringify({ error: "댓글을 불러오는 중 문제가 발생했습니다." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(req) {
  try {
    const { comment_body, comment_stock_iscd, comment_user_id, comment_likes } =
      await req.json();

    if (
      !comment_body ||
      typeof comment_body !== "string" ||
      comment_body.trim() === "" ||
      !comment_stock_iscd ||
      !comment_user_id
    ) {
      return new Response(
        JSON.stringify({
          error: "유효한 댓글 내용, 주식 코드, 사용자 ID가 필요합니다.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newComment = await prisma.tbl_comments.create({
      data: {
        comment_body: comment_body.trim(),
        comment_stock_iscd,
        comment_user_id,
        comment_likes: comment_likes ?? 0,
      },
    });

    return new Response(JSON.stringify(newComment), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("댓글을 저장하는 중 오류 발생:", error);
    return new Response(
      JSON.stringify({ error: "댓글을 저장하는 중 문제가 발생했습니다." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
