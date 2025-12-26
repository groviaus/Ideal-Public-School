import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const QualificationBadge = ({ qualification }) => {
  return (
    <Badge variant="outline" className="text-xs gap-1">
      <Award className="h-3 w-3" />
      {qualification}
    </Badge>
  )
}

export default QualificationBadge

