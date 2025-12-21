import SectionWrapper from "@/components/SectionWrapper"
import { Quote } from "lucide-react"

const PrincipalMessage = () => {
  return (
    <SectionWrapper id="principal" background="white">
       <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-1/3">
             <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden relative shadow-xl">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                 Principal Image Placement
               </div>
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <p className="font-bold text-lg">Dr. Jane Doe</p>
                  <p className="text-sm opacity-90">Principal, Ideal Public School</p>
               </div>
             </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
             <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
               <Quote className="h-6 w-6" />
             </div>
             <h2 className="text-3xl font-bold tracking-tighter text-slate-900">
               "Education is not the filling of a pail, but the lighting of a fire."
             </h2>
             <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
               <p>
                 Welcome to Ideal Public School. Our mission is to provide a safe, nurturing, and challenging environment where every student is encouraged to strive for excellence.
               </p>
               <p>
                 We believe in a holistic approach to education that addresses the intellectual, emotional, social, and physical development of each child. Our dedicated faculty and state-of-the-art facilities ensure that our students are well-prepared for the future.
               </p>
               <p>
                 I invite you to explore our website and visit our campus to experience the vibrant community that makes Ideal Public School a special place for learning.
               </p>
             </div>
             
             <div className="pt-4">
                <p className="font-handwriting text-2xl text-blue-600">Jane Doe</p>
             </div>
          </div>
       </div>
    </SectionWrapper>
  )
}

export default PrincipalMessage
