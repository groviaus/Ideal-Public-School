import Image from "next/image"
import SectionWrapper from "@/components/SectionWrapper"
import { Quote } from "lucide-react"
import { principalSectionImage } from "@/lib/schoolPhotos"

const PrincipalMessage = () => {
  return (
    <SectionWrapper id="principal" background="white">
       <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-1/3">
             <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden relative shadow-xl">
               <Image
                 src={principalSectionImage.src}
                 alt={principalSectionImage.alt}
                 fill
                 sizes="(max-width: 768px) 100vw, 33vw"
                 className="object-cover"
                 unoptimized
               />
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <p className="font-bold text-lg">Founder</p>
                  <p className="text-sm opacity-90">Ideal Public School, Siwan</p>
               </div>
             </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
             <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
               <Quote className="h-6 w-6" />
             </div>
             <h2 className="text-3xl font-bold tracking-tighter text-slate-900">
               "Education is the harmonious blend of knowledge and character."
             </h2>
             <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
               <p>
                 Welcome to Ideal Public School. Our vision is to create a happy, safe, and inspiring place where children love to come to school each day. A place where learning is joyful, friendships are built, and every child feels valued and confident.
               </p>
               <p>
                 We encourage students to discover their strengths, express their creativity, and grow at their own pace, supported by caring teachers and a nurturing environment that helps them flourish.
               </p>
               <p>
                 We are committed to creating an environment where progressive learning meets enduring values, preparing learners for a rapidly evolving world.
               </p>
             </div>
             
             <div className="pt-4">
                <p className="font-handwriting text-2xl text-blue-600">The Principal</p>
             </div>
          </div>
       </div>
    </SectionWrapper>
  )
}

export default PrincipalMessage
