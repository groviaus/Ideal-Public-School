import Image from "next/image"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SectionWrapper from "@/components/SectionWrapper"
import Footer from "@/components/Footer"
import Academics from "@/components/Academics"
import WhyChooseUs from "@/components/WhyChooseUs"
import Facilities from "@/components/Facilities"
import Activities from "@/components/Activities"
import Achievements from "@/components/Achievements"
import PrincipalMessage from "@/components/PrincipalMessage"
import Gallery from "@/components/Gallery"
import News from "@/components/News"
import Testimonials from "@/components/Testimonials"
import Admissions from "@/components/Admissions"
import { Button } from "@/components/ui/button"
import { ArrowRight, BadgeCheck, BookOpen, Users, Trophy } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      
      <SectionWrapper id="about" background="white">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Nurturing Excellence Since 1995
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ideal Public School is a premier educational institution committed to providing holistic education. 
              Affiliated with CBSE, we are located in the heart of the city, offering a serene and conducive environment for learning that empowers students to reach their full potential.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <BadgeCheck className="h-5 w-5 text-blue-600" />
                 </div>
                 <span className="font-medium text-slate-700">CBSE Affiliated</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <Users className="h-5 w-5 text-green-600" />
                 </div>
                 <span className="font-medium text-slate-700">2000+ Students</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                 </div>
                 <span className="font-medium text-slate-700">Expert Faculty</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <Trophy className="h-5 w-5 text-orange-600" />
                 </div>
                 <span className="font-medium text-slate-700">Award Winning</span>
              </div>
            </div>

            <Button className="mt-4" size="lg">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-slate-100 border border-slate-200">
             <Image
               src="https://source.unsplash.com/800x600/?students,classroom,learning"
               alt="Students learning in modern classroom at Ideal Public School"
               fill
               className="object-cover"
               unoptimized
             />
          </div>
        </div>
      </SectionWrapper>

      <Academics />
      <WhyChooseUs />
      <Admissions />
      <Facilities />
      <Activities />
      <Achievements />
      <PrincipalMessage />
      <Gallery />
      <News />
      <Testimonials />

      <Footer />
    </main>
  )
}
