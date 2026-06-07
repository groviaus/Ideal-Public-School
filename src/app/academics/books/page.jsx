import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import BooksListClient from "./BooksListClient"

export const metadata = {
  title: "Prescribed Books & Prices | Ideal Public School",
  description: "Explore the prescribed textbooks and total kit fees for Classes I to VIII for the academic session 2026-27. Filter by subject or search by book name.",
}

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Prescribed Books & Prices"
        subtitle="Official textbook lists, individual pricing, and curriculum kit guidelines for Classes I to VIII (Session 2026-27)."
        breadcrumbItems={[
          { label: "Academics", href: "/academics" },
          { label: "Books & Prices", href: "/academics/books" },
        ]}
      />

      <PageWrapper>
        <BooksListClient />
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}
