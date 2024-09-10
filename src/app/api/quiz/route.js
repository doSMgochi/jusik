import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // JSON으로 요청 본문 읽기
    const { quizScore, quizUserId } = await req.json();

    // Prisma를 사용하여 데이터 저장
    const newQuizResult = await prisma.tbl_quiz.create({
      data: {
        quiz_user_id: quizUserId,
        quiz_collect: Number(quizScore), // 숫자로 변환
      },
    });

    // 성공 시 응답
    return new Response(JSON.stringify(newQuizResult), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("퀴즈 결과 저장 실패:", error);
    // 오류 발생 시 응답
    return new Response(JSON.stringify({ error: "퀴즈 결과 저장 실패" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect(); // Prisma 연결 해제
  }
}
