import SectionWrapper from "@/components/SectionWrapper"
import { Music, Palette, Move, Drama } from "lucide-react"

const Activities = () => {
  const activities = [
    {
      title: "Sports & Fitness",
      description: "Cricket, Football, Basketball, Yoga, Athletics",
      icon: <Move className="h-6 w-6 text-white" />,
      imageColor: "bg-green-500"
    },
    {
      title: "Music & Dance",
      description: "Classical, Western, Instrumental, Vocal",
      icon: <Music className="h-6 w-6 text-white" />,
      imageColor: "bg-purple-500"
    },
    {
      title: "Art & Craft",
      description: "Painting, Sculpture, Pottery, Origami",
      icon: <Palette className="h-6 w-6 text-white" />,
      imageColor: "bg-orange-500"
    },
    {
      title: "Cultural Events",
      description: "Annual Day, Festivals, Inter-school competitions",
      icon: <Drama className="h-6 w-6 text-white" />,
      imageColor: "bg-blue-500"
    }
  ]

  return (
    <SectionWrapper id="activities" background="light">
       <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
              Beyond the Classroom
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe that education goes beyond textbooks. Our co-curricular activities allow students to explore their passions and talents.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {activities.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                   <div className={`p-3 rounded-lg ${item.imageColor} shrink-0`}>
                      {item.icon}
                   </div>
                   <div>
                     <h3 className="font-semibold text-slate-800">{item.title}</h3>
                     <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
             {/* Image Placeholders */}
             <div className="aspect-square rounded-2xl bg-slate-200 w-full flex items-center justify-center text-slate-400 text-xs">Sports Image</div>
             <div className="aspect-square rounded-2xl bg-slate-200 w-full translate-y-8 flex items-center justify-center text-slate-400 text-xs">Dance Image</div>
             <div className="aspect-square rounded-2xl bg-slate-200 w-full flex items-center justify-center text-slate-400 text-xs">Art Image</div>
             <div className="aspect-square rounded-2xl bg-slate-200 w-full translate-y-8 flex items-center justify-center text-slate-400 text-xs">Drama Image</div>
          </div>
       </div>
    </SectionWrapper>
  )
}

export default Activities
