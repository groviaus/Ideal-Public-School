"use client"

export default function ReviewStep({ data }) {
  const Section = ({ title, children }) => (
    <div className="mb-6 last:mb-0">
      <h4 className="font-semibold text-slate-800 border-b pb-1 mb-3 text-sm">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
        {children}
      </div>
    </div>
  )

  const Row = ({ label, value }) => (
    <div className="flex flex-col">
      <span className="text-slate-500 text-xs">{label}</span>
      <span className="font-medium text-slate-900">{value || "-"}</span>
    </div>
  )

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-slate-900 border-b pb-2 mb-4">Review Application</h3>
      
      <div className="bg-slate-50 p-4 rounded-lg border">
        <Section title="Student Information">
          <Row label="Name" value={data.studentName} />
          <Row label="Gender" value={data.gender} />
          <Row label="Date of Birth" value={data.dateOfBirth} />
          <Row label="Class Applying For" value={data.classApplying} />
          <Row label="Aadhaar Number" value={data.aadhaar} />
        </Section>

        <Section title="Parent Details">
          <Row label="Father's Name" value={data.fatherName} />
          <Row label="Mother's Name" value={data.motherName} />
          <Row label="Mobile" value={data.mobile} />
          <Row label="Alternate Mobile" value={data.alternateMobile} />
          <Row label="Email" value={data.email} />
        </Section>

        <Section title="Address Details">
          <div className="col-span-full mb-2">
            <Row label="Complete Address" value={data.address} />
          </div>
          <Row label="District" value={data.district} />
          <Row label="State" value={data.state} />
          <Row label="PIN Code" value={data.pinCode} />
        </Section>

        <Section title="Academic Details">
          <Row label="Previous School" value={data.previousSchool} />
          <Row label="Previous Class" value={data.previousClass} />
          <Row label="Board" value={data.board} />
        </Section>

        <Section title="Documents Attached">
          <Row label="Student Photo" value={data.docPhoto?.name} />
          <Row label="Birth Certificate" value={data.docBirthCert?.name} />
          <Row label="Report Card" value={data.docReportCard?.name} />
          <Row label="Transfer Certificate" value={data.docTransferCert?.name || "Not provided"} />
        </Section>
      </div>

      <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100">
        By submitting this application, you declare that all provided information is true and accurate.
      </div>
    </div>
  )
}
