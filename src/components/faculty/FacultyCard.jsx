import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Award } from "lucide-react"
import QualificationBadge from "./QualificationBadge"

const FacultyCard = ({ name, designation, subject, qualification, experience, email }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Photo */}
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 border-2 border-blue-200 mb-4 relative">
            <Image
              src="https://source.unsplash.com/300x300/?teacher,educator,professional"
              alt={`${name}, ${designation} at Ideal Public School`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
          <Badge variant="secondary" className="mb-2">
            {designation}
          </Badge>
          {subject && (
            <p className="text-sm text-muted-foreground mb-3">{subject}</p>
          )}
          
          <div className="space-y-2 w-full">
            {qualification && (
              <QualificationBadge qualification={qualification} />
            )}
            {experience && (
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">Experience:</span> {experience}
              </p>
            )}
            {email && (
              <div className="flex items-center justify-center gap-2 text-xs">
                <Mail className="h-3 w-3 text-blue-600" />
                <a href={`mailto:${email}`} className="text-blue-600 hover:underline truncate max-w-full">
                  {email}
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FacultyCard

