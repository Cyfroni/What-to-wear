import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const values = await prisma.example.findMany({
    include: {
      subExample: true,
    },
  });
  // const values = await prisma.example.create({
  //   data: {
  //     subExample: {
  //       create: {
  //         name: "test1",
  //       },
  //     },
  //   },
  //   include: {
  //     subExample: true,
  //   },
  // });

  console.log(values);
}

main()
  .catch((e) => console.error(e.error))
  .finally(async () => await prisma.$disconnect());
