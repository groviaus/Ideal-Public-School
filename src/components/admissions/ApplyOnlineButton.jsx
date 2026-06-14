"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useAdmissionForm } from "@/context/AdmissionFormContext"

export default function ApplyOnlineButton() {
  const { openAdmissionForm } = useAdmissionForm()

  return (
    <Button size="lg" className="gap-2" onClick={openAdmissionForm}>
      Apply Online <ArrowRight className="h-5 w-5" />
    </Button>
  )
}
