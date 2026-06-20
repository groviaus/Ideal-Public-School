"use client"

import { CLASSES } from "@/lib/validations"

const today = new Date().toISOString().split("T")[0]

export default function StudentInfoStep({ data, onChange, onBlur, errors }) {
  const field = (name, value) => {
    // Basic sanitization on type
    if (name === "studentName") value = value.replace(/[^a-zA-Z\s]/g, "")
    if (name === "aadhaar") value = value.replace(/\D/g, "").slice(0, 12)
    onChange({ ...data, [name]: value })
  }

  const handleBlur = (e) => {
    if (onBlur) onBlur(e.target.name)
  }

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Student Information</h3>

      {/* Student Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Student Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="studentName"
          value={data.studentName || ""}
          onChange={e => field("studentName", e.target.value)}
          onBlur={handleBlur}
          maxLength={50}
          placeholder="Enter student's full name"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.studentName ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        />
        {errors.studentName && <p className="mt-1 text-xs text-red-500 font-medium">{errors.studentName}</p>}
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Gender <span className="text-red-500">*</span>
        </label>
        <select
          name="gender"
          value={data.gender || ""}
          onChange={e => field("gender", e.target.value)}
          onBlur={handleBlur}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition bg-white ${errors.gender ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p className="mt-1 text-xs text-red-500 font-medium">{errors.gender}</p>}
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={data.dateOfBirth || ""}
          onChange={e => field("dateOfBirth", e.target.value)}
          onBlur={handleBlur}
          max={today}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.dateOfBirth ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        />
        {errors.dateOfBirth && <p className="mt-1 text-xs text-red-500 font-medium">{errors.dateOfBirth}</p>}
      </div>

      {/* Class Applying For */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Class Applying For <span className="text-red-500">*</span>
        </label>
        <select
          name="classApplying"
          value={data.classApplying || ""}
          onChange={e => {
            field("classApplying", e.target.value)
            // If DOB is already there, validate age for new class
            if (data.dateOfBirth && onBlur) {
              setTimeout(() => onBlur("dateOfBirth"), 0)
            }
          }}
          onBlur={handleBlur}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition bg-white ${errors.classApplying ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        >
          <option value="">Select class</option>
          {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.classApplying && <p className="mt-1 text-xs text-red-500 font-medium">{errors.classApplying}</p>}
      </div>

      {/* Aadhaar (optional) */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Aadhaar Number <span className="text-slate-400 text-xs">(Optional)</span>
        </label>
        <input
          type="text"
          name="aadhaar"
          value={data.aadhaar || ""}
          onChange={e => field("aadhaar", e.target.value)}
          onBlur={handleBlur}
          maxLength={12}
          placeholder="12-digit Aadhaar number"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.aadhaar ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        />
        {errors.aadhaar && <p className="mt-1 text-xs text-red-500 font-medium">{errors.aadhaar}</p>}
      </div>
    </div>
  )
}
