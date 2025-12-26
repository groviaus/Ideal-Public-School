import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock } from "lucide-react"

const DepartmentContactCard = ({ department, phone, email, hours, person }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{department}</CardTitle>
        {person && <p className="text-sm text-muted-foreground">{person}</p>}
      </CardHeader>
      <CardContent className="space-y-3">
        {phone && (
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <a href={`tel:${phone}`} className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
              {phone}
            </a>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
            <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-green-600 transition-colors break-all">
              {email}
            </a>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-orange-600 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{hours}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default DepartmentContactCard

