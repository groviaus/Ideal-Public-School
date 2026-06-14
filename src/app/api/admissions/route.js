/**
 * POST /api/admissions — Submit a new admission application.
 * Accepts JSON data containing text fields + Hostinger file URLs.
 */

import { NextResponse } from "next/server"
import { createApplication, sanitize } from "@/lib/admissionsStore"

function validateText(value, fieldName, opts = {}) {
  const { required = true, minLen = 2, maxLen = 255, pattern } = opts
  const v = (value || "").trim()
  if (required && !v) return `${fieldName} is required.`
  if (v && v.length < minLen) return `${fieldName} must be at least ${minLen} characters.`
  if (v && v.length > maxLen) return `${fieldName} must not exceed ${maxLen} characters.`
  if (v && pattern && !pattern.test(v)) return `${fieldName} has an invalid format.`
  return null
}

export async function POST(request) {
  try {
    const data = await request.json()
    const errors = {}

    // ── Student Information ──────────────────────────────────────
    const nameErr = validateText(data.studentName, "Student Name", { pattern: /^[a-zA-Z\s]+$/, maxLen: 100 })
    if (nameErr) errors.studentName = nameErr

    const gender = data.gender
    if (!["Male", "Female", "Other"].includes(gender)) errors.gender = "Gender is required."

    const dob = data.dateOfBirth
    if (!dob) errors.dateOfBirth = "Date of birth is required."
    else if (new Date(dob) > new Date()) errors.dateOfBirth = "Date of birth cannot be in the future."

    const classApplying = data.classApplying
    if (!classApplying) errors.classApplying = "Class is required."

    const aadhaar = data.aadhaar || ""
    if (aadhaar && !/^\d{12}$/.test(aadhaar)) errors.aadhaar = "Aadhaar must be exactly 12 digits."

    // ── Parent Details ───────────────────────────────────────────
    const fatherErr = validateText(data.fatherName, "Father's Name", { pattern: /^[a-zA-Z\s]+$/, maxLen: 100 })
    if (fatherErr) errors.fatherName = fatherErr

    const motherErr = validateText(data.motherName, "Mother's Name", { pattern: /^[a-zA-Z\s]+$/, maxLen: 100 })
    if (motherErr) errors.motherName = motherErr

    const mobile = (data.mobile || "").trim()
    if (!mobile) errors.mobile = "Mobile number is required."
    else if (!/^\d{10}$/.test(mobile)) errors.mobile = "Mobile must be exactly 10 digits."

    const altMobile = (data.alternateMobile || "").trim()
    if (altMobile && !/^\d{10}$/.test(altMobile)) errors.alternateMobile = "Alternate mobile must be exactly 10 digits."

    const email = (data.email || "").trim()
    if (!email) errors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email address."

    // ── Address Details ──────────────────────────────────────────
    const addressErr = validateText(data.address, "Address", { minLen: 5, maxLen: 500 })
    if (addressErr) errors.address = addressErr

    const districtErr = validateText(data.district, "District", { minLen: 2, maxLen: 100 })
    if (districtErr) errors.district = districtErr

    const stateErr = validateText(data.state, "State", { minLen: 2, maxLen: 100 })
    if (stateErr) errors.state = stateErr

    const pinCode = (data.pinCode || "").trim()
    if (!pinCode) errors.pinCode = "PIN code is required."
    else if (!/^\d{6}$/.test(pinCode)) errors.pinCode = "PIN code must be exactly 6 digits."

    // ── Academic Details ─────────────────────────────────────────
    const schoolErr = validateText(data.previousSchool, "Previous School Name", { minLen: 2, maxLen: 255 })
    if (schoolErr) errors.previousSchool = schoolErr

    const prevClassErr = validateText(data.previousClass, "Previous Class", { minLen: 1, maxLen: 50 })
    if (prevClassErr) errors.previousClass = prevClassErr

    const validBoards = ["CBSE", "ICSE", "State Board", "IB", "Other"]
    const board = data.board
    if (!board || !validBoards.includes(board)) errors.board = "Board is required."

    // ── File Uploads ─────────────────────────────────────────────
    if (!data.docPhoto) errors.docPhoto = "Student photo is required."
    if (!data.docBirthCert) errors.docBirthCert = "Birth certificate is required."
    if (!data.docReportCard) errors.docReportCard = "Report card is required."

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 })
    }

    // ── Save to MySQL ────────────────────────────────────────────
    const application = await createApplication({
      id: data.id, // Passed from frontend (generated there to match PHP directory)
      studentName: data.studentName,
      gender,
      dateOfBirth: dob,
      classApplying,
      aadhaar: aadhaar || null,
      fatherName: data.fatherName,
      motherName: data.motherName,
      mobile,
      alternateMobile: altMobile || null,
      email,
      address: data.address,
      district: data.district,
      state: data.state,
      pinCode,
      previousSchool: data.previousSchool,
      previousClass: data.previousClass,
      board,
      docPhoto: data.docPhoto,
      docBirthCert: data.docBirthCert,
      docReportCard: data.docReportCard,
      docTransferCert: data.docTransferCert || null,
    })

    console.log(`[ADMISSIONS] New application received: ${application.id} — ${sanitize(data.studentName)} (${email})`)

    return NextResponse.json({ success: true, applicationId: application.id }, { status: 201 })
  } catch (err) {
    console.error("[ADMISSIONS] POST error:", err)
    return NextResponse.json({ success: false, message: "Server error. Please try again." }, { status: 500 })
  }
}
