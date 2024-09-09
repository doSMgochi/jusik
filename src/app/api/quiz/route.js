import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const stocks = await prisma.tbl_stocks.findMany();
    return new Response(JSON.stringify(stocks), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch stocks:", error);
    return new Response("Failed to fetch stocks", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
