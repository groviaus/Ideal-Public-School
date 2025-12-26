import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const HouseCard = ({ name, color, description, achievements = [] }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{name} House</CardTitle>
          <Badge style={{ backgroundColor: color, color: "white" }}>
            {name}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {achievements.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-2">Recent Achievements:</p>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default HouseCard

