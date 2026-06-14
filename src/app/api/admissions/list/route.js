/**
 * GET /api/admissions/list — Admin: list applications with search/filter/pagination.
 * PATCH not here — see [id]/route.js
 */

import { NextResponse } from "next/server"
import { filterApplications } from "@/lib/admissionsStore"

function adminAuth(request) {
  const token = request.cookies.get("admin_token")?.value
  return token === process.env.ADMIN_PASSWORD
}

export async function GET(request) {
  if (!adminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const search       = searchParams.get("search") || ""
  const classFilter  = searchParams.get("class")  || "all"
  const statusFilter = searchParams.get("status") || "all"
  const dateFrom     = searchParams.get("dateFrom") || ""
  const dateTo       = searchParams.get("dateTo")   || ""
  const page         = parseInt(searchParams.get("page") || "1")
  const pageSize     = parseInt(searchParams.get("pageSize") || "20")

  try {
    const result = await filterApplications({ search, classFilter, statusFilter, dateFrom, dateTo, page, pageSize })
    return NextResponse.json({ success: true, ...result })
  } catch (err) {
    console.error("[ADMISSIONS LIST] Error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
