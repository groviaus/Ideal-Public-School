"use client"

import { useRef } from "react"
import { Upload, FileCheck, X } from "lucide-react"

const IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]
const DOC_TYPES   = [...IMAGE_TYPES, "application/pdf"]
const MAX_PHOTO   = 5 * 1024 * 1024
const MAX_DOC     = 10 * 1024 * 1024

function FileField({ label, required, accept, maxSize, value, onChange, error, hint }) {
  const inputRef = useRef()

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    onChange(file)
  }

  const clear = (e) => {
    e.stopPropagation()
    onChange(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  const sizeLabel = maxSize >= 1024 * 1024 ? `${maxSize / 1024 / 1024} MB` : `${maxSize / 1024} KB`

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label} {required ? <span className="text-red-500">*</span> : <span className="text-slate-400 text-xs">(Optional)</span>}
      </label>
      {value ? (
        <div className="flex items-center gap-3 px-4 py-3 border border-green-300 bg-green-50 rounded-lg">
          <FileCheck className="h-5 w-5 text-green-600 shrink-0" />
          <span className="text-sm text-green-700 flex-1 truncate">{value.name}</span>
          <button type="button" onClick={clear} className="text-slate-400 hover:text-red-500 transition">
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`w-full flex flex-col items-center justify-center gap-2 px-4 py-6 border-2 border-dashed rounded-lg text-sm transition hover:border-blue-400 hover:bg-blue-50 ${error ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        >
          <Upload className="h-6 w-6 text-slate-400" />
          <span className="text-slate-600">Click to upload</span>
          <span className="text-xs text-slate-400">{hint} · Max {sizeLabel}</span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFile}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default function DocumentUploadStep({ data, onChange, errors }) {
  const field = (name, value) => onChange({ ...data, [name]: value })

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Document Uploads</h3>
      <p className="text-sm text-slate-500">Please upload clear, readable copies of all required documents.</p>

      <FileField
        label="Student Photo"
        required
        accept="image/jpeg,image/png"
        maxSize={MAX_PHOTO}
        value={data.docPhoto}
        onChange={v => field("docPhoto", v)}
        error={errors.docPhoto}
        hint="JPG, PNG"
      />
      <FileField
        label="Birth Certificate"
        required
        accept="application/pdf,image/jpeg,image/png"
        maxSize={MAX_DOC}
        value={data.docBirthCert}
        onChange={v => field("docBirthCert", v)}
        error={errors.docBirthCert}
        hint="PDF, JPG, PNG"
      />
      <FileField
        label="Previous Report Card / Marksheet"
        required
        accept="application/pdf,image/jpeg,image/png"
        maxSize={MAX_DOC}
        value={data.docReportCard}
        onChange={v => field("docReportCard", v)}
        error={errors.docReportCard}
        hint="PDF, JPG, PNG"
      />
      <FileField
        label="Transfer Certificate"
        required={false}
        accept="application/pdf,image/jpeg,image/png"
        maxSize={MAX_DOC}
        value={data.docTransferCert}
        onChange={v => field("docTransferCert", v)}
        error={errors.docTransferCert}
        hint="PDF, JPG, PNG"
      />
    </div>
  )
}
