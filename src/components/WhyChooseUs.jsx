import SectionWrapper from "@/components/SectionWrapper"
import { Award, ShieldCheck, UserCheck, MonitorPlay } from "lucide-react"

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experienced Faculty",
      description: "Highly qualified and dedicated teachers who mentor students at every step.",
      icon: <UserCheck className="h-8 w-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Smart Classrooms",
      description: "Digital learning aids and modern technology to enhance the learning experience.",
      icon: <MonitorPlay className="h-8 w-8 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Safe Campus",
      description: "24/7 security, CCTV surveillance, and a safe, nurturing environment for all.",
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      color: "bg-green-500"
    },
    {
      title: "Holistic Development",
      description: "Focus on character building, leadership skills, and emotional intelligence.",
      icon: <Award className="h-8 w-8 text-white" />,
      color: "bg-orange-500"
    }
  ]

  return (
    <SectionWrapper id="why-choose-us" background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
            Why Choose Ideal Public School?
          </h2>
          <p className="text-lg text-muted-foreground">
             We believe in empowering students with knowledge, values, and skills to face the challenges of the future. Here is what sets us apart.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className={`p-3 rounded-lg w-fit ${reason.color} shadow-md`}>
                  {reason.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative">
             {/* Placeholder Image */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <span className="text-lg font-medium opacity-40">School Life / Happy Students Image</span>
             </div>
             {/* Decorative box */}
             <div className="absolute -bottom-6 -left-6 w-2/3 h-1/3 bg-blue-600 rounded-xl -z-10"></div>
             <div className="absolute -top-6 -right-6 w-1/3 h-1/3 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WhyChooseUs
