"use client"

import { useState, useEffect, useCallback, use } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Download, FileCheck, CheckCircle, XCircle } from "lucide-react"
import StatusBadge from "@/components/admin/StatusBadge"

export default function ApplicationDetail({ params }) {
  const unwrappedParams = use(params)
  const [app, setApp] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  const [status, setStatus] = useState("")
  const [remarks, setRemarks] = useState("")

  const fetchApp = useCallback(async () => {
    try {
      const res = await fetch(`/api/admissions/${unwrappedParams.id}`)
      if (res.ok) {
        const json = await res.json()
        setApp(json.application)
        setStatus(json.application.status)
        setRemarks(json.application.remarks || "")
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [unwrappedParams.id])

  useEffect(() => {
    fetchApp()
  }, [fetchApp])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admissions/${unwrappedParams.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, remarks })
      })
      if (res.ok) {
        alert("Application updated successfully.")
        fetchApp()
      } else {
        alert("Failed to update application.")
      }
    } catch {
      alert("Error saving updates.")
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8 text-center text-slate-500">Loading details...</div>
  if (!app) return <div className="p-8 text-center text-red-500">Application not found.</div>

  const Section = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl border shadow-sm mb-6">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-3 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {children}
      </div>
    </div>
  )

  const Row = ({ label, value }) => (
    <div className="flex flex-col">
      <span className="text-sm text-slate-500 mb-1">{label}</span>
      <span className="font-medium text-slate-900">{value || <span className="text-slate-400 italic">Not provided</span>}</span>
    </div>
  )

  const DocLink = ({ label, url }) => {
    if (!url) return <Row label={label} value={null} />
    return (
      <div className="flex flex-col">
        <span className="text-sm text-slate-500 mb-1">{label}</span>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          <FileCheck className="h-4 w-4" /> View Document
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/admissions" className="p-2 bg-white border rounded-lg text-slate-500 hover:text-slate-900 transition">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{app.student_name}</h2>
            <p className="text-sm text-slate-500">Submitted: {new Date(app.submitted_at).toLocaleString()}</p>
          </div>
        </div>
        <div>
          <StatusBadge status={app.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          <Section title="Student Information">
            <Row label="Full Name" value={app.student_name} />
            <Row label="Class Applying For" value={app.class_applying} />
            <Row label="Gender" value={app.gender} />
            <Row label="Date of Birth" value={new Date(app.date_of_birth).toLocaleDateString()} />
            <Row label="Aadhaar Number" value={app.aadhaar} />
          </Section>

          <Section title="Parent / Guardian Details">
            <Row label="Father's Name" value={app.father_name} />
            <Row label="Mother's Name" value={app.mother_name} />
            <Row label="Mobile Number" value={app.mobile} />
            <Row label="Alternate Mobile" value={app.alternate_mobile} />
            <div className="md:col-span-2">
              <Row label="Email Address" value={app.email} />
            </div>
          </Section>

          <Section title="Address Details">
            <div className="md:col-span-2">
              <Row label="Complete Address" value={app.address} />
            </div>
            <Row label="District" value={app.district} />
            <Row label="State" value={app.state} />
            <Row label="PIN Code" value={app.pin_code} />
          </Section>

          <Section title="Academic Background">
            <div className="md:col-span-2">
              <Row label="Previous School" value={app.previous_school} />
            </div>
            <Row label="Previous Class" value={app.previous_class} />
            <Row label="Board" value={app.board} />
          </Section>

          <Section title="Uploaded Documents">
            <DocLink label="Student Photo" url={app.doc_photo} />
            <DocLink label="Birth Certificate" url={app.doc_birth_cert} />
            <DocLink label="Report Card / Marksheet" url={app.doc_report_card} />
            <DocLink label="Transfer Certificate" url={app.doc_transfer_cert} />
          </Section>
        </div>

        {/* Right Column: Status & Actions */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
            <h3 className="text-lg font-semibold text-slate-900 border-b pb-3 mb-4">Manage Application</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option>New</option>
                  <option>Under Review</option>
                  <option>Contacted</option>
                  <option>Shortlisted</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Admin Remarks (Internal)</label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  placeholder="Add notes about interview, missing docs, etc."
                />
              </div>

              <button
                onClick={handleSave}
                disabled={saving || (status === app.status && remarks === (app.remarks || ""))}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
              >
                <Save className="h-4 w-4" /> {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
