import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  // If tokens are missing → redirect to login
  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Forward request to backend to see if access token is valid
  const backendRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${req.nextUrl.pathname}`,
    {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: req.method !== "GET" ? await req.text() : undefined,
    }
  );

  // If backend says 401 → try refreshing token
  if (backendRes.status === 401) {
    const refreshRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!refreshRes.ok) {
      // Refresh failed → redirect to login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // If backend says OK → let request continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
