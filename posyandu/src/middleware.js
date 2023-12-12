import { NextResponse } from "next/server";
import * as jose from "jose";


// REDIRECT TO LOGIN IF NO TOKEN / NO VALID TOKEN
export default async function middleware(req) {
  // GET TOKEN
  const token = req.cookies.get("token")?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const developUrl= "http://localhost:3000";
  const deployUrl="https://posyandu-mawar-1.vercel.app";

  // VERIFY TOKEN
  if (token) {
    try {
      const verifiedToken = await jose.jwtVerify(token, secret);
      console.log("Verification successful");
      // console.log("Verified Token:", verifiedToken);
    } catch (error) {
      console.error("Verification failed:", error);
      return NextResponse.redirect(`${developUrl}/login`);
    }
  } else {
    console.log("No Token Found");
    return NextResponse.redirect(`${developUrl}/login`);
  }
}

// ROUTE USING MIDDLEWARE
export const config = {
  matcher: ["/dashboard/:path*"],
};