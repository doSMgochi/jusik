import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // tbl_stocks 테이블에서 랜덤하게 하나의 stock_iscd 가져오기
    const randomStock = await prisma.tbl_stocks.findFirst({
      orderBy: { stock_iscd: 'asc' }, // stock_iscd를 기준으로 오름차순 정렬 (랜덤성 증가를 위해 추가)
      take: 2, // 두개의 레코드만 가져오기
      skip: Math.floor(Math.random() * (await prisma.tbl_stocks.count())), // 랜덤한 offset 설정?
    });

    if (!randomStock) {
      return new Response("No stocks found", { status: 404 });
    }

    // 가져온 stock_iscd를 활용하여 원하는 작업 수행
    // ... (예: 해당 stock_iscd를 사용하여 다른 API 호출, 데이터베이스 쿼리 등)

    return new Response(JSON.stringify(randomStock), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching random stock:", error);
    return new Response("Error fetching random stock", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}