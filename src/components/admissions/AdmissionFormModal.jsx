"use client"

import { useState, useEffect } from "react"
import { useAdmissionForm } from "@/context/AdmissionFormContext"
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react"
import Script from "next/script"
import { validateField } from "@/lib/validations"

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

// Map steps to their fields for quick validation
const STEP_FIELDS = {
  1: ["studentName", "gender", "dateOfBirth", "classApplying", "aadhaar"],
  2: ["fatherName", "motherName", "mobile", "alternateMobile", "email"],
  3: ["address", "district", "state", "pinCode"],
  4: ["previousSchool", "previousClass", "board"],
  5: ["docPhoto", "docBirthCert", "docReportCard", "docTransferCert"]
}

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

  const handleBlur = (name) => {
    const error = validateField(name, data[name], data)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  // Complete validation before advancing
  const validateStep = (step) => {
    if (step === 6) return true // Review step needs no extra validation

    const fieldsToValidate = STEP_FIELDS[step] || []
    let isValid = true
    const newErrors = { ...errors }

    fieldsToValidate.forEach(field => {
      const error = validateField(field, data[field], data)
      if (error) {
        newErrors[field] = error
        isValid = false
      } else {
        delete newErrors[field]
      }
    })

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
    setErrors({}) // Clear errors when going back
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // 1. Separate files from text data
      const files = new FormData()
      const textData = {}
      let hasFiles = false

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

      textData.id = appId

      // Execute reCAPTCHA if configured
      if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && window.grecaptcha) {
        const token = await new Promise(resolve => {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit_admission' }).then(resolve)
          })
        })
        textData.recaptchaToken = token
      }

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
    setTimeout(() => {
      setCurrentStep(1)
      setData({})
      setErrors({})
      setIsSuccess(false)
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[85vh] border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b shrink-0 bg-white relative z-10">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Admission Application</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Complete the steps below to apply</p>
          </div>
          <button onClick={handleClose} className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all active:scale-95">
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="flex-1 p-12 flex flex-col items-center justify-center text-center space-y-6 overflow-y-auto bg-slate-50/50">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2 ring-8 ring-green-50">
              <Check className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Application Submitted!</h3>
            <p className="text-slate-600 max-w-lg text-lg">
              Thank you for applying to Ideal Public School. Your application has been successfully received. Our admission team will review it and contact you soon.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 font-bold transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Stepper */}
            <div className="px-4 sm:px-8 pt-6 pb-8 sm:pb-10 bg-slate-50/80 border-b shrink-0 relative z-0">
              <div className="flex items-center justify-between w-full">
                {STEPS.map((step, idx) => (
                  <div key={step.id} className="flex items-center flex-1 last:flex-none group">
                    <div className={`flex flex-col items-center relative`}>
                      <div className={`flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full text-sm font-bold border-2 transition-all duration-300 z-10
                        ${currentStep > step.id ? "bg-primary border-primary text-white shadow-md shadow-primary/20" : 
                          currentStep === step.id ? "bg-white border-primary text-primary shadow-md shadow-primary/10 ring-4 ring-primary/10" : "bg-white border-slate-200 text-slate-400 group-hover:border-slate-300"}`}>
                        {currentStep > step.id ? <Check className="h-4 w-4 sm:h-5 sm:w-5" /> : step.id}
                      </div>
                      <span className={`absolute -bottom-6 sm:-bottom-7 text-[10px] sm:text-xs font-bold whitespace-nowrap hidden md:block transition-colors duration-300 ${currentStep >= step.id ? "text-slate-800" : "text-slate-400"}`}>
                        {step.title}
                      </span>
                    </div>
                    {idx < STEPS.length - 1 && (
                      <div className={`flex-1 h-1 mx-2 sm:mx-4 rounded-full transition-all duration-300 z-0 ${currentStep > step.id ? "bg-primary" : "bg-slate-200"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white md:pb-12 relative">
              {/* reCAPTCHA Script */}
              {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} strategy="lazyOnload" />
              )}

              {currentStep === 1 && <StudentInfoStep data={data} onChange={setData} onBlur={handleBlur} errors={errors} />}
              {currentStep === 2 && <ParentDetailsStep data={data} onChange={setData} onBlur={handleBlur} errors={errors} />}
              {currentStep === 3 && <AddressStep data={data} onChange={setData} onBlur={handleBlur} errors={errors} />}
              {currentStep === 4 && <AcademicStep data={data} onChange={setData} onBlur={handleBlur} errors={errors} />}
              {currentStep === 5 && <DocumentUploadStep data={data} onChange={setData} onBlur={handleBlur} errors={errors} />}
              {currentStep === 6 && <ReviewStep data={data} />}
            </div>

            {/* Footer / Controls */}
            <div className="px-6 py-5 border-t bg-white flex items-center justify-between shrink-0 relative z-10 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)]">
              <button
                onClick={prevStep}
                disabled={currentStep === 1 || isSubmitting}
                className="px-6 py-2.5 flex items-center gap-2 text-sm font-bold text-slate-600 bg-white border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none transition-all active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
              
              {currentStep < 6 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2.5 flex items-center gap-2 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-2.5 flex items-center gap-2 text-sm font-bold text-white bg-green-600 rounded-xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/20 disabled:opacity-70 disabled:pointer-events-none transition-all active:scale-95"
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
