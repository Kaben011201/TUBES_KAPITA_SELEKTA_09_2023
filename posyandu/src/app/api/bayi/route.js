import prisma from "@/utils/prisma";

export async function GET(req) {
  let where = {};

  const { searchParams } = new URL(req.url);
  let month = parseInt(searchParams.get("month")) || 0;
  const bayiType = searchParams.get("type");

  const search = searchParams.get("query") || "";
  where.nama = { contains: search };

  // IF THERE IS FILTER BY MONTH
  if (month != 0) {
    if (month < 10) {
      month = `0${month}`;
    }
    const year = new Date().getFullYear();
    where.kunjung = {
      startsWith: `${year}-${month}`,
    };
  }
  where.type = bayiType;

  try {
    const bayi = await prisma.bayi.findMany({
      where,
      orderBy: {
        kunjung: "asc",
      },
    });

    return Response.json({
      status: 200,
      message: "Berhasil ambil semua data!",
      data: bayi,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const bayi = await prisma.bayi.create({ data });

    return Response.json({
      status: 200,
      message: "Berhasil buat data!",
      data: {
        ...bayi,
        kunjung: new Date().toISOString().split("T")[0],
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}
