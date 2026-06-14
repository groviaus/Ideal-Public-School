"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Search, Download, Eye } from "lucide-react"
import StatusBadge from "@/components/admin/StatusBadge"

export default function AdmissionsList() {
  const [data, setData] = useState({ applications: [], total: 0 })
  const [loading, setLoading] = useState(true)
  
  const [search, setSearch] = useState("")
  const [classFilter, setClassFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [page, setPage] = useState(1)

  const fetchApplications = useCallback(async () => {
    setLoading(true)
    try {
      const q = new URLSearchParams({
        search,
        class: classFilter,
        status: statusFilter,
        page: page.toString(),
        pageSize: "20"
      })
      const res = await fetch(`/api/admissions/list?${q}`)
      if (res.ok) {
        const json = await res.json()
        setData(json)
      } else if (res.status === 401) {
        window.location.href = "/admin"
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [search, classFilter, statusFilter, page])

  useEffect(() => {
    fetchApplications()
  }, [fetchApplications])

  const handleExport = () => {
    window.location.href = "/api/admissions/export"
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between bg-slate-50">
        <div className="flex flex-1 gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search name, phone, email..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select
            value={classFilter}
            onChange={(e) => { setClassFilter(e.target.value); setPage(1); }}
            className="px-3 py-2 text-sm border rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Classes</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="px-3 py-2 text-sm border rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Statuses</option>
            <option>New</option>
            <option>Under Review</option>
            <option>Contacted</option>
            <option>Shortlisted</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition shrink-0"
        >
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wider border-b">
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Student</th>
              <th className="px-6 py-4 font-semibold">Class</th>
              <th className="px-6 py-4 font-semibold">Parent / Contact</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm text-slate-800">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">Loading applications...</td>
              </tr>
            ) : data.applications.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">No applications found.</td>
              </tr>
            ) : (
              data.applications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(app.submitted_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {app.student_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {app.class_applying}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span>{app.father_name}</span>
                      <span className="text-xs text-slate-500">{app.mobile}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={app.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Link
                      href={`/admin/admissions/${app.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md transition font-medium text-xs"
                    >
                      <Eye className="h-3 w-3" /> View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      {!loading && data.total > 0 && (
        <div className="p-4 border-t flex items-center justify-between text-sm text-slate-500">
          <div>
            Showing {(page - 1) * 20 + 1} to {Math.min(page * 20, data.total)} of {data.total}
          </div>
          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-slate-50"
            >
              Previous
            </button>
            <button
              disabled={page * 20 >= data.total}
              onClick={() => setPage(p => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-slate-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
