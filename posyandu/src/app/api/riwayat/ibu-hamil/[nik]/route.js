import prisma from "@/utils/prisma";

export async function GET(req) {
  try {
    const nik = req.url.split("/ibu-hamil/")[1];

    const riwayat = await prisma.bumil.findMany({
      where: {
        nik: nik,
      },
    });

    return Response.json({
      status: 200,
      message: "Berhasil ambil riwayat bumil!",
      data: riwayat,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}
