"use client"

import { INDIAN_STATES } from "@/lib/validations"

export default function AddressStep({ data, onChange, onBlur, errors }) {
  const field = (name, value) => {
    if (name === "district") value = value.replace(/[^a-zA-Z\s]/g, "")
    onChange({ ...data, [name]: value })
  }

  const handleBlur = (e) => {
    if (onBlur) onBlur(e.target.name)
  }

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Address Details</h3>

      {/* Complete Address */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Complete Address <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          value={data.address || ""}
          onChange={e => field("address", e.target.value)}
          onBlur={handleBlur}
          rows={3}
          maxLength={300}
          placeholder="House No., Street, Area / Village, Landmark"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none ${errors.address ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        />
        {errors.address && <p className="mt-1 text-xs text-red-500 font-medium">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* District */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            District <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="district"
            value={data.district || ""}
            onChange={e => field("district", e.target.value)}
            onBlur={handleBlur}
            maxLength={100}
            placeholder="e.g. Siwan"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.district ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          />
          {errors.district && <p className="mt-1 text-xs text-red-500 font-medium">{errors.district}</p>}
        </div>

        {/* PIN Code */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            PIN Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="pinCode"
            value={data.pinCode || ""}
            onChange={e => field("pinCode", e.target.value.replace(/\D/g, "").slice(0, 6))}
            onBlur={handleBlur}
            maxLength={6}
            placeholder="6-digit PIN code"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.pinCode ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
          />
          {errors.pinCode && <p className="mt-1 text-xs text-red-500 font-medium">{errors.pinCode}</p>}
        </div>
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          State <span className="text-red-500">*</span>
        </label>
        <select
          name="state"
          value={data.state || ""}
          onChange={e => field("state", e.target.value)}
          onBlur={handleBlur}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition bg-white ${errors.state ? "border-red-400 bg-red-50 focus:ring-red-500" : "border-slate-300"}`}
        >
          <option value="">Select state / UT</option>
          {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.state && <p className="mt-1 text-xs text-red-500 font-medium">{errors.state}</p>}
      </div>
    </div>
  )
}
