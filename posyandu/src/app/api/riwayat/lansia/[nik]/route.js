import prisma from "@/utils/prisma";

export async function GET(req) {
  try {
    const nik = req.url.split("/lansia/")[1];

    const riwayat = await prisma.lansia.findMany({
      where: {
        nik: nik,
      },
    });

    return Response.json({
      status: 200,
      message: "Berhasil ambil riwayat lansia!",
      data: riwayat,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}
