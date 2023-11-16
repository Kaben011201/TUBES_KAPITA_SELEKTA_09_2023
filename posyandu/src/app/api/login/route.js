import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import * as jose from "jose";

const signToken = async (admin) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  delete admin.password;
  return await new jose.SignJWT(admin)
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
};
const validatePassword = async (password1, password2) => {
  const validate = bcrypt.compareSync(password1, password2);
  return validate;
};

export async function POST(req) {
  const { email, password } = await req.json();
  let token;

  try {
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (admin) {
      const validate = await validatePassword(password, admin.password);
      if (validate) {
        token = await signToken(admin);
        return Response.json({
          status: 200,
          token,
          message: "Berhasil Login!",
        });
      } else {
        return Response.json({ status: 400, message: "Password Salah!" });
      }
    } else {
      return Response.json({ status: 400, message: "Admin tidak ditemukan!" });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ status: 400, message: "Something went wrong!" });
  }
}
