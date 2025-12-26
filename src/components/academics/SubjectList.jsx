import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SubjectList = ({ streams = [] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {streams.map((stream, index) => (
        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{stream.name}</CardTitle>
              {stream.badge && (
                <Badge variant="outline">{stream.badge}</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stream.subjects.map((subject, subIndex) => (
                <div key={subIndex} className="flex items-center justify-between p-2 rounded bg-slate-50">
                  <span className="text-sm font-medium text-slate-900">{subject.name}</span>
                  {subject.code && (
                    <Badge variant="secondary" className="text-xs">
                      {subject.code}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default SubjectList

