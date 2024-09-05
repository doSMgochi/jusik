import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const selectAll = async () => {
  try {
    const result = await prisma.tbl_stocks.findMany();
    await prisma.$disconnect();
    return result;
  } catch (error) {
    await prisma.$disconnect();
    process.exit(1);
  }
};

export { selectAll };
