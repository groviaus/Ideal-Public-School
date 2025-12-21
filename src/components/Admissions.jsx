import SectionWrapper from "@/components/SectionWrapper"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle2, Calendar, FileText } from "lucide-react"

const Admissions = () => {
  return (
    <SectionWrapper id="admissions" background="light">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Admissions</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join our growing family. Admissions are now open for the academic session 2025-26.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Process Card */}
        <Card className="flex flex-col shadow-lg border-blue-100">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
              <FileText className="h-6 w-6" />
            </div>
            <CardTitle>Admission Process</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 space-y-2">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
              <li>Submit online application</li>
              <li>Entrance test / Interaction</li>
              <li>Document verification</li>
              <li>Fee payment & confirmation</li>
            </ol>
          </CardContent>
        </Card>

        {/* Requirements Card */}
        <Card className="flex flex-col shadow-lg border-green-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 bg-green-500 text-white text-xs font-bold rounded-bl-xl">
            OPEN NOW
          </div>
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <CardTitle>Criteria</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 space-y-2 text-sm text-muted-foreground">
             <ul className="space-y-2">
               <li className="flex gap-2">
                 <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                 <span>Pre-Nursery: 3+ Years</span>
               </li>
               <li className="flex gap-2">
                 <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                 <span>Grade 1: 5.5+ Years as of 1st April</span>
               </li>
               <li className="flex gap-2">
                 <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                 <span>Transfer Certificate mandatory for Grade 2+</span>
               </li>
             </ul>
          </CardContent>
        </Card>

        {/* Dates Card */}
        <Card className="flex flex-col shadow-lg border-orange-100">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
              <Calendar className="h-6 w-6" />
            </div>
            <CardTitle>Important Dates</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 space-y-2 text-sm text-muted-foreground">
             <div className="space-y-4">
               <div>
                 <p className="font-semibold text-foreground">Forms Available</p>
                 <p>1st December, 2024</p>
               </div>
               <div>
                 <p className="font-semibold text-foreground">Last Date to Apply</p>
                 <p>31st March, 2025</p>
               </div>
               <div>
                 <p className="font-semibold text-foreground">Session Starts</p>
                 <p>April, 2025</p>
               </div>
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="w-full sm:w-auto px-8 gap-2">
           Apply Online Now
           <FileText className="h-4 w-4" />
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          For queries, call us at <span className="font-semibold">+91-123-456-7890</span>
        </p>
      </div>
    </SectionWrapper>
  )
}

export default Admissions
