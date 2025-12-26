"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import NewsCard from "@/components/news/NewsCard"
import EventCalendar from "@/components/news/EventCalendar"
import CategoryFilter from "@/components/news/CategoryFilter"
import Pagination from "@/components/news/Pagination"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const categories = [
    { id: "all", name: "All News" },
    { id: "events", name: "Events" },
    { id: "academics", name: "Academics" },
    { id: "sports", name: "Sports" },
    { id: "achievements", name: "Achievements" },
  ]

  const newsItems = [
    {
      title: "Annual Day Celebration 2024 - A Grand Success",
      excerpt: "The Annual Day celebration was held with great enthusiasm, showcasing the talents of our students through various performances and competitions.",
      date: "March 15, 2024",
      category: "Events",
      slug: "annual-day-2024",
    },
    {
      title: "Science Fair Winners Announced",
      excerpt: "Congratulations to all participants of the Science Fair. Several projects were selected for the state-level competition.",
      date: "March 10, 2024",
      category: "Academics",
      slug: "science-fair-winners",
    },
    {
      title: "Inter-School Basketball Championship Victory",
      excerpt: "Our school basketball team won the Inter-School Championship, bringing home the trophy after an exciting final match.",
      date: "March 5, 2024",
      category: "Sports",
      slug: "basketball-championship",
    },
    {
      title: "Student Achieves Perfect Score in Mathematics Olympiad",
      excerpt: "We are proud to announce that one of our students achieved a perfect score in the National Mathematics Olympiad.",
      date: "February 28, 2024",
      category: "Achievements",
      slug: "math-olympiad-perfect-score",
    },
    {
      title: "Workshop on Digital Learning Tools",
      excerpt: "A comprehensive workshop was conducted for teachers on integrating digital learning tools in the classroom.",
      date: "February 20, 2024",
      category: "Academics",
      slug: "digital-learning-workshop",
    },
    {
      title: "Cultural Fest 2024 - Celebrating Diversity",
      excerpt: "The annual Cultural Fest showcased the rich diversity of our school community through music, dance, and art.",
      date: "February 15, 2024",
      category: "Events",
      slug: "cultural-fest-2024",
    },
  ]

  const upcomingEvents = [
    {
      date: "25",
      month: "Mar",
      title: "Parent-Teacher Meeting",
      description: "Quarterly PTM for all grades",
      time: "9:00 AM - 3:00 PM",
      badge: "Important",
    },
    {
      date: "1",
      month: "Apr",
      title: "New Academic Year Begins",
      description: "Welcome ceremony for new students",
      time: "8:00 AM",
      badge: "Event",
    },
    {
      date: "10",
      month: "Apr",
      title: "Science Exhibition",
      description: "Student projects and experiments showcase",
      time: "10:00 AM - 4:00 PM",
    },
  ]

  const filteredNews = newsItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category.toLowerCase() === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="News & Events"
        subtitle="Stay updated with the latest news, events, and happenings at Ideal Public School."
        breadcrumbItems={[{ label: "News", href: "/news" }]}
      />

      <PageWrapper>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search Bar */}
            <Card className="shadow-md">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Filter by Category</h3>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={(category) => {
                  setActiveCategory(category)
                  setCurrentPage(1)
                }}
              />
            </div>

            {/* News Grid */}
            <div>
              <SectionHeading
                badge="Latest"
                title="Latest News"
                description=""
              />
              {paginatedNews.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {paginatedNews.map((news, index) => (
                      <NewsCard key={index} {...news} />
                    ))}
                  </div>
                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  No news found matching your criteria.
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <EventCalendar events={upcomingEvents} />
          </div>
        </div>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

