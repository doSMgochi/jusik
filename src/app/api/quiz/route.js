import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function handler(req, res) {
  // body-parser 설정
  await new Promise((resolve) => {
    bodyParser.json()(req, res, resolve);
  });

  if (req.method === 'POST') {
    try {
      const { quizCollect, quizUserId } = req.body; // req.body에서 데이터 가져오기

      // Prisma를 사용하여 데이터 저장
      const newQuizResult = await prisma.tbl_quiz.create({
        data: {
          quiz_user_id: quizUserId, 
          quiz_collect: Number(quizCollect),
        },
      });

      res.status(200).json(newQuizResult); 
    } catch (error) {
      console.error("퀴즈 결과 저장 실패:", error);
      res.status(500).json({ error: "퀴즈 결과 저장 실패" }); 
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}