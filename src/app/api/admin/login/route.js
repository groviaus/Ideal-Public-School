/**
 * POST /api/admin/login  — Set admin auth cookie
 * POST /api/admin/logout — Clear it
 */

import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { password } = await request.json()
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }
    const response = NextResponse.json({ success: true })
    response.cookies.set("admin_token", password, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    })
    return response
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
