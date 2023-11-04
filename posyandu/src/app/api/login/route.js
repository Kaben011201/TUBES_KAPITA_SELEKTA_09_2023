export async function POST(req) {
  const { email, password } = await req.json();

  console.log(email)

  if (!email || !password) {
    return Response.json({ message: "Data Tidak Lengkap!" });
  } else {
    return Response.json({ message: "Login Sukses!" });
  }

  try {
    // const admin = await prisma.admin.findFirst({
    //   where: {
    //     email,
    //   },
    // });
    // if (admin) {
    //   if (validatePassword(password, admin.password)) {
    //     const token = await signToken(admin);
    //     return Response.json({ token, message: "Berhasil Login!" });
    //   } else {
    //     return Response.json({ message: "Password Salah!" });
    //   }
    // }
  } catch (error) {
    console.log(error);
  }
}
