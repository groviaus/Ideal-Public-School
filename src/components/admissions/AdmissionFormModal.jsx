"use client"

import { useState, useEffect } from "react"
import { useAdmissionForm } from "@/context/AdmissionFormContext"
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react"

import StudentInfoStep from "./form-steps/StudentInfoStep"
import ParentDetailsStep from "./form-steps/ParentDetailsStep"
import AddressStep from "./form-steps/AddressStep"
import AcademicStep from "./form-steps/AcademicStep"
import DocumentUploadStep from "./form-steps/DocumentUploadStep"
import ReviewStep from "./form-steps/ReviewStep"

const STEPS = [
  { id: 1, title: "Student" },
  { id: 2, title: "Parents" },
  { id: 3, title: "Address" },
  { id: 4, title: "Academic" },
  { id: 5, title: "Documents" },
  { id: 6, title: "Review" },
]

export default function AdmissionFormModal() {
  const { isOpen, closeAdmissionForm } = useAdmissionForm()
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen) return null

  // Quick validation before advancing
  const validateStep = (step) => {
    const newErrors = {}
    let isValid = true

    if (step === 1) {
      if (!data.studentName?.trim()) { newErrors.studentName = "Required"; isValid = false }
      if (!data.gender) { newErrors.gender = "Required"; isValid = false }
      if (!data.dateOfBirth) { newErrors.dateOfBirth = "Required"; isValid = false }
      if (!data.classApplying) { newErrors.classApplying = "Required"; isValid = false }
    } else if (step === 2) {
      if (!data.fatherName?.trim()) { newErrors.fatherName = "Required"; isValid = false }
      if (!data.motherName?.trim()) { newErrors.motherName = "Required"; isValid = false }
      if (!data.mobile || data.mobile.length !== 10) { newErrors.mobile = "Invalid mobile"; isValid = false }
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { newErrors.email = "Invalid email"; isValid = false }
    } else if (step === 3) {
      if (!data.address?.trim()) { newErrors.address = "Required"; isValid = false }
      if (!data.district?.trim()) { newErrors.district = "Required"; isValid = false }
      if (!data.state) { newErrors.state = "Required"; isValid = false }
      if (!data.pinCode || data.pinCode.length !== 6) { newErrors.pinCode = "Invalid PIN"; isValid = false }
    } else if (step === 4) {
      if (!data.previousSchool?.trim()) { newErrors.previousSchool = "Required"; isValid = false }
      if (!data.previousClass?.trim()) { newErrors.previousClass = "Required"; isValid = false }
      if (!data.board) { newErrors.board = "Required"; isValid = false }
    } else if (step === 5) {
      if (!data.docPhoto) { newErrors.docPhoto = "Required"; isValid = false }
      if (!data.docBirthCert) { newErrors.docBirthCert = "Required"; isValid = false }
      if (!data.docReportCard) { newErrors.docReportCard = "Required"; isValid = false }
    }

    setErrors(newErrors)
    return isValid
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
    setErrors({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // 1. Separate files from text data
      const files = new FormData()
      const textData = {}
      let hasFiles = false

      // We generate a unique ID up front so the PHP script and DB use the same ID
      const appId = crypto.randomUUID()
      files.append("appId", appId)

      Object.keys(data).forEach(key => {
        if (data[key] instanceof File) {
          files.append(key, data[key])
          hasFiles = true
        } else if (data[key] !== undefined && data[key] !== null) {
          textData[key] = data[key]
        }
      })

      textData.id = appId // Send the pre-generated ID to Vercel

      // 2. Upload files to Hostinger PHP script if there are any
      if (hasFiles) {
        const uploadUrl = process.env.NEXT_PUBLIC_HOSTINGER_UPLOAD_URL
        if (!uploadUrl) {
          throw new Error("Missing NEXT_PUBLIC_HOSTINGER_UPLOAD_URL in environment.")
        }
        
        const uploadRes = await fetch(uploadUrl, {
          method: "POST",
          body: files,
        })

        const uploadResult = await uploadRes.json()
        if (!uploadRes.ok) {
          setErrors(uploadResult.errors || {})
          throw new Error("File upload failed. Please check file sizes and types.")
        }

        // Attach returned Hostinger URLs to the text data
        Object.assign(textData, uploadResult.urls)
      }

      // 3. Send final JSON data to Vercel Next.js API
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(textData),
      })

      const result = await res.json()
      if (res.ok) {
        setIsSuccess(true)
      } else {
        if (result.errors) setErrors(result.errors)
        alert(result.message || "Failed to submit application. Please check fields.")
      }
    } catch (err) {
      console.error(err)
      alert(err.message || "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSuccess && Object.keys(data).length > 0) {
      if (!window.confirm("Are you sure you want to close? Your progress will be lost.")) return
    }
    closeAdmissionForm()
    // Reset state after animation (approx)
    setTimeout(() => {
      setCurrentStep(1)
      setData({})
      setErrors({})
      setIsSuccess(false)
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b shrink-0 bg-slate-50">
          <h2 className="text-xl font-bold text-slate-800">Admission Application</h2>
          <button onClick={handleClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 overflow-y-auto">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
            <p className="text-slate-600 max-w-md">
              Thank you for applying to Ideal Public School. Your application has been successfully received. Our admission team will review it and contact you soon.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium transition"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Stepper */}
            <div className="px-6 py-4 bg-white border-b shrink-0 overflow-x-auto">
              <div className="flex items-center min-w-max">
                {STEPS.map((step, idx) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-semibold border-2 
                      ${currentStep > step.id ? "bg-primary border-primary text-white" : 
                        currentStep === step.id ? "border-primary text-primary" : "border-slate-200 text-slate-400"}`}>
                      {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                    </div>
                    <span className={`ml-2 text-xs font-medium hidden sm:block ${currentStep >= step.id ? "text-slate-800" : "text-slate-400"}`}>
                      {step.title}
                    </span>
                    {idx < STEPS.length - 1 && (
                      <div className={`w-8 sm:w-12 h-0.5 mx-2 sm:mx-4 ${currentStep > step.id ? "bg-primary" : "bg-slate-200"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-white">
              {currentStep === 1 && <StudentInfoStep data={data} onChange={setData} errors={errors} />}
              {currentStep === 2 && <ParentDetailsStep data={data} onChange={setData} errors={errors} />}
              {currentStep === 3 && <AddressStep data={data} onChange={setData} errors={errors} />}
              {currentStep === 4 && <AcademicStep data={data} onChange={setData} errors={errors} />}
              {currentStep === 5 && <DocumentUploadStep data={data} onChange={setData} errors={errors} />}
              {currentStep === 6 && <ReviewStep data={data} />}
            </div>

            {/* Footer / Controls */}
            <div className="px-6 py-4 border-t bg-slate-50 flex items-center justify-between shrink-0">
              <button
                onClick={prevStep}
                disabled={currentStep === 1 || isSubmitting}
                className="px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
              
              {currentStep < 6 ? (
                <button
                  onClick={nextStep}
                  className="px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-6 py-2.5 flex items-center gap-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-70 transition shadow-sm"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
