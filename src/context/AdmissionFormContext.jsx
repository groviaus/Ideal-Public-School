"use client"

import { createContext, useContext, useState, useCallback } from "react"

const AdmissionFormContext = createContext(null)

export function AdmissionFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openAdmissionForm  = useCallback(() => setIsOpen(true),  [])
  const closeAdmissionForm = useCallback(() => setIsOpen(false), [])

  return (
    <AdmissionFormContext.Provider value={{ isOpen, openAdmissionForm, closeAdmissionForm }}>
      {children}
    </AdmissionFormContext.Provider>
  )
}

export function useAdmissionForm() {
  const ctx = useContext(AdmissionFormContext)
  if (!ctx) throw new Error("useAdmissionForm must be used inside AdmissionFormProvider")
  return ctx
}
