/**
 * GET /api/admissions/export — Download all applications as CSV (admin only)
 */

import { NextResponse } from "next/server"
import { exportApplications } from "@/lib/admissionsStore"

function adminAuth(request) {
  const token = request.cookies.get("admin_token")?.value
  return token === process.env.ADMIN_PASSWORD
}

function toCSV(rows) {
  const headers = [
    "ID", "Submitted At", "Status", "Remarks",
    "Student Name", "Gender", "Date of Birth", "Class Applying", "Aadhaar",
    "Father Name", "Mother Name", "Mobile", "Alternate Mobile", "Email",
    "Address", "District", "State", "PIN Code",
    "Previous School", "Previous Class", "Board",
    "Photo", "Birth Cert", "Report Card", "Transfer Cert",
  ]
  const escape = (v) => {
    if (v == null) return ""
    const str = String(v).replace(/"/g, '""')
    return str.includes(",") || str.includes("\n") || str.includes('"') ? `"${str}"` : str
  }
  const dataRows = rows.map((r) => [
    r.id, r.submitted_at, r.status, r.remarks,
    r.student_name, r.gender, r.date_of_birth, r.class_applying, r.aadhaar,
    r.father_name, r.mother_name, r.mobile, r.alternate_mobile, r.email,
    r.address, r.district, r.state, r.pin_code,
    r.previous_school, r.previous_class, r.board,
    r.doc_photo, r.doc_birth_cert, r.doc_report_card, r.doc_transfer_cert,
  ].map(escape).join(","))

  return [headers.map(escape).join(","), ...dataRows].join("\r\n")
}

export async function GET(request) {
  if (!adminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    const rows = await exportApplications()
    const csv = toCSV(rows)
    const filename = `admissions-${new Date().toISOString().slice(0, 10)}.csv`
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    })
  } catch (err) {
    console.error("[ADMISSIONS EXPORT]", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
