"use client"

import { BOARDS, CLASSES } from "@/lib/validations"

export default function AcademicStep({ data, onChange, onBlur, errors }) {
  const field = (name, value) => onChange({ ...data, [name]: value })

  const handleBlur = (e) => {
    if (onBlur) onBlur(e.target.name)
  }

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Academic Details</h3>

      {/* Previous School */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Previous School Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="previousSchool"
          value={data.previousSchool || ""}
          onChange={e => field("previousSchool", e.target.value)}
          onBlur={handleBlur}
          maxLength={100}
          placeholder="Name of previous school attended"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.previousSchool ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        />
        {errors.previousSchool && <p className="mt-1 text-xs text-red-500 font-medium">{errors.previousSchool}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Class */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Last Class Attended <span className="text-red-500">*</span>
          </label>
          <select
            name="previousClass"
            value={data.previousClass || ""}
            onChange={e => field("previousClass", e.target.value)}
            onBlur={handleBlur}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition bg-white ${errors.previousClass ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          >
            <option value="">Select class</option>
            <option value="N/A">N/A (First time admission)</option>
            {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.previousClass && <p className="mt-1 text-xs text-red-500 font-medium">{errors.previousClass}</p>}
        </div>

        {/* Board */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Board of Study <span className="text-red-500">*</span>
          </label>
          <select
            name="board"
            value={data.board || ""}
            onChange={e => field("board", e.target.value)}
            onBlur={handleBlur}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition bg-white ${errors.board ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          >
            <option value="">Select board</option>
            <option value="N/A">N/A</option>
            {BOARDS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          {errors.board && <p className="mt-1 text-xs text-red-500 font-medium">{errors.board}</p>}
        </div>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-700">
        <strong>Note:</strong> If applying for Nursery or LKG, please select "N/A" for previous school/class and Board.
      </div>
    </div>
  )
}
