import AdminLayout from "@/components/admin/AdminLayout"

export const metadata = {
  title: "Admin Panel | Ideal Public School",
  robots: "noindex, nofollow",
}

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>
}
