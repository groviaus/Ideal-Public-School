import SectionWrapper from "@/components/SectionWrapper"
import { Card, CardContent } from "@/components/ui/card"

import { Star } from "lucide-react"

const Testimonials = () => {
    // Mock Avatar since I haven't created the component yet, using simple div
  const testimonials = [
    {
      name: "Sahil Siddique",
      role: "Alumni",
      content: "Ideal Public School has excellent faculty and subject matter expertise. They offer multiple facilities, a resourceful library, and no extra fees. The school is reasonably priced, with clean facilities and adequate security. The curriculum is relevant and highly specialized. Excellent choice!",
      rating: 5
    },
    {
      name: "Arman",
      role: "Alumni",
      content: "I had a wonderful experience studying at Ideal Public School. The teachers genuinely care about the students' progress and go out of their way to help. The friendly environment and strong focus on academics really prepared me well for higher education.",
      rating: 5
    },
    {
      name: "Danish",
      role: "Alumni",
      content: "A truly great school in Siwan. The campus is beautiful and they maintain excellent discipline. What impressed me the most looking back is the perfect balance between studies and extracurricular activities that shaped my confidence.",
      rating: 5
    }
  ]

  return (
    <SectionWrapper id="testimonials" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">What People Say</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Heartwarming feedback from our alumni.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <Card key={index} className="bg-slate-50 border-none shadow-sm">
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
                    {t.name[0]}
                 </div>
                 <div>
                   <p className="font-semibold text-sm text-slate-900">{t.name}</p>
                   <p className="text-xs text-slate-500">{t.role}</p>
                 </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
