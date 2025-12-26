import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import GradeCard from "@/components/academics/GradeCard"
import SubjectList from "@/components/academics/SubjectList"
import CalendarWidget from "@/components/academics/CalendarWidget"
import MethodologyTimeline from "@/components/academics/MethodologyTimeline"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, MessageSquare, Library } from "lucide-react"

export const metadata = {
  title: "Academics | Ideal Public School",
  description: "Explore our comprehensive academic programs, curriculum, teaching methodology, and learning resources at Ideal Public School.",
}

export default function AcademicsPage() {
  const grades = [
    {
      grade: "Pre-Primary (Nursery - UKG)",
      ageRange: "3-6 years",
      description: "A nurturing environment that focuses on play-based learning, social skills, and foundational literacy and numeracy.",
      image: "https://source.unsplash.com/800x600/?kindergarten,children,learning",
      features: [
        "Activity-based learning",
        "Montessori-inspired methods",
        "Creative arts and crafts",
        "Physical development activities",
        "Language development programs",
      ],
    },
    {
      grade: "Primary (Grade 1 - 5)",
      ageRange: "6-11 years",
      description: "Building strong academic foundations with emphasis on conceptual understanding and critical thinking.",
      image: "https://source.unsplash.com/800x600/?primary,school,children",
      features: [
        "CBSE curriculum",
        "Interactive smart classrooms",
        "Project-based learning",
        "Regular assessments",
        "Co-curricular activities",
      ],
    },
    {
      grade: "Secondary (Grade 6 - 10)",
      ageRange: "11-16 years",
      description: "Comprehensive education preparing students for board examinations with focus on academic excellence.",
      image: "https://source.unsplash.com/800x600/?teenagers,students,classroom",
      features: [
        "Structured CBSE syllabus",
        "Subject specialization",
        "Laboratory-based learning",
        "Exam preparation programs",
        "Career guidance",
      ],
    },
    {
      grade: "Senior Secondary (Grade 11 - 12)",
      ageRange: "16-18 years",
      description: "Specialized streams preparing students for higher education and competitive examinations.",
      image: "https://source.unsplash.com/800x600/?high,school,students",
      features: [
        "Stream selection (Science/Commerce/Arts)",
        "Board exam preparation",
        "Career counseling",
        "Entrance exam coaching",
        "Research projects",
      ],
    },
  ]

  const streams = [
    {
      name: "Science Stream",
      badge: "Grade 11-12",
      subjects: [
        { name: "Physics", code: "041" },
        { name: "Chemistry", code: "043" },
        { name: "Mathematics", code: "041" },
        { name: "Biology", code: "044" },
        { name: "English Core", code: "301" },
        { name: "Computer Science", code: "083" },
      ],
    },
    {
      name: "Commerce Stream",
      badge: "Grade 11-12",
      subjects: [
        { name: "Accountancy", code: "055" },
        { name: "Business Studies", code: "054" },
        { name: "Economics", code: "030" },
        { name: "Mathematics", code: "041" },
        { name: "English Core", code: "301" },
        { name: "Informatics Practices", code: "065" },
      ],
    },
    {
      name: "Arts Stream",
      badge: "Grade 11-12",
      subjects: [
        { name: "History", code: "027" },
        { name: "Political Science", code: "028" },
        { name: "Economics", code: "030" },
        { name: "Psychology", code: "037" },
        { name: "English Core", code: "301" },
        { name: "Physical Education", code: "048" },
      ],
    },
  ]

  const calendarEvents = [
    {
      date: "1",
      month: "Apr",
      title: "Academic Year Begins",
      description: "New academic session starts",
      badge: "Important",
    },
    {
      date: "15",
      month: "Apr",
      title: "First Unit Test",
      description: "Assessment for all grades",
    },
    {
      date: "1",
      month: "May",
      title: "Summer Vacation Begins",
      badge: "Holiday",
    },
    {
      date: "15",
      month: "Jun",
      title: "School Reopens",
      description: "After summer break",
    },
    {
      date: "15",
      month: "Sep",
      title: "Half-Yearly Examinations",
      badge: "Exam",
    },
    {
      date: "2",
      month: "Oct",
      title: "Gandhi Jayanti",
      badge: "Holiday",
    },
    {
      date: "15",
      month: "Dec",
      title: "Annual Day Celebration",
      badge: "Event",
    },
    {
      date: "20",
      month: "Dec",
      title: "Winter Vacation Begins",
      badge: "Holiday",
    },
  ]

  const methodologies = [
    {
      icon: "inquiry",
      title: "Inquiry-Based Learning",
      description: "Students explore questions and problems, developing critical thinking and research skills.",
    },
    {
      icon: "collaboration",
      title: "Collaborative Learning",
      description: "Group activities and projects that promote teamwork, communication, and peer learning.",
    },
    {
      icon: "action",
      title: "Experiential Learning",
      description: "Hands-on activities, experiments, and real-world applications to deepen understanding.",
    },
    {
      icon: "reflection",
      title: "Reflective Practice",
      description: "Regular self-assessment and reflection to enhance learning outcomes and metacognition.",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Academics"
        subtitle="Excellence in Education - Discover our comprehensive curriculum, teaching methodologies, and academic programs designed to nurture future leaders."
        breadcrumbItems={[{ label: "Academics", href: "/academics" }]}
      />

      <PageWrapper>
        {/* Curriculum Overview */}
        <section className="mb-16">
          <SectionHeading
            badge="Curriculum"
            title="CBSE Curriculum Overview"
            description="We follow the Central Board of Secondary Education (CBSE) curriculum, ensuring a well-rounded education that prepares students for national and international challenges."
          />
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Nationally recognized curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Holistic development approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Continuous and comprehensive evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Focus on application-based learning</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Assessment System</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Formative assessments (FA1, FA2, FA3, FA4)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Summative assessments (SA1, SA2)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Co-scholastic area assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Portfolio-based evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Grade-wise Structure */}
        <section className="mb-16">
          <SectionHeading
            badge="Structure"
            title="Grade-wise Structure"
            description="Our academic structure is designed to provide age-appropriate learning experiences at each stage."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {grades.map((grade, index) => (
              <GradeCard key={index} {...grade} />
            ))}
          </div>
        </section>

        {/* Subjects Offered by Stream */}
        <section className="mb-16">
          <SectionHeading
            badge="Subjects"
            title="Subjects Offered by Stream"
            description="Comprehensive subject options for Senior Secondary students across Science, Commerce, and Arts streams."
          />
          <SubjectList streams={streams} />
        </section>

        {/* Teaching Methodology */}
        <section className="mb-16">
          <SectionHeading
            badge="Methodology"
            title="Teaching Methodology"
            description="Our innovative teaching approaches ensure effective learning and student engagement."
          />
          <MethodologyTimeline methodologies={methodologies} />
        </section>

        {/* Assessment & Evaluation System */}
        <section className="mb-16">
          <SectionHeading
            badge="Assessment"
            title="Assessment & Evaluation System"
            description="A comprehensive evaluation system that tracks both academic and co-scholastic development."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Scholastic Areas</h3>
                <div className="space-y-3">
                  {[
                    "Formative Assessment (40%)",
                    "Summative Assessment (60%)",
                    "Unit Tests & Quizzes",
                    "Projects & Assignments",
                    "Practical Examinations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Co-Scholastic Areas</h3>
                <div className="space-y-3">
                  {[
                    "Work Education",
                    "Art Education",
                    "Health & Physical Education",
                    "Discipline & Values",
                    "Life Skills",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="mb-16">
          <SectionHeading
            badge="Calendar"
            title="Academic Calendar"
            description="Important dates and events for the academic year 2024-25."
          />
          <CalendarWidget events={calendarEvents} />
        </section>

        {/* Scholastic & Co-scholastic Activities */}
        <section className="mb-16">
          <SectionHeading
            badge="Activities"
            title="Scholastic & Co-scholastic Activities"
            description="A wide range of activities to ensure holistic development of students."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Clubs",
                items: ["Science Club", "Math Club", "Literary Club", "Debate Society"],
              },
              {
                title: "Sports & Fitness",
                items: ["Basketball", "Football", "Cricket", "Athletics", "Swimming"],
              },
              {
                title: "Arts & Culture",
                items: ["Music", "Dance", "Drama", "Art & Craft", "Photography"],
              },
            ].map((category, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mb-16">
          <SectionHeading
            badge="Resources"
            title="Learning Resources"
            description="Comprehensive resources to support student learning and development."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Library,
                title: "Library",
                description: "15,000+ books, digital resources, and reading programs",
              },
              {
                icon: BookOpen,
                title: "E-Learning",
                description: "Online platforms, educational apps, and digital content",
              },
              {
                icon: Users,
                title: "Study Groups",
                description: "Peer learning and collaborative study sessions",
              },
              {
                icon: MessageSquare,
                title: "Online Support",
                description: "24/7 access to study materials and teacher support",
              },
            ].map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Parent-Teacher Communication */}
        <section className="mb-16">
          <SectionHeading
            badge="Communication"
            title="Parent-Teacher Communication"
            description="Regular communication channels to keep parents informed about their child's progress."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "PTM Meetings",
                description: "Regular Parent-Teacher Meetings scheduled quarterly",
              },
              {
                title: "Progress Reports",
                description: "Detailed reports sent after each assessment",
              },
              {
                title: "Digital Portal",
                description: "Online portal for real-time updates and communication",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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

