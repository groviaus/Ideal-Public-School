import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

const MissionVisionCard = ({ type, title, description, values = [] }) => {
  const icons = {
    mission: Target,
    vision: Eye,
    values: Heart,
  }
  
  const Icon = icons[type] || Target
  
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        {values && values.length > 0 && (
          <ul className="space-y-2">
            {values.map((value, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-blue-600 mt-1">•</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

export default MissionVisionCard

