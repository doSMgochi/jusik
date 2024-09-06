import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, { params }) {
  try {
    const { id } = params; // URL 매개변수에서 ID 추출

    if (!id) {
      return new Response(JSON.stringify({ error: "댓글 ID가 필요합니다." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 댓글의 좋아요 수를 증가시킵니다
    const updatedComment = await prisma.tbl_comments.update({
      where: { comment_no: Number(id) },
      data: { comment_likes: { increment: 1 } },
    });

    return new Response(JSON.stringify(updatedComment), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("좋아요를 업데이트하는 중 오류 발생:", error);
    return new Response(
      JSON.stringify({
        error: "좋아요를 업데이트하는 중 문제가 발생했습니다.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
