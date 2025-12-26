import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Award } from "lucide-react"

const LeadershipCard = ({ name, designation, department, qualification, experience, bio, email }) => {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 border-2 border-blue-200 relative">
              <Image
                src="https://source.unsplash.com/400x400/?professional,educator,portrait"
                alt={`${name}, ${designation} at Ideal Public School`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
              <Badge variant="secondary" className="mb-2">
                {designation}
              </Badge>
              {department && (
                <p className="text-sm text-muted-foreground">{department}</p>
              )}
            </div>
            
            <div className="space-y-2">
              {qualification && (
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span className="text-muted-foreground">{qualification}</span>
                </div>
              )}
              {experience && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Experience:</span> {experience}
                </p>
              )}
              {email && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                    {email}
                  </a>
                </div>
              )}
            </div>
            
            {bio && (
              <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t">
                {bio}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default LeadershipCard

