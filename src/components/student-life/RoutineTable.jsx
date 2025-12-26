import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

const RoutineTable = ({ schedule = [] }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <CardTitle>Daily Routine & School Timings</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="text-left p-4 font-semibold text-slate-900">Time</th>
                <th className="text-left p-4 font-semibold text-slate-900">Activity</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{item.time}</td>
                  <td className="p-4 text-muted-foreground">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> Timings may vary for different grade levels. Please check with 
            the class teacher for specific schedules.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default RoutineTable

