import Image from "next/image"
import SectionWrapper from "@/components/SectionWrapper"
import { Trophy, Star, Medal } from "lucide-react"

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" background="white" className="bg-slate-900 border-t border-slate-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Hall of Fame</h2>
        <p className="mt-4 text-lg text-slate-300">
          Celebrating the outstanding achievements of our students and school.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
          <Image
            src="/images/award-ceremony-group-banner.jpeg"
            alt="Students and staff at an award ceremony at Ideal Public School"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
          <Image
            src="/images/trophy-presentation-boy-uniform.jpeg"
            alt="Student receiving a trophy during a school ceremony"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
         <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="mx-auto w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 text-yellow-500">
               <Trophy className="h-8 w-8" />
            </div>
             <h3 className="text-4xl font-bold mb-2 text-white">100%</h3>
             <p className="text-slate-400">Board Results (Class VIII)</p>
         </div>
         
         <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-500">
               <Medal className="h-8 w-8" />
            </div>
             <h3 className="text-4xl font-bold mb-2 text-white">20+</h3>
             <p className="text-slate-400">Years of Excellence</p>
         </div>
         
         <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
               <Star className="h-8 w-8" />
            </div>
             <h3 className="text-4xl font-bold mb-2 text-white">Est. 2005</h3>
             <p className="text-slate-400">Trusted by Families in Siwan</p>
         </div>
      </div>
    </SectionWrapper>
  )
}

export default Achievements
