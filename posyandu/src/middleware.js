import { NextResponse } from "next/server";
import * as jose from "jose";

// REDIRECT TO LOGIN IF NO TOKEN / NO VALID TOKEN
export default async function middleware(req) {
  // GET TOKEN
  const token = req.cookies.get("token")?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const url = "http://localhost:3000";
  //const url = "https://posyandu-mawar-1.vercel.app";

  // VERIFY TOKEN
  if (token) {
    try {
      const verifiedToken = await jose.jwtVerify(token, secret);
      console.log("Verifikasi berhasil");
      // console.log("Verified Token:", verifiedToken);
    } catch (error) {
      console.error("Verifikasi gagal:", error);
      return NextResponse.redirect(`${url}/login`);
    }
  } else {
    console.log("Token tidak ditemukan");
    return NextResponse.redirect(`${url}/login`);
  }
}

// ROUTE USING MIDDLEWARE
export const config = {
  matcher: ["/dashboard/:path*"],
};
