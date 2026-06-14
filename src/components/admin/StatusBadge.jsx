export default function StatusBadge({ status }) {
  const styles = {
    "New": "bg-blue-100 text-blue-800 border-blue-200",
    "Under Review": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Contacted": "bg-purple-100 text-purple-800 border-purple-200",
    "Shortlisted": "bg-teal-100 text-teal-800 border-teal-200",
    "Approved": "bg-green-100 text-green-800 border-green-200",
    "Rejected": "bg-red-100 text-red-800 border-red-200",
  }

  const className = styles[status] || "bg-slate-100 text-slate-800 border-slate-200"

  return (
    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${className}`}>
      {status}
    </span>
  )
}
