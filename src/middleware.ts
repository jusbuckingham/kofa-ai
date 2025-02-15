import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(req) {
  const session = await getSession({ req });

  if (!session || session.user.subscriptionStatus !== "active") {
    return NextResponse.redirect(new URL("/pricing", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect all /dashboard routes
};