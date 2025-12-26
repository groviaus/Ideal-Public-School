import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarIcon } from "lucide-react"

const CalendarWidget = ({ events = [] }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-blue-600" />
          <CardTitle>Academic Calendar 2024-25</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
              <div className="flex-shrink-0 text-center">
                <div className="text-2xl font-bold text-blue-600">{event.date}</div>
                <div className="text-xs text-muted-foreground uppercase">{event.month}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-slate-900">{event.title}</h4>
                  {event.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {event.badge}
                    </Badge>
                  )}
                </div>
                {event.description && (
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> Dates are subject to change. Please check with the school 
            administration for the most updated calendar.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CalendarWidget

