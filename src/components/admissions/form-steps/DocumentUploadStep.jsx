"use client"

import { useRef, useState } from "react"
import { Upload, FileCheck, X } from "lucide-react"
import { validateFile } from "@/lib/validations"

const MAX_PHOTO   = 2 * 1024 * 1024
const MAX_DOC     = 5 * 1024 * 1024

function FileField({ name, label, required, accept, maxSize, value, onChange, onBlur, error, hint, type }) {
  const inputRef = useRef()
  const [localError, setLocalError] = useState("")

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    setLocalError("")
    if (!file) return

    const vError = validateFile(file, type)
    if (vError) {
      setLocalError(vError)
      if (inputRef.current) inputRef.current.value = ""
      onChange(null)
      return
    }
    
    onChange(file)
    if (onBlur) onBlur(name)
  }

  const clear = (e) => {
    e.stopPropagation()
    onChange(null)
    setLocalError("")
    if (inputRef.current) inputRef.current.value = ""
    if (onBlur) onBlur(name)
  }

  const sizeLabel = maxSize >= 1024 * 1024 ? `${maxSize / 1024 / 1024} MB` : `${maxSize / 1024} KB`
  const displayError = localError || error

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
          className={`w-full flex flex-col items-center justify-center gap-2 px-4 py-6 border-2 border-dashed rounded-lg text-sm transition hover:border-primary hover:bg-primary/5 ${displayError ? "border-red-400 bg-red-50" : "border-slate-300"}`}
        >
          <Upload className={`h-6 w-6 ${displayError ? "text-red-400" : "text-slate-400"}`} />
          <span className="text-slate-600 font-medium">Click to upload</span>
          <span className="text-xs text-slate-400">{hint} · Max {sizeLabel}</span>
        </button>
      )}
      <input
        name={name}
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFile}
      />
      {displayError && <p className="mt-1 text-xs text-red-500 font-medium">{displayError}</p>}
    </div>
  )
}

export default function DocumentUploadStep({ data, onChange, onBlur, errors }) {
  const field = (name, value) => onChange({ ...data, [name]: value })

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Document Uploads</h3>
      <p className="text-sm text-slate-500">Please upload clear, readable copies of all required documents.</p>

      <FileField
        name="docPhoto"
        label="Student Photo"
        required
        accept=".jpg,.jpeg,.png,image/jpeg,image/png"
        maxSize={MAX_PHOTO}
        value={data.docPhoto}
        onChange={v => field("docPhoto", v)}
        onBlur={onBlur}
        error={errors.docPhoto}
        hint="JPG, PNG"
        type="photo"
      />
      <FileField
        name="docBirthCert"
        label="Birth Certificate"
        required
        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        maxSize={MAX_DOC}
        value={data.docBirthCert}
        onChange={v => field("docBirthCert", v)}
        onBlur={onBlur}
        error={errors.docBirthCert}
        hint="PDF, JPG, PNG"
        type="doc"
      />
      <FileField
        name="docReportCard"
        label="Previous Report Card / Marksheet"
        required
        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        maxSize={MAX_DOC}
        value={data.docReportCard}
        onChange={v => field("docReportCard", v)}
        onBlur={onBlur}
        error={errors.docReportCard}
        hint="PDF, JPG, PNG"
        type="doc"
      />
      <FileField
        name="docTransferCert"
        label="Transfer Certificate"
        required={false}
        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        maxSize={MAX_DOC}
        value={data.docTransferCert}
        onChange={v => field("docTransferCert", v)}
        onBlur={onBlur}
        error={errors.docTransferCert}
        hint="PDF, JPG, PNG"
        type="doc"
      />
    </div>
  )
}
