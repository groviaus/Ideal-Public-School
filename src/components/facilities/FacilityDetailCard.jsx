import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const FacilityDetailCard = ({ name, description, features = [], image }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-green-100">
        {image ? (
          <Image
            src={image}
            alt={`${name} facility at Ideal Public School`}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="text-4xl mb-2">🏫</div>
              <span className="text-sm font-medium opacity-60">{name} Image</span>
            </div>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}
        {features.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900 mb-2">Features:</p>
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

export default FacilityDetailCard

