import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import Timeline from "@/components/about/Timeline"
import LeadershipCard from "@/components/about/LeadershipCard"
import AccreditationBadges from "@/components/about/AccreditationBadges"
import MissionVisionCard from "@/components/about/MissionVisionCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Music, Globe } from "lucide-react"

export const metadata = {
  title: "About Us | Ideal Public School",
  description: "Learn about our mission, vision, values, and rich history at Ideal Public School. Meet our leadership team and discover our commitment to excellence.",
}

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "1995",
      title: "School Founded",
      location: "Education City",
      description: "Ideal Public School was established with a vision to provide quality education and holistic development to students in the region.",
    },
    {
      year: "2000",
      title: "CBSE Affiliation",
      location: "Education City",
      description: "Received CBSE affiliation, marking a significant milestone in our journey towards academic excellence.",
    },
    {
      year: "2010",
      title: "Infrastructure Expansion",
      location: "Education City",
      description: "Expanded our campus with state-of-the-art facilities including science labs, computer labs, and a modern library.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      location: "Education City",
      description: "Implemented smart classrooms and digital learning platforms to enhance the educational experience.",
    },
  ]

  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      designation: "Principal",
      department: "Administration",
      qualification: "Ph.D. in Education, M.Ed.",
      experience: "25+ years",
      email: "principal@idealschool.edu",
      bio: "With over 25 years of experience in education, Dr. Johnson is committed to fostering academic excellence and character development.",
    },
    {
      name: "Mr. Robert Williams",
      designation: "Vice Principal",
      department: "Administration",
      qualification: "M.Ed., B.Sc.",
      experience: "20+ years",
      email: "viceprincipal@idealschool.edu",
      bio: "Mr. Williams brings extensive experience in curriculum development and student welfare programs.",
    },
    {
      name: "Ms. Emily Davis",
      designation: "Academic Coordinator",
      department: "Academics",
      qualification: "M.A. in English, B.Ed.",
      experience: "15+ years",
      email: "academic@idealschool.edu",
      bio: "Ms. Davis oversees academic programs and ensures high standards of teaching and learning.",
    },
  ]

  const accreditations = [
    {
      name: "CBSE Affiliation",
      badge: "Affiliated",
      description: "Central Board of Secondary Education",
      year: "2000",
      icon: "award",
    },
    {
      name: "ISO 9001:2015",
      badge: "Certified",
      description: "Quality Management System",
      year: "2015",
      icon: "check",
    },
    {
      name: "Green School",
      badge: "Award",
      description: "Environmental Excellence",
      year: "2018",
      icon: "award",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="About Us"
        subtitle="Nurturing Excellence Since 1995 - Discover our rich history, mission, and commitment to holistic education."
        breadcrumbItems={[{ label: "About", href: "/about" }]}
      />

      <PageWrapper>
        {/* School History & Timeline */}
        <section className="mb-16">
          <SectionHeading
            badge="Our Journey"
            title="School History"
            description="A timeline of milestones that have shaped Ideal Public School into the institution it is today."
          />
          <div className="mb-12">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://source.unsplash.com/1200x800/?school,history,education"
                alt="School journey and history of Ideal Public School since 1995"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <Timeline events={timelineEvents} />
        </section>

        {/* Mission, Vision & Values */}
        <section className="mb-16">
          <SectionHeading
            badge="Our Foundation"
            title="Mission, Vision & Values"
            description="The core principles that guide everything we do at Ideal Public School."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <MissionVisionCard
              type="mission"
              title="Our Mission"
              description="To provide a world-class education that nurtures critical thinking, creativity, and character development, preparing students to become responsible global citizens and future leaders."
            />
            <MissionVisionCard
              type="vision"
              title="Our Vision"
              description="To be a premier educational institution recognized for academic excellence, innovative teaching methods, and holistic development of students."
            />
            <MissionVisionCard
              type="values"
              title="Our Values"
              description="The fundamental values that shape our educational philosophy:"
              values={[
                "Excellence in all endeavors",
                "Integrity and ethical conduct",
                "Respect for diversity",
                "Innovation and creativity",
                "Social responsibility",
              ]}
            />
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <SectionHeading
            badge="Leadership"
            title="Our Leadership Team"
            description="Meet the dedicated educators and administrators who guide our school community."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <LeadershipCard key={index} {...leader} />
            ))}
          </div>
        </section>

        {/* School Infrastructure Overview */}
        <section className="mb-16">
          <SectionHeading
            badge="Infrastructure"
            title="School Infrastructure Overview"
            description="Modern facilities designed to support comprehensive learning and development."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Smart Classrooms", count: "50+" },
              { name: "Science Labs", count: "6" },
              { name: "Computer Labs", count: "4" },
              { name: "Library Books", count: "15,000+" },
              { name: "Sports Facilities", count: "10+" },
              { name: "Auditorium Capacity", count: "500" },
              { name: "Transport Vehicles", count: "25" },
              { name: "CCTV Cameras", count: "100+" },
            ].map((facility, index) => (
              <Card key={index} className="text-center shadow-md">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {facility.count}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {facility.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Accreditations & Affiliations */}
        <section className="mb-16">
          <SectionHeading
            badge="Recognition"
            title="Accreditations & Affiliations"
            description="Our commitment to quality and excellence is recognized by leading educational bodies."
          />
          <AccreditationBadges accreditations={accreditations} />
        </section>

        {/* School Anthem/Prayer */}
        <section className="mb-16">
          <SectionHeading
            badge="Tradition"
            title="School Anthem"
            description="Our anthem reflects our values and aspirations."
          />
          <Card className="shadow-md">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Ideal Public School Anthem</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed font-handwriting text-lg">
                    <p>Where knowledge meets wisdom,</p>
                    <p>Where dreams take flight,</p>
                    <p>Ideal Public School,</p>
                    <p>Our beacon of light.</p>
                    <p className="pt-2">Excellence we strive for,</p>
                    <p>Character we build,</p>
                    <p>Together we grow,</p>
                    <p>Our future fulfilled.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Virtual Tour CTA */}
        <section className="mb-16">
          <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Take a Virtual Tour
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our campus, facilities, and classrooms from the comfort of your home. 
                Experience the Ideal Public School difference through our interactive virtual tour.
              </p>
              <Button size="lg" className="gap-2">
                Start Virtual Tour <ArrowRight className="h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

