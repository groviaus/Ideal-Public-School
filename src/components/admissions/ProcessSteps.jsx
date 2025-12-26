import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const ProcessSteps = ({ steps = [] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <Card key={index} className="relative shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {step.description}
                </p>
                {step.duration && (
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                <div className="h-0.5 w-6 bg-gradient-to-r from-blue-400 to-green-400"></div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProcessSteps

