import SectionWrapper from "@/components/SectionWrapper"
import { Card, CardContent } from "@/components/ui/card"

import { Star } from "lucide-react"

const Testimonials = () => {
    // Mock Avatar since I haven't created the component yet, using simple div
  const testimonials = [
    {
      name: "Mrs. Sarah Thompson",
      role: "Parent of Grade 5 Student",
      content: "Ideal Public School has been a blessing for my child. The teachers are incredibly supportive, and the focus on holistic development is evident.",
      rating: 5
    },
    {
      name: "Mr. Rahul Verma",
      role: "Alumni (Batch of 2015)",
      content: "The values and discipline I learned here have shaped my career. The school provided me with the perfect foundation for success.",
      rating: 5
    },
    {
      name: "Ms. Anjali Gupta",
      role: "Parent of Grade 8 Student",
      content: "I appreciate the safe and inclusive environment. The infrastructure is top-notch, and my daughter loves going to school every day.",
      rating: 4
    }
  ]

  return (
    <SectionWrapper id="testimonials" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">What People Say</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Heartwarming feedback from our parents and alumni.
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
