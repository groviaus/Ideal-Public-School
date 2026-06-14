"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Users, FileText, Settings, LogOut, LayoutDashboard } from "lucide-react"

export default function AdminLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin")
    router.refresh()
  }

  const links = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Admissions", href: "/admin/admissions", icon: FileText },
  ]

  // If on login page, don't show sidebar
  if (pathname === "/admin") {
    return <div className="min-h-screen bg-slate-50">{children}</div>
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold tracking-tight">IPS Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {links.map(link => {
            const active = pathname.startsWith(link.href)
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                  active ? "bg-primary text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" /> {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 min-h-screen">
        <header className="bg-white border-b h-16 flex items-center px-8">
          <h1 className="text-lg font-semibold text-slate-800">
            {links.find(l => pathname.startsWith(l.href))?.name || "Admin"}
          </h1>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
