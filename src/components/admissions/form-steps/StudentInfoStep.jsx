"use client"

const CLASSES = [
  "Nursery", "LKG", "UKG",
  "Class 1", "Class 2", "Class 3", "Class 4",
  "Class 5", "Class 6", "Class 7", "Class 8",
]

const today = new Date().toISOString().split("T")[0]

export default function StudentInfoStep({ data, onChange, errors }) {
  const field = (name, value) => onChange({ ...data, [name]: value })

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
          value={data.studentName || ""}
          onChange={e => field("studentName", e.target.value)}
          maxLength={100}
          placeholder="Enter student's full name"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.studentName ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        />
        {errors.studentName && <p className="mt-1 text-xs text-red-500">{errors.studentName}</p>}
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Gender <span className="text-red-500">*</span>
        </label>
        <select
          value={data.gender || ""}
          onChange={e => field("gender", e.target.value)}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white ${errors.gender ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        >
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          value={data.dateOfBirth || ""}
          onChange={e => field("dateOfBirth", e.target.value)}
          max={today}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.dateOfBirth ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        />
        {errors.dateOfBirth && <p className="mt-1 text-xs text-red-500">{errors.dateOfBirth}</p>}
      </div>

      {/* Class Applying For */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Class Applying For <span className="text-red-500">*</span>
        </label>
        <select
          value={data.classApplying || ""}
          onChange={e => field("classApplying", e.target.value)}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white ${errors.classApplying ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        >
          <option value="">Select class</option>
          {CLASSES.map(c => <option key={c}>{c}</option>)}
        </select>
        {errors.classApplying && <p className="mt-1 text-xs text-red-500">{errors.classApplying}</p>}
      </div>

      {/* Aadhaar (optional) */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Aadhaar Number <span className="text-slate-400 text-xs">(Optional)</span>
        </label>
        <input
          type="text"
          value={data.aadhaar || ""}
          onChange={e => field("aadhaar", e.target.value.replace(/\D/g, "").slice(0, 12))}
          maxLength={12}
          placeholder="12-digit Aadhaar number"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.aadhaar ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        />
        {errors.aadhaar && <p className="mt-1 text-xs text-red-500">{errors.aadhaar}</p>}
      </div>
    </div>
  )
}
