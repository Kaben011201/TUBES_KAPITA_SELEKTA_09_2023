import prisma from "@/utils/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  let year = parseInt(searchParams.get("year")) || new Date().getFullYear();
  let type = searchParams.get("type");

  try {
    const january = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-01`,
        },
        type: type,
      },
    });

    const february = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-02`,
        },
        type: type,
      },
    });

    const march = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-03`,
        },
        type: type,
      },
    });

    const april = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-04`,
        },
        type: type,
      },
    });

    const may = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-05`,
        },
        type: type,
      },
    });

    const june = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-06`,
        },
        type: type,
      },
    });

    const july = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-07`,
        },
        type: type,
      },
    });

    const august = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-08`,
        },
        type: type,
      },
    });

    const september = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-09`,
        },
        type: type,
      },
    });

    const october = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-10`,
        },
        type: type,
      },
    });

    const november = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-11`,
        },
        type: type,
      },
    });

    const december = await prisma.bayi.count({
      where: {
        kunjung: {
          startsWith: `${year}-12`,
        },
        type: type,
      },
    });

    return Response.json({
      status: 200,
      message: "Berhasil ambil data grafik bayi!",
      data: {
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december,
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}
