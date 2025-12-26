import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Shield, Camera, Users, AlertTriangle } from "lucide-react"

const SafetyChecklist = ({ safetyMeasures = [] }) => {
  const icons = {
    cctv: Camera,
    security: Shield,
    staff: Users,
    emergency: AlertTriangle,
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          Safety & Security Measures
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {safetyMeasures.map((measure, index) => {
            const Icon = icons[measure.icon] || CheckCircle2
            return (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                <Icon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">{measure.title}</p>
                  {measure.description && (
                    <p className="text-sm text-muted-foreground mt-1">{measure.description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default SafetyChecklist

