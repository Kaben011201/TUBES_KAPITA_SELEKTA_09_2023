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
  return bcrypt.compareSync(password1, password2);
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
      if (validatePassword(password, admin.password)) {
        token = await signToken(admin);
      } else {
        return Response.json({ message: "Password Salah!" });
      }
    }

    return Response.json({ token, message: "Berhasil Login!" });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong!" });
  }
}
