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
      id: "all",
      name: "All",
      faculty: [
        {
          name: "Dr. Sarah Johnson",
          designation: "Principal",
          subject: "Administration",
          qualification: "Ph.D. in Education",
          experience: "25+ years",
          email: "principal@idealschool.edu",
        },
        {
          name: "Mr. Robert Williams",
          designation: "Vice Principal",
          subject: "Administration",
          qualification: "M.Ed., B.Sc.",
          experience: "20+ years",
          email: "viceprincipal@idealschool.edu",
        },
      ],
    },
    {
      id: "science",
      name: "Science",
      faculty: [
        {
          name: "Dr. Michael Chen",
          designation: "HOD Science",
          subject: "Physics",
          qualification: "Ph.D. in Physics",
          experience: "18 years",
          email: "mchen@idealschool.edu",
        },
        {
          name: "Ms. Lisa Anderson",
          designation: "Senior Teacher",
          subject: "Chemistry",
          qualification: "M.Sc. Chemistry",
          experience: "15 years",
          email: "landerson@idealschool.edu",
        },
        {
          name: "Dr. James Wilson",
          designation: "Senior Teacher",
          subject: "Biology",
          qualification: "Ph.D. in Biology",
          experience: "12 years",
          email: "jwilson@idealschool.edu",
        },
        {
          name: "Mr. David Brown",
          designation: "Teacher",
          subject: "Mathematics",
          qualification: "M.Sc. Mathematics",
          experience: "10 years",
          email: "dbrown@idealschool.edu",
        },
      ],
    },
    {
      id: "english",
      name: "English",
      faculty: [
        {
          name: "Ms. Emily Davis",
          designation: "HOD English",
          subject: "English",
          qualification: "M.A. English, B.Ed.",
          experience: "16 years",
          email: "edavis@idealschool.edu",
        },
        {
          name: "Ms. Jennifer Smith",
          designation: "Senior Teacher",
          subject: "English Literature",
          qualification: "M.A. English Literature",
          experience: "14 years",
          email: "jsmith@idealschool.edu",
        },
        {
          name: "Mr. Thomas Lee",
          designation: "Teacher",
          subject: "English Language",
          qualification: "M.A. English",
          experience: "8 years",
          email: "tlee@idealschool.edu",
        },
      ],
    },
    {
      id: "mathematics",
      name: "Mathematics",
      faculty: [
        {
          name: "Mr. Richard Taylor",
          designation: "HOD Mathematics",
          subject: "Mathematics",
          qualification: "M.Sc. Mathematics",
          experience: "17 years",
          email: "rtaylor@idealschool.edu",
        },
        {
          name: "Ms. Patricia Martinez",
          designation: "Senior Teacher",
          subject: "Mathematics",
          qualification: "M.Sc. Mathematics",
          experience: "13 years",
          email: "pmartinez@idealschool.edu",
        },
        {
          name: "Mr. Christopher White",
          designation: "Teacher",
          subject: "Mathematics",
          qualification: "B.Sc. Mathematics",
          experience: "9 years",
          email: "cwhite@idealschool.edu",
        },
      ],
    },
    {
      id: "social",
      name: "Social Studies",
      faculty: [
        {
          name: "Ms. Maria Garcia",
          designation: "HOD Social Studies",
          subject: "History",
          qualification: "M.A. History",
          experience: "15 years",
          email: "mgarcia@idealschool.edu",
        },
        {
          name: "Mr. John Miller",
          designation: "Senior Teacher",
          subject: "Geography",
          qualification: "M.A. Geography",
          experience: "12 years",
          email: "jmiller@idealschool.edu",
        },
        {
          name: "Ms. Susan Johnson",
          designation: "Teacher",
          subject: "Civics",
          qualification: "M.A. Political Science",
          experience: "7 years",
          email: "sjohnson@idealschool.edu",
        },
      ],
    },
    {
      id: "computer",
      name: "Computer Science",
      faculty: [
        {
          name: "Mr. Kevin Zhang",
          designation: "HOD Computer Science",
          subject: "Computer Science",
          qualification: "M.Tech. Computer Science",
          experience: "14 years",
          email: "kzhang@idealschool.edu",
        },
        {
          name: "Ms. Rachel Kim",
          designation: "Senior Teacher",
          subject: "Informatics Practices",
          qualification: "M.Sc. Computer Science",
          experience: "11 years",
          email: "rkim@idealschool.edu",
        },
        {
          name: "Mr. Daniel Park",
          designation: "Teacher",
          subject: "Computer Science",
          qualification: "B.Tech. IT",
          experience: "6 years",
          email: "dpark@idealschool.edu",
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

