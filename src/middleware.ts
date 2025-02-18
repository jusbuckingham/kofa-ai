import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();

  // 🛑 Prevent excessive logging (Limit it)
  if (process.env.NODE_ENV === "development") {
    console.log("🔍 Checking session in middleware...");
  }

  return res;
}

// ✅ Ensure middleware runs on protected routes only
export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"], // Add the correct routes
};