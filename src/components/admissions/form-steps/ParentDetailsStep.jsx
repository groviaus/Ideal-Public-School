"use client"

export default function ParentDetailsStep({ data, onChange, errors }) {
  const field = (name, value) => onChange({ ...data, [name]: value })
  const numOnly = (v, max = 10) => v.replace(/\D/g, "").slice(0, max)

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Parent / Guardian Details</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Father's Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Father's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.fatherName || ""}
            onChange={e => field("fatherName", e.target.value)}
            maxLength={100}
            placeholder="Father's full name"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.fatherName ? "border-red-400 bg-red-50" : "border-slate-300"}`}
          />
          {errors.fatherName && <p className="mt-1 text-xs text-red-500">{errors.fatherName}</p>}
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Mother's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.motherName || ""}
            onChange={e => field("motherName", e.target.value)}
            maxLength={100}
            placeholder="Mother's full name"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.motherName ? "border-red-400 bg-red-50" : "border-slate-300"}`}
          />
          {errors.motherName && <p className="mt-1 text-xs text-red-500">{errors.motherName}</p>}
        </div>
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 rounded-l-lg bg-slate-50 text-slate-500 text-sm">+91</span>
          <input
            type="tel"
            value={data.mobile || ""}
            onChange={e => field("mobile", numOnly(e.target.value))}
            maxLength={10}
            placeholder="10-digit mobile number"
            className={`flex-1 px-4 py-2.5 border rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.mobile ? "border-red-400 bg-red-50" : "border-slate-300"}`}
          />
        </div>
        {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
      </div>

      {/* Alternate Mobile */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Alternate Mobile <span className="text-slate-400 text-xs">(Optional)</span>
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 rounded-l-lg bg-slate-50 text-slate-500 text-sm">+91</span>
          <input
            type="tel"
            value={data.alternateMobile || ""}
            onChange={e => field("alternateMobile", numOnly(e.target.value))}
            maxLength={10}
            placeholder="10-digit alternate number"
            className={`flex-1 px-4 py-2.5 border rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.alternateMobile ? "border-red-400 bg-red-50" : "border-slate-300"}`}
          />
        </div>
        {errors.alternateMobile && <p className="mt-1 text-xs text-red-500">{errors.alternateMobile}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={data.email || ""}
          onChange={e => field("email", e.target.value)}
          placeholder="parent@example.com"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.email ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
    </div>
  )
}
