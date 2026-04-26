"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import FilterTabs from "@/components/gallery/FilterTabs"
import ImageGrid from "@/components/gallery/ImageGrid"
import VideoPlayer from "@/components/gallery/VideoPlayer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { galleryPhotosByCategory } from "@/lib/schoolPhotos"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "events", name: "Events" },
    { id: "sports", name: "Sports" },
    { id: "cultural", name: "Cultural" },
    { id: "academic", name: "Academic" },
    { id: "infrastructure", name: "Infrastructure" },
  ]

  const getFilteredImages = () => galleryPhotosByCategory(activeCategory)

  const videos = [
    {
      title: "Annual Day 2024",
      description: "Highlights from our annual day celebration",
      thumbnail: null,
    },
    {
      title: "Sports Day 2024",
      description: "Exciting moments from sports day",
      thumbnail: null,
    },
    {
      title: "Science Fair 2024",
      description: "Student projects and experiments",
      thumbnail: null,
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Gallery"
        subtitle="Explore moments from school events, activities, sports, and daily life at Ideal Public School."
        breadcrumbItems={[{ label: "Gallery", href: "/gallery" }]}
      />

      <PageWrapper>
        {/* Filter Tabs */}
        <section className="mb-12">
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>

        {/* Image Grid */}
        <section className="mb-16">
          <ImageGrid images={getFilteredImages()} />
        </section>

        {/* Video Gallery */}
        <section className="mb-16">
          <SectionHeading
            badge="Videos"
            title="Video Gallery"
            description="Watch highlights from our events and activities."
          />
          <VideoPlayer videos={videos} />
        </section>

        {/* Download Media CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Download Media
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Want to download photos or videos? Contact our media team for high-resolution 
              images and video files.
            </p>
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Request Media Files
            </Button>
          </div>
        </section>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}
