"use client"

export default function ParentDetailsStep({ data, onChange, onBlur, errors }) {
  const field = (name, value) => {
    if (name === "fatherName" || name === "motherName") value = value.replace(/[^a-zA-Z\s]/g, "")
    if (name === "email") value = value.toLowerCase()
    onChange({ ...data, [name]: value })
  }
  
  const numOnly = (v, max = 10) => v.replace(/\D/g, "").slice(0, max)

  const handleBlur = (e) => {
    if (onBlur) onBlur(e.target.name)
  }

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
            name="fatherName"
            value={data.fatherName || ""}
            onChange={e => field("fatherName", e.target.value)}
            onBlur={handleBlur}
            maxLength={50}
            placeholder="Father's full name"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.fatherName ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          />
          {errors.fatherName && <p className="mt-1 text-xs text-red-500 font-medium">{errors.fatherName}</p>}
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Mother's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="motherName"
            value={data.motherName || ""}
            onChange={e => field("motherName", e.target.value)}
            onBlur={handleBlur}
            maxLength={50}
            placeholder="Mother's full name"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.motherName ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          />
          {errors.motherName && <p className="mt-1 text-xs text-red-500 font-medium">{errors.motherName}</p>}
        </div>
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 rounded-l-lg bg-slate-50 text-slate-500 text-sm font-medium">+91</span>
          <input
            type="tel"
            name="mobile"
            value={data.mobile || ""}
            onChange={e => field("mobile", numOnly(e.target.value))}
            onBlur={handleBlur}
            maxLength={10}
            placeholder="10-digit mobile number"
            className={`flex-1 px-4 py-2.5 border rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.mobile ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          />
        </div>
        {errors.mobile && <p className="mt-1 text-xs text-red-500 font-medium">{errors.mobile}</p>}
      </div>

      {/* Alternate Mobile */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Alternate Mobile <span className="text-slate-400 text-xs">(Optional)</span>
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 rounded-l-lg bg-slate-50 text-slate-500 text-sm font-medium">+91</span>
          <input
            type="tel"
            name="alternateMobile"
            value={data.alternateMobile || ""}
            onChange={e => field("alternateMobile", numOnly(e.target.value))}
            onBlur={handleBlur}
            maxLength={10}
            placeholder="10-digit alternate number"
            className={`flex-1 px-4 py-2.5 border rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.alternateMobile ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          />
        </div>
        {errors.alternateMobile && <p className="mt-1 text-xs text-red-500 font-medium">{errors.alternateMobile}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={data.email || ""}
          onChange={e => field("email", e.target.value)}
          onBlur={handleBlur}
          maxLength={100}
          placeholder="parent@example.com"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.email ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
      </div>
    </div>
  )
}
