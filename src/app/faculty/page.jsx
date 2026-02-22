import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import DepartmentTabs from "@/components/faculty/DepartmentTabs"
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Award } from "lucide-react"

export const metadata = {
  title: "Faculty | Ideal Public School",
  description: "Meet our experienced and dedicated faculty members who are committed to providing quality education and nurturing student growth.",
}

export default function FacultyPage() {
  const departments = [
    {
      name: "Administration",
      members: [
        {
          name: "The Principal",
          designation: "Principal",
          subject: "Administration",
          qualification: "Education Leadership",
          experience: "20+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
        {
          name: "Vice Principal",
          designation: "Vice Principal",
          subject: "Administration",
          qualification: "Education Administration",
          experience: "15+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
      ],
    },
    {
      name: "Science",
      members: [
        {
          name: "Mr. Rajesh Kumar",
          designation: "Senior Science Teacher",
          subject: "Physics & Chemistry",
          qualification: "M.Sc., B.Ed.",
          experience: "12+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
        {
          name: "Mrs. Sunita Devi",
          designation: "Science Teacher",
          subject: "Biology",
          qualification: "M.Sc., B.Ed.",
          experience: "10+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
      ],
    },
    {
      name: "Mathematics",
      members: [
        {
          name: "Mr. Anil Sharma",
          designation: "Senior Mathematics Teacher",
          subject: "Mathematics",
          qualification: "M.Sc., B.Ed.",
          experience: "15+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
        {
          name: "Mrs. Meera Singh",
          designation: "Mathematics Teacher",
          subject: "Mathematics",
          qualification: "B.Sc., B.Ed.",
          experience: "8+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
      ],
    },
    {
      name: "Languages",
      members: [
        {
          name: "Mrs. Priya Kumari",
          designation: "Senior English Teacher",
          subject: "English",
          qualification: "M.A. English, B.Ed.",
          experience: "12+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
        {
          name: "Mr. Vinod Mishra",
          designation: "Hindi Teacher",
          subject: "Hindi",
          qualification: "M.A. Hindi, B.Ed.",
          experience: "10+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
      ],
    },
    {
      name: "Computer Science",
      members: [
        {
          name: "Mr. Sanjay Gupta",
          designation: "Computer Teacher",
          subject: "Computer Science",
          qualification: "B.Tech., B.Ed.",
          experience: "8+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
      ],
    },
    {
      name: "Social Studies & Others",
      members: [
        {
          name: "Mr. Manoj Tiwari",
          designation: "Social Studies Teacher",
          subject: "Social Studies",
          qualification: "M.A., B.Ed.",
          experience: "10+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
        {
          name: "Mrs. Kavita Rani",
          designation: "Pre-Primary Teacher",
          subject: "Pre-Primary Education",
          qualification: "NTT, B.Ed.",
          experience: "8+ years",
          email: "idealpublichighschool2005@gmail.com",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Faculty"
        subtitle="Meet our dedicated and experienced faculty members who are committed to nurturing excellence in every student."
        breadcrumbItems={[{ label: "Faculty", href: "/faculty" }]}
      />

      <PageWrapper>
        {/* Teacher-Student Ratio */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Teacher-Student Ratio",
                value: "1:25",
                description: "Optimal ratio for personalized attention",
              },
              {
                icon: GraduationCap,
                title: "Qualified Faculty",
                value: "100%",
                description: "All teachers hold professional degrees",
              },
              {
                icon: Award,
                title: "Average Experience",
                value: "12+ years",
                description: "Experienced educators across all subjects",
              },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Department-wise Faculty */}
        <section className="mb-16">
          <SectionHeading
            badge="Our Faculty"
            title="Department-wise Faculty"
            description="Our experienced faculty members across various departments are dedicated to providing quality education."
          />
          <DepartmentTabs departments={departments} />
        </section>

        {/* Staff Development Programs */}
        <section className="mb-16">
          <SectionHeading
            badge="Development"
            title="Staff Development Programs"
            description="We invest in continuous professional development to ensure our faculty stays updated with the latest teaching methodologies and educational trends."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Training Workshops",
                description: "Regular workshops on modern teaching methods",
              },
              {
                title: "Certification Programs",
                description: "Professional certification courses for skill enhancement",
              },
              {
                title: "Conferences & Seminars",
                description: "Participation in national and international conferences",
              },
              {
                title: "Research Opportunities",
                description: "Encouragement for educational research and publications",
              },
            ].map((program, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-slate-900 mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

