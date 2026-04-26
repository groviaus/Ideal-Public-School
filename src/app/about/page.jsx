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
import { ArrowRight, Globe } from "lucide-react"
import { aboutHistoryBanner, schoolLogo } from "@/lib/schoolPhotos"

export const metadata = {
  title: "About Us | Ideal Public School",
  description: "Learn about our mission, vision, values, and rich history at Ideal Public School. Meet our leadership team and discover our commitment to excellence.",
}

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2005",
      title: "School Founded",
      location: "Siwan, Bihar",
      description: "Ideal Public School was established in Hasanpura, SH-87, District Siwan with a vision to provide quality education grounded in ethics, moral values, and integrity.",
    },
    {
      year: "2008",
      title: "CBSE Affiliation",
      location: "Siwan, Bihar",
      description: "Received CBSE affiliation, marking a significant milestone in our journey towards academic excellence.",
    },
    {
      year: "2015",
      title: "Infrastructure Expansion",
      location: "Siwan, Bihar",
      description: "Expanded our 2-acre campus with 27 classrooms, science labs (Physics, Chemistry, Biology), and a Computer Lab.",
    },
    {
      year: "2020",
      title: "Smart Classrooms",
      location: "Siwan, Bihar",
      description: "Implemented smart classrooms and modern teaching methodologies including experiential learning and project-based learning.",
    },
  ]

  const leadership = [
    {
      name: "The Principal",
      designation: "Principal",
      department: "Administration",
      qualification: "Education Leadership",
      experience: "20+ years",
      email: "idealpublichighschool2005@gmail.com",
      bio: "Committed to fostering academic excellence and character development at Ideal Public School, Siwan.",
    },
    {
      name: "The Vice Principal",
      designation: "Vice Principal",
      department: "Administration",
      qualification: "Education Administration",
      experience: "15+ years",
      email: "idealpublichighschool2005@gmail.com",
      bio: "Brings extensive experience in curriculum development and student welfare programs.",
    },
    {
      name: "Academic Coordinator",
      designation: "Academic Coordinator",
      department: "Academics",
      qualification: "M.A., B.Ed.",
      experience: "10+ years",
      email: "idealpublichighschool2005@gmail.com",
      bio: "Oversees academic programs and ensures high standards of teaching and learning.",
    },
  ]

  const accreditations = [
    {
      name: "CBSE Affiliation",
      badge: "Affiliated",
      description: "Central Board of Secondary Education",
      year: "2008",
      icon: "award",
    },
    {
      name: "Co-educational",
      badge: "School Type",
      description: "English & Hindi Medium",
      year: "2005",
      icon: "check",
    },
    {
      name: "Nursery – Class 8",
      badge: "Grades",
      description: "Complete Primary & Middle Education",
      year: "2005",
      icon: "award",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="About Us"
        subtitle="Nurturing Excellence Since 2005 - Discover our rich history, mission, and commitment to holistic education."
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
                src={aboutHistoryBanner.src}
                alt={aboutHistoryBanner.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
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
              description="Our mission is to envision the future with bold ambition and purposeful direction. We are committed to creating an environment where progressive learning meets enduring values, preparing learners for a rapidly evolving world. Through innovative and interactive approaches to education, we foster a vibrant culture of collaboration, curiosity, and shared knowledge—empowering every learner to grow, contribute, and thrive."
            />
            <MissionVisionCard
              type="vision"
              title="Our Vision"
              description="Our vision is to create a happy, safe, and inspiring place where children love to come to school each day. A place where learning is joyful, friendships are built, and every child feels valued and confident. We encourage students to discover their strengths, express their creativity, and grow at their own pace, supported by caring teachers and a nurturing environment that helps them flourish."
            />
            <MissionVisionCard
              type="values"
              title="Our Values"
              description="At Ideal, education is the harmonious blend of knowledge and character:"
              values={[
                "Ethics, moral values, and integrity",
                "Wisdom, discipline, and confidence",
                "Dream fearlessly, act responsibly",
                "Innovation and collaboration",
                "Nurturing environment for growth",
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
              { name: "Classrooms", count: "27" },
              { name: "Science Labs", count: "3" },
              { name: "Computer Lab", count: "1" },
              { name: "Library", count: "Available" },
              { name: "Campus Size", count: "2 Acres" },
              { name: "School Buses", count: "8" },
              { name: "Subjects Offered", count: "10" },
              { name: "Languages", count: "Hindi & English" },
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
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <Image
                    src={schoolLogo.src}
                    alt={schoolLogo.alt}
                    fill
                    className="object-contain p-1.5"
                    sizes="64px"
                    unoptimized
                  />
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

