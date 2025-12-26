import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle2 } from "lucide-react"

const AccreditationBadges = ({ accreditations = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accreditations.map((accreditation, index) => (
        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                {accreditation.icon === "award" ? (
                  <Award className="h-8 w-8 text-blue-600" />
                ) : (
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                )}
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {accreditation.name}
            </h3>
            {accreditation.badge && (
              <Badge variant="outline" className="mb-2">
                {accreditation.badge}
              </Badge>
            )}
            {accreditation.description && (
              <p className="text-sm text-muted-foreground">
                {accreditation.description}
              </p>
            )}
            {accreditation.year && (
              <p className="text-xs text-muted-foreground mt-2">
                Since {accreditation.year}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default AccreditationBadges

