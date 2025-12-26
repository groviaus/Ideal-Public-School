import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import RoutineTable from "@/components/student-life/RoutineTable"
import HouseCard from "@/components/student-life/HouseCard"
import ClubCard from "@/components/student-life/ClubCard"
import AchievementShowcase from "@/components/student-life/AchievementShowcase"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Heart } from "lucide-react"

export const metadata = {
  title: "Student Life | Ideal Public School",
  description: "Discover the vibrant student life at Ideal Public School including daily routines, house system, clubs, activities, and achievements.",
}

export default function StudentLifePage() {
  const dailySchedule = [
    { time: "7:30 AM - 8:00 AM", activity: "Assembly & Morning Prayer" },
    { time: "8:00 AM - 8:40 AM", activity: "Period 1" },
    { time: "8:40 AM - 9:20 AM", activity: "Period 2" },
    { time: "9:20 AM - 9:40 AM", activity: "Break" },
    { time: "9:40 AM - 10:20 AM", activity: "Period 3" },
    { time: "10:20 AM - 11:00 AM", activity: "Period 4" },
    { time: "11:00 AM - 11:40 AM", activity: "Period 5" },
    { time: "11:40 AM - 12:20 PM", activity: "Period 6" },
    { time: "12:20 PM - 1:00 PM", activity: "Lunch Break" },
    { time: "1:00 PM - 1:40 PM", activity: "Period 7" },
    { time: "1:40 PM - 2:20 PM", activity: "Period 8" },
    { time: "2:20 PM - 3:00 PM", activity: "Co-curricular Activities" },
  ]

  const houses = [
    {
      name: "Blue",
      color: "#3b82f6",
      description: "Blue House represents wisdom, trust, and stability. Members are known for their analytical thinking and leadership qualities.",
      achievements: [
        "Won Inter-House Sports Championship 2024",
        "Best House in Academics 2023",
        "Outstanding Performance in Cultural Events",
      ],
    },
    {
      name: "Green",
      color: "#10b981",
      description: "Green House symbolizes growth, harmony, and nature. Members excel in environmental initiatives and teamwork.",
      achievements: [
        "Eco-Friendly Initiative Award 2024",
        "Best House in Sports 2023",
        "Community Service Excellence",
      ],
    },
    {
      name: "Red",
      color: "#ef4444",
      description: "Red House embodies passion, energy, and determination. Members are known for their competitive spirit and enthusiasm.",
      achievements: [
        "Inter-House Debate Winner 2024",
        "Excellence in Performing Arts",
        "Outstanding Leadership Award",
      ],
    },
    {
      name: "Yellow",
      color: "#eab308",
      description: "Yellow House represents creativity, optimism, and innovation. Members shine in arts, music, and creative endeavors.",
      achievements: [
        "Best House in Arts & Culture 2024",
        "Innovation Challenge Winners",
        "Excellence in Music & Drama",
      ],
    },
  ]

  const clubs = [
    {
      name: "Science Club",
      description: "Explore the wonders of science through experiments, projects, and competitions.",
      activities: ["Science Fair", "Experiments", "Quizzes", "Field Trips"],
      members: "45",
    },
    {
      name: "Literary Club",
      description: "Foster love for reading, writing, and creative expression through various literary activities.",
      activities: ["Book Reviews", "Creative Writing", "Debates", "Poetry"],
      members: "38",
    },
    {
      name: "Drama Club",
      description: "Express creativity through theater, acting, and stage performances.",
      activities: ["Plays", "Skits", "Acting Workshops", "Annual Drama"],
      members: "32",
    },
    {
      name: "Music Club",
      description: "Celebrate the joy of music through singing, instruments, and performances.",
      activities: ["Choir", "Instrumental", "Concerts", "Competitions"],
      members: "50",
    },
    {
      name: "Sports Club",
      description: "Promote physical fitness and sportsmanship through various athletic activities.",
      activities: ["Basketball", "Football", "Cricket", "Athletics"],
      members: "60",
    },
    {
      name: "Art & Craft Club",
      description: "Unleash creativity through painting, drawing, and various craft activities.",
      activities: ["Painting", "Sculpture", "Exhibitions", "Workshops"],
      members: "40",
    },
    {
      name: "Photography Club",
      description: "Capture moments and learn the art of photography.",
      activities: ["Photo Walks", "Exhibitions", "Workshops", "Contests"],
      members: "25",
    },
    {
      name: "Environmental Club",
      description: "Promote environmental awareness and sustainable practices.",
      activities: ["Tree Planting", "Recycling", "Awareness Campaigns", "Clean-ups"],
      members: "35",
    },
  ]

  const achievements = [
    {
      icon: "trophy",
      title: "State Level Science Fair",
      description: "First place in State Science Fair competition",
      student: "Rahul Sharma - Grade 10",
      date: "March 2024",
      badge: "1st Place",
    },
    {
      icon: "award",
      title: "National Mathematics Olympiad",
      description: "Qualified for International Mathematics Olympiad",
      student: "Priya Patel - Grade 12",
      date: "February 2024",
      badge: "Qualified",
    },
    {
      icon: "medal",
      title: "Inter-School Sports Championship",
      description: "Won gold medal in Basketball tournament",
      student: "School Basketball Team",
      date: "January 2024",
      badge: "Gold",
    },
    {
      icon: "trophy",
      title: "Debate Competition",
      description: "Best Speaker award in Regional Debate",
      student: "Amit Kumar - Grade 11",
      date: "December 2023",
      badge: "Best Speaker",
    },
    {
      icon: "award",
      title: "Art Exhibition",
      description: "Outstanding artwork selected for national exhibition",
      student: "Sneha Reddy - Grade 9",
      date: "November 2023",
      badge: "Selected",
    },
    {
      icon: "medal",
      title: "Music Competition",
      description: "First place in Inter-School Music Competition",
      student: "School Choir",
      date: "October 2023",
      badge: "1st Place",
    },
  ]

  const annualEvents = [
    { month: "April", events: ["Annual Day", "Science Exhibition", "Sports Day"] },
    { month: "May", events: ["Summer Camp", "Workshops"] },
    { month: "August", events: ["Independence Day", "Cultural Fest"] },
    { month: "October", events: ["Gandhi Jayanti", "Literary Fest"] },
    { month: "December", events: ["Annual Sports Meet", "Christmas Celebration"] },
    { month: "January", events: ["Republic Day", "Science Fair"] },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Student Life"
        subtitle="A vibrant and enriching student life experience with diverse activities, clubs, and opportunities for holistic development."
        breadcrumbItems={[{ label: "Student Life", href: "/student-life" }]}
      />

      <PageWrapper>
        {/* Daily Routine */}
        <section className="mb-16">
          <SectionHeading
            badge="Schedule"
            title="Daily Routine & School Timings"
            description="A well-structured daily schedule that balances academics, activities, and personal time."
          />
          <RoutineTable schedule={dailySchedule} />
        </section>

        {/* House System */}
        <section className="mb-16">
          <SectionHeading
            badge="Houses"
            title="House System"
            description="Our house system promotes healthy competition, teamwork, and a sense of belonging among students."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, index) => (
              <HouseCard key={index} {...house} />
            ))}
          </div>
        </section>

        {/* Clubs & Societies */}
        <section className="mb-16">
          <SectionHeading
            badge="Clubs"
            title="Clubs & Societies"
            description="Join various clubs and societies to explore your interests and develop new skills."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, index) => (
              <ClubCard key={index} {...club} />
            ))}
          </div>
        </section>

        {/* Co-curricular Activities */}
        <section className="mb-16">
          <SectionHeading
            badge="Activities"
            title="Co-curricular Activities"
            description="A wide range of activities to develop skills beyond academics."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Performing Arts",
                items: ["Dance", "Music", "Drama", "Theater"],
                image: "https://source.unsplash.com/800x600/?music,dance,students",
              },
              {
                title: "Visual Arts",
                items: ["Painting", "Drawing", "Sculpture", "Photography"],
                image: "https://source.unsplash.com/800x600/?art,craft,creative",
              },
              {
                title: "Sports & Fitness",
                items: ["Basketball", "Football", "Cricket", "Athletics", "Swimming"],
                image: "https://source.unsplash.com/800x600/?sports,club,activity",
              },
            ].map((category, index) => (
              <Card key={index} className="shadow-md overflow-hidden group">
                {category.image && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.title} activities at Ideal Public School`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">{category.title}</h3>
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

        {/* Student Council */}
        <section className="mb-16">
          <SectionHeading
            badge="Leadership"
            title="Student Council"
            description="Student-led governance that empowers students to take initiative and develop leadership skills."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { position: "Head Boy", name: "Arjun Mehta", grade: "Grade 12" },
              { position: "Head Girl", name: "Kavya Nair", grade: "Grade 12" },
              { position: "Vice Head Boy", name: "Rohan Singh", grade: "Grade 11" },
              { position: "Vice Head Girl", name: "Ananya Sharma", grade: "Grade 11" },
            ].map((member, index) => (
              <Card key={index} className="shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-2">
                    {member.position}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.grade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Competitions & Achievements */}
        <section className="mb-16">
          <SectionHeading
            badge="Achievements"
            title="Competitions & Achievements"
            description="Celebrating the outstanding achievements of our students in various competitions and events."
          />
          <AchievementShowcase achievements={achievements} />
        </section>

        {/* Annual Events Calendar */}
        <section className="mb-16">
          <SectionHeading
            badge="Events"
            title="Annual Events Calendar"
            description="Major events and celebrations throughout the academic year."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annualEvents.map((month, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-slate-900">{month.month}</h3>
                  </div>
                  <ul className="space-y-2">
                    {month.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-green-600">•</span>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Student Welfare Programs */}
        <section className="mb-16">
          <SectionHeading
            badge="Welfare"
            title="Student Welfare Programs"
            description="Comprehensive programs to support the well-being and development of every student."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Counseling Services",
                description: "Professional counseling for academic, personal, and career guidance",
              },
              {
                icon: Users,
                title: "Peer Support",
                description: "Peer mentoring programs and buddy systems for new students",
              },
              {
                icon: Heart,
                title: "Health & Wellness",
                description: "Regular health checkups, wellness workshops, and fitness programs",
              },
            ].map((program, index) => {
              const Icon = program.icon
              return (
                <Card key={index} className="shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Alumni Network */}
        <section className="mb-16">
          <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Alumni Network
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our growing alumni network of successful professionals across various fields. 
                Stay connected, share experiences, and contribute to the school community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary">5,000+ Alumni</Badge>
                <Badge variant="secondary">Global Network</Badge>
                <Badge variant="secondary">Regular Reunions</Badge>
                <Badge variant="secondary">Mentorship Programs</Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

