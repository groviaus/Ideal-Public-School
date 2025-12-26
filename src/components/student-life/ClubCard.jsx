import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

const ClubCard = ({ name, description, activities = [], members }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          {members && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {members}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {description}
        </p>
        {activities.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-slate-900 mb-2">Activities:</p>
            <div className="flex flex-wrap gap-2">
              {activities.map((activity, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {activity}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ClubCard

