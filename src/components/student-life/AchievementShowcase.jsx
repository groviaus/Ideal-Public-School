import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal } from "lucide-react"

const AchievementShowcase = ({ achievements = [] }) => {
  const icons = {
    trophy: Trophy,
    award: Award,
    medal: Medal,
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement, index) => {
        const Icon = icons[achievement.icon] || Trophy
        return (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-900">{achievement.title}</h3>
                    {achievement.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {achievement.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  {achievement.student && (
                    <p className="text-xs text-blue-600 font-medium">
                      {achievement.student}
                    </p>
                  )}
                  {achievement.date && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {achievement.date}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default AchievementShowcase

