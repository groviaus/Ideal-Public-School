import Image from "next/image"
import SectionWrapper from "@/components/SectionWrapper"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Library, FlaskConical, Trophy, Bus, Stethoscope, Wifi } from "lucide-react"

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Library",
      description: "Stocked with over 10,000 books, journals, and digital resources.",
      icon: <Library className="h-8 w-8 text-blue-500" />,
      image: "https://source.unsplash.com/800x500/?library,books,reading"
    },
    {
      title: "Science Labs",
      description: "State-of-the-art Physics, Chemistry, and Biology laboratories.",
      icon: <FlaskConical className="h-8 w-8 text-green-500" />,
      image: "https://source.unsplash.com/800x500/?science,laboratory,experiment"
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor facilities for Cricket, Football, Basketball, and more.",
      icon: <Trophy className="h-8 w-8 text-orange-500" />,
      image: "https://source.unsplash.com/800x500/?sports,playground,athletics"
    },
    {
      title: "Transport",
      description: "GPS-enabled bus fleet covering all major routes for safe commute.",
      icon: <Bus className="h-8 w-8 text-yellow-500" />,
      image: "https://source.unsplash.com/800x500/?school,bus,yellow"
    },
    {
      title: "Medical Room",
      description: "Full-time nurse and visiting doctors for health checkups and emergencies.",
      icon: <Stethoscope className="h-8 w-8 text-red-500" />,
      image: "https://source.unsplash.com/800x500/?medical,clinic,healthcare"
    },
    {
      title: "Wi-Fi Campus",
      description: "High-speed internet access across the campus for digital learning.",
      icon: <Wifi className="h-8 w-8 text-purple-500" />,
      image: null
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
