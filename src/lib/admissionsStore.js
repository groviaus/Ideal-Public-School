/**
 * admissionsStore.js — MySQL-backed CRUD helpers for admission applications.
 */

import { getPool } from "@/lib/db"
import { randomUUID } from "crypto"

/** Sanitize a string — strip HTML tags, trim. */
export function sanitize(value) {
  if (typeof value !== "string") return value ?? null
  return value.replace(/<[^>]*>/g, "").trim()
}

/** Insert a new application. Returns the created record. */
export async function createApplication(data) {
  const pool = getPool()
  const id = randomUUID()
  const now = new Date()

  const sql = `
    INSERT INTO admissions (
      id, submitted_at, status,
      student_name, gender, date_of_birth, class_applying, aadhaar,
      father_name, mother_name, mobile, alternate_mobile, email,
      address, district, state, pin_code,
      previous_school, previous_class, board,
      doc_photo, doc_birth_cert, doc_report_card, doc_transfer_cert
    ) VALUES (
      ?, ?, 'New',
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?,
      ?, ?, ?, ?
    )
  `

  const values = [
    id, now,
    sanitize(data.studentName), data.gender, data.dateOfBirth, sanitize(data.classApplying), sanitize(data.aadhaar) || null,
    sanitize(data.fatherName), sanitize(data.motherName), sanitize(data.mobile), sanitize(data.alternateMobile) || null, sanitize(data.email),
    sanitize(data.address), sanitize(data.district), sanitize(data.state), sanitize(data.pinCode),
    sanitize(data.previousSchool), sanitize(data.previousClass), sanitize(data.board),
    data.docPhoto || null, data.docBirthCert || null, data.docReportCard || null, data.docTransferCert || null,
  ]

  await pool.execute(sql, values)
  return getApplicationById(id)
}

/** Fetch a single application by UUID. */
export async function getApplicationById(id) {
  const pool = getPool()
  const [rows] = await pool.execute("SELECT * FROM admissions WHERE id = ?", [id])
  return rows[0] ?? null
}

/** Update status and/or remarks on an application. */
export async function updateApplication(id, { status, remarks }) {
  const pool = getPool()
  await pool.execute(
    "UPDATE admissions SET status = ?, remarks = ?, updated_at = ? WHERE id = ?",
    [status, remarks ?? null, new Date(), id]
  )
  return getApplicationById(id)
}

/**
 * List applications with optional search/filter/pagination.
 * Returns { applications, total }
 */
export async function filterApplications({
  search = "",
  classFilter = "all",
  statusFilter = "all",
  dateFrom = "",
  dateTo = "",
  page = 1,
  pageSize = 20,
} = {}) {
  const pool = getPool()
  const conditions = []
  const params = []

  if (search) {
    conditions.push(
      "(student_name LIKE ? OR father_name LIKE ? OR mother_name LIKE ? OR mobile LIKE ? OR email LIKE ?)"
    )
    const q = `%${search}%`
    params.push(q, q, q, q, q)
  }
  if (classFilter !== "all") {
    conditions.push("class_applying = ?")
    params.push(classFilter)
  }
  if (statusFilter !== "all") {
    conditions.push("status = ?")
    params.push(statusFilter)
  }
  if (dateFrom) {
    conditions.push("submitted_at >= ?")
    params.push(new Date(dateFrom))
  }
  if (dateTo) {
    const to = new Date(dateTo)
    to.setHours(23, 59, 59, 999)
    conditions.push("submitted_at <= ?")
    params.push(to)
  }

  const where = conditions.length ? "WHERE " + conditions.join(" AND ") : ""
  const offset = (page - 1) * pageSize

  const [[{ total }]] = await pool.execute(
    `SELECT COUNT(*) as total FROM admissions ${where}`,
    params
  )

  const [applications] = await pool.execute(
    `SELECT * FROM admissions ${where} ORDER BY submitted_at DESC LIMIT ? OFFSET ?`,
    [...params, pageSize, offset]
  )

  return { applications, total }
}

/** Fetch ALL applications for CSV export. */
export async function exportApplications() {
  const pool = getPool()
  const [rows] = await pool.execute("SELECT * FROM admissions ORDER BY submitted_at DESC")
  return rows
}
