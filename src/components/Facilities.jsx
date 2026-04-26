import Image from "next/image"
import SectionWrapper from "@/components/SectionWrapper"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Library, FlaskConical, Bus, Wifi } from "lucide-react"

const Facilities = () => {
  const facilities = [
    {
      title: "27 Smart Classrooms",
      description: "Spacious and well-equipped classrooms spread across our 2-acre campus for an optimal learning environment.",
      icon: <Library className="h-8 w-8 text-blue-500" />,
      image: "/images/classroom-students-windows-fans.jpeg"
    },
    {
      title: "Physics Lab",
      description: "Fully equipped Physics laboratory for hands-on experiential learning and experiments.",
      icon: <FlaskConical className="h-8 w-8 text-green-500" />,
      image: "/images/classroom-teacher-blackboard.jpeg"
    },
    {
      title: "Chemistry Lab",
      description: "Modern Chemistry lab with all essential apparatus and safety equipment for practical learning.",
      icon: <FlaskConical className="h-8 w-8 text-purple-500" />,
      image: "/images/classroom-aerial-students-working.jpeg"
    },
    {
      title: "Biology Lab",
      description: "Well-stocked Biology lab with microscopes and specimens for in-depth study of life sciences.",
      icon: <FlaskConical className="h-8 w-8 text-teal-500" />,
      image: "/images/classroom-students-with-hijab.jpeg"
    },
    {
      title: "Computer Lab",
      description: "State-of-the-art Computer lab to build digital literacy and programming skills from an early age.",
      icon: <Wifi className="h-8 w-8 text-orange-500" />,
      image: "/images/classroom-boys-hands-raised.jpeg"
    },
    {
      title: "Library",
      description: "A well-stocked library with books, journals, and digital resources to nurture a love for reading.",
      icon: <Library className="h-8 w-8 text-red-500" />,
      image: "/images/classroom-students-alternate-angle.jpeg"
    },
    {
      title: "8 School Buses",
      description: "Safe and reliable transport service with 8 school buses covering major routes in and around Siwan.",
      icon: <Bus className="h-8 w-8 text-yellow-500" />,
      image: "/images/school-entrance-gate-sign.jpeg"
    }
  ]

  return (
    <SectionWrapper id="facilities" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">World-Class Facilities</h2>
        <p className="mt-4 text-lg text-muted-foreground w-full max-w-2xl mx-auto">
          We provide a conducive environment for holistic growth with our top-notch infrastructure.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((fac, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200 overflow-hidden group">
            {fac.image && (
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={fac.image}
                  alt={`${fac.title} at Ideal Public School`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
            )}
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                {fac.icon}
              </div>
              <CardTitle className="text-lg">{fac.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                {fac.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Facilities
