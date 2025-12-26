import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, GraduationCap } from "lucide-react"

const GradeCard = ({ grade, ageRange, description, features = [], image }) => {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      {image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={`${grade} students at Ideal Public School`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{grade}</CardTitle>
          <Badge variant="secondary">{ageRange}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {features.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900 mb-2">Key Features:</p>
            <ul className="space-y-1.5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default GradeCard

