import prisma from "@/utils/prisma";

export async function GET(req) {
  let where = {};

  const search = searchParams.get("query") || "";
  where.kegiatan = { contains:search};

  try {
    const activity = await prisma.activity.findMany({
      where,
      orderBy: {
        tanggal: "asc",
      },
    });

    return Response.json({
      status: 200,
      message: "Berhasil ambil semua data!",
      data: activity,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const activity = await prisma.activity.create({ data });

    return Response.json({
      status: 200,
      message: "Berhasil buat data!",
      data: {
        ...activity,
        tanggal: new Date().toISOString().split("T")[0],
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}
