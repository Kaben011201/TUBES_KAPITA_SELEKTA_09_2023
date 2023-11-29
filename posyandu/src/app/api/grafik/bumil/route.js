import prisma from "@/utils/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  let year = parseInt(searchParams.get("year")) || new Date().getFullYear();

  try {
    const january = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-01`,
        },
      },
    });

    const february = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-02`,
        },
      },
    });

    const march = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-03`,
        },
      },
    });

    const april = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-04`,
        },
      },
    });

    const may = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-05`,
        },
      },
    });

    const june = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-06`,
        },
      },
    });

    const july = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-07`,
        },
      },
    });

    const august = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-08`,
        },
      },
    });

    const september = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-09`,
        },
      },
    });

    const october = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-10`,
        },
      },
    });

    const november = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-11`,
        },
      },
    });

    const december = await prisma.bumil.count({
      where: {
        kunjung: {
          startsWith: `${year}-12`,
        },
      },
    });

    return Response.json({
      status: 200,
      message: "Berhasil ambil data grafik bumil!",
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
