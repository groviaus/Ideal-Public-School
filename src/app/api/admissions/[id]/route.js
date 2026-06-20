/**
 * GET  /api/admissions/[id] — Get single application (admin)
 * PATCH /api/admissions/[id] — Update status/remarks (admin)
 */

import { NextResponse } from "next/server"
import { getApplicationById, updateApplication } from "@/lib/admissionsStore"

function adminAuth(request) {
  const token = request.cookies.get("admin_token")?.value
  return token === process.env.ADMIN_PASSWORD
}

export async function GET(request, { params }) {
  if (!adminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    const { id } = await params
    const app = await getApplicationById(id)
    if (!app) return NextResponse.json({ error: "Not found" }, { status: 404 })
    return NextResponse.json({ success: true, application: app })
  } catch (err) {
    console.error("[ADMISSIONS GET]", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function PATCH(request, { params }) {
  if (!adminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    const { id } = await params
    const body = await request.json()
    const VALID_STATUSES = ["New", "Under Review", "Contacted", "Shortlisted", "Approved", "Rejected"]
    if (!VALID_STATUSES.includes(body.status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 422 })
    }
    const updated = await updateApplication(id, {
      status: body.status,
      remarks: (body.remarks || "").substring(0, 2000),
    })
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 })
    return NextResponse.json({ success: true, application: updated })
  } catch (err) {
    console.error("[ADMISSIONS PATCH]", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
