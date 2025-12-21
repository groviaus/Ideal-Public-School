import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 mb-4">
              Admissions Open for 2024-25
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-slate-900">
              Where Learning Knows <br className="hidden sm:inline" />
              <span className="text-primary">No Bounds</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
              Ideal Public School provides a world-class education that fosters critical thinking, creativity, and character development for tomorrow's leaders.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="gap-2 h-12 px-8 text-base shadow-lg shadow-blue-500/20">
              Apply for Admission <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 h-12 px-8 text-base border-blue-200 hover:bg-blue-50 text-blue-700">
              Download Prospectus <Download className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default Hero
