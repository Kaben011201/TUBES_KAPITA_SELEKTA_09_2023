import prisma from "@/utils/prisma";

export async function GET() {
  try {
    const lansia = await prisma.lansia.findMany();

    return Response.json({
      status: 200,
      message: "Berhasil ambil semua data!",
      data: lansia,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    data.umur = parseFloat(data.umur);
    data.tb = parseFloat(data.tb);
    data.bb = parseFloat(data.bb);

    const lansia = await prisma.lansia.create({ data });

    return Response.json({
      status: 200,
      message: "Berhasil buat data!",
      data: lansia,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}
