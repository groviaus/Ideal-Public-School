import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const AgeTable = ({ ageCriteria = [] }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Age Criteria for Admission</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="text-left p-4 font-semibold text-slate-900">Grade</th>
                <th className="text-left p-4 font-semibold text-slate-900">Minimum Age</th>
                <th className="text-left p-4 font-semibold text-slate-900">Maximum Age</th>
                <th className="text-left p-4 font-semibold text-slate-900">As on 31st March</th>
              </tr>
            </thead>
            <tbody>
              {ageCriteria.map((criteria, index) => (
                <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{criteria.grade}</td>
                  <td className="p-4 text-muted-foreground">{criteria.minAge}</td>
                  <td className="p-4 text-muted-foreground">{criteria.maxAge}</td>
                  <td className="p-4 text-muted-foreground">{criteria.asOnDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default AgeTable

