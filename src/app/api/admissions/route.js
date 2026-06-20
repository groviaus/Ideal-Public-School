/**
 * POST /api/admissions — Submit a new admission application.
 * Accepts JSON data containing text fields + Hostinger file URLs.
 */

import { NextResponse } from "next/server"
import { createApplication, sanitize } from "@/lib/admissionsStore"
import { validateField } from "@/lib/validations"

export async function POST(request) {
  try {
    const data = await request.json()

    // ── Bot Protection (reCAPTCHA v3) ─────────────────────────
    if (process.env.RECAPTCHA_SECRET_KEY && data.recaptchaToken) {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`
      })
      const verifyJson = await verifyRes.json()
      // A score of 0.5 is a common threshold (0.0 is bot, 1.0 is human)
      if (!verifyJson.success || verifyJson.score < 0.5) {
        console.warn(`[ADMISSIONS] Bot detected via reCAPTCHA (score: ${verifyJson.score}).`)
        return NextResponse.json({ success: false, message: "Suspicious activity detected. Please try again." }, { status: 403 })
      }
    }

    const errors = {}

    // ── 3. Shared Validations ────────────────────────────────────
    const fieldsToValidate = [
      "studentName", "gender", "dateOfBirth", "classApplying", "aadhaar",
      "fatherName", "motherName", "mobile", "alternateMobile", "email",
      "address", "district", "state", "pinCode",
      "previousSchool", "previousClass", "board",
      "docPhoto", "docBirthCert", "docReportCard"
    ]

    fieldsToValidate.forEach(field => {
      const error = validateField(field, data[field], data)
      if (error) errors[field] = error
    })

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 })
    }

    // ── Save to MySQL ────────────────────────────────────────────
    const application = await createApplication({
      id: data.id, // Passed from frontend (generated there to match PHP directory)
      studentName: data.studentName,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      classApplying: data.classApplying,
      aadhaar: data.aadhaar || null,
      fatherName: data.fatherName,
      motherName: data.motherName,
      mobile: data.mobile,
      alternateMobile: data.alternateMobile || null,
      email: data.email,
      address: data.address,
      district: data.district,
      state: data.state,
      pinCode: data.pinCode,
      previousSchool: data.previousSchool,
      previousClass: data.previousClass,
      board: data.board,
      docPhoto: data.docPhoto,
      docBirthCert: data.docBirthCert,
      docReportCard: data.docReportCard,
      docTransferCert: data.docTransferCert || null,
    })

    console.log(`[ADMISSIONS] New application received: ${application.id} — ${sanitize(data.studentName)} (${data.email})`)

    return NextResponse.json({ success: true, applicationId: application.id }, { status: 201 })
  } catch (err) {
    console.error("[ADMISSIONS] POST error:", err)
    return NextResponse.json({ success: false, message: "Server error. Please try again." }, { status: 500 })
  }
}
