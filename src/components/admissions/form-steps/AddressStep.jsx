"use client"

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
]

export default function AddressStep({ data, onChange, errors }) {
  const field = (name, value) => onChange({ ...data, [name]: value })

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Address Details</h3>

      {/* Complete Address */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Complete Address <span className="text-red-500">*</span>
        </label>
        <textarea
          value={data.address || ""}
          onChange={e => field("address", e.target.value)}
          rows={3}
          maxLength={500}
          placeholder="House No., Street, Area / Village, Landmark"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${errors.address ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        />
        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* District */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            District <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.district || ""}
            onChange={e => field("district", e.target.value)}
            maxLength={100}
            placeholder="e.g. Siwan"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.district ? "border-red-400 bg-red-50" : "border-slate-300"}`}
          />
          {errors.district && <p className="mt-1 text-xs text-red-500">{errors.district}</p>}
        </div>

        {/* PIN Code */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            PIN Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.pinCode || ""}
            onChange={e => field("pinCode", e.target.value.replace(/\D/g, "").slice(0, 6))}
            maxLength={6}
            placeholder="6-digit PIN code"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.pinCode ? "border-red-400 bg-red-50" : "border-slate-300"}`}
          />
          {errors.pinCode && <p className="mt-1 text-xs text-red-500">{errors.pinCode}</p>}
        </div>
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          State <span className="text-red-500">*</span>
        </label>
        <select
          value={data.state || ""}
          onChange={e => field("state", e.target.value)}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white ${errors.state ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        >
          <option value="">Select state / UT</option>
          {INDIAN_STATES.map(s => <option key={s}>{s}</option>)}
        </select>
        {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
      </div>
    </div>
  )
}
