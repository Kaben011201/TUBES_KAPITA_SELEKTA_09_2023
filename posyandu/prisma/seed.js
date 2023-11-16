const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.posyandu.create({
    data: {
      nama: "Posyandu Mawar 1",
      Admin: {
        create: {
          email: "adminposyandu1@gmail.com",
          password:
            "$2a$12$rYT6BJWBuJ28u6POeWjnJ.SlnVv/8yswsQye58OFherUlHiN04AmG",
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
