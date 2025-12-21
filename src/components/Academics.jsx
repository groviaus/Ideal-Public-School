import SectionWrapper from "@/components/SectionWrapper"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Book, GraduationCap, Microscope, Palette } from "lucide-react"

const Academics = () => {
  const academicFeatures = [
    {
      title: "Curriculum",
      icon: <Book className="h-10 w-10 text-blue-500 mb-2" />,
      description: "We follow the CBSE curriculum with a focus on holistic development and conceptual understanding."
    },
    {
      title: "Classes Offered",
      icon: <GraduationCap className="h-10 w-10 text-green-500 mb-2" />,
      description: "From Kindergarten to Senior Secondary (Grade XII) with Science, Commerce, and Humanities streams."
    },
    {
      title: "Innovative Methods",
      icon: <Microscope className="h-10 w-10 text-purple-500 mb-2" />,
      description: "Smart classrooms, experiential learning, and project-based assessments for deeper engagement."
    },
    {
      title: "Co-Curricular",
      icon: <Palette className="h-10 w-10 text-orange-500 mb-2" />,
      description: "A perfect balance of academics, sports, arts, and cultural activities for all-round growth."
    }
  ]

  return (
    <SectionWrapper id="academics" background="light">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Excellence</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Our academic program is designed to challenge and inspire students to become critical thinkers and lifelong learners.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {academicFeatures.map((feature, index) => (
          <Card key={index} className="border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <div className="flex justify-center">{feature.icon}</div>
              <CardTitle className="text-center text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Academics
