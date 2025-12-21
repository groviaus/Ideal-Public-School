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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
         <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="mx-auto w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 text-yellow-500">
               <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-white">100%</h3>
            <p className="text-slate-400">Board Results (Class X & XII)</p>
         </div>
         
         <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-500">
               <Medal className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-white">50+</h3>
            <p className="text-slate-400">National Level Awards</p>
         </div>
         
         <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
               <Star className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-white">Top 10</h3>
            <p className="text-slate-400">Ranked in City Schools</p>
         </div>
      </div>
    </SectionWrapper>
  )
}

export default Achievements
