import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Target, Award } from "lucide-react"

const MethodologyTimeline = ({ methodologies = [] }) => {
  const icons = {
    inquiry: Lightbulb,
    collaboration: Users,
    action: Target,
    reflection: Award,
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {methodologies.map((method, index) => {
        const Icon = icons[method.icon] || Lightbulb
        return (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {method.description}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default MethodologyTimeline

