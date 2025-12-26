import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageWrapper from "@/components/shared/PageWrapper"
import NewsDetail from "@/components/news/NewsDetail"

export async function generateMetadata({ params }) {
  return {
    title: "News Detail | Ideal Public School",
    description: "Read the full article and stay updated with school news and events.",
  }
}

export default function NewsDetailPage({ params }) {
  // In a real app, fetch news by slug from API/database
  const newsData = {
    title: "Annual Day Celebration 2024 - A Grand Success",
    excerpt: "The Annual Day celebration was held with great enthusiasm, showcasing the talents of our students through various performances and competitions.",
    date: "March 15, 2024",
    category: "Events",
    author: "School Administration",
    content: `The Annual Day celebration of Ideal Public School was a resounding success, bringing together students, parents, teachers, and distinguished guests for an evening of cultural extravaganza and celebration.

The event commenced with the lighting of the lamp by our esteemed Principal, Dr. Sarah Johnson, followed by a warm welcome address. The evening was filled with mesmerizing performances including classical dance, modern dance, music, drama, and various other cultural presentations.

Students from different grades showcased their talents, leaving the audience spellbound. The highlight of the evening was the award ceremony where outstanding students were recognized for their achievements in academics, sports, and co-curricular activities.

The event also featured a special performance by the school choir and a grand finale dance performance that brought the entire school community together. Parents and guests were highly appreciative of the efforts put in by students and teachers.

We extend our heartfelt gratitude to all participants, teachers, and parents who made this event a memorable one. The Annual Day celebration truly reflected the spirit of excellence and unity that defines Ideal Public School.`,
    relatedNews: [
      {
        title: "Science Fair Winners Announced",
        date: "March 10, 2024",
        slug: "science-fair-winners",
      },
      {
        title: "Cultural Fest 2024 - Celebrating Diversity",
        date: "February 15, 2024",
        slug: "cultural-fest-2024",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageWrapper>
        <NewsDetail news={newsData} />
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

