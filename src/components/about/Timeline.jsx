import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Timeline = ({ events = [] }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-green-200 hidden md:block"></div>
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <Card className="flex-1 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                    {event.year}
                  </span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                )}
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline

