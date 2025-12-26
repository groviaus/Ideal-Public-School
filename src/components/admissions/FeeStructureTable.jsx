import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const FeeStructureTable = ({ feeStructure = [] }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Fee Structure (Academic Year 2024-25)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="text-left p-4 font-semibold text-slate-900">Grade</th>
                <th className="text-right p-4 font-semibold text-slate-900">Admission Fee</th>
                <th className="text-right p-4 font-semibold text-slate-900">Annual Fee</th>
                <th className="text-right p-4 font-semibold text-slate-900">Monthly Tuition</th>
                <th className="text-right p-4 font-semibold text-slate-900">Total (Annual)</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((fee, index) => (
                <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{fee.grade}</td>
                  <td className="p-4 text-right text-muted-foreground">₹{fee.admissionFee.toLocaleString()}</td>
                  <td className="p-4 text-right text-muted-foreground">₹{fee.annualFee.toLocaleString()}</td>
                  <td className="p-4 text-right text-muted-foreground">₹{fee.monthlyTuition.toLocaleString()}</td>
                  <td className="p-4 text-right font-semibold text-blue-600">₹{fee.totalAnnual.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 space-y-3">
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-900">
              <strong>Note:</strong> Fees are subject to revision. Please contact the admission office 
              for the most current fee structure.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Transport Fee: Additional</Badge>
            <Badge variant="secondary">Uniform: Separate</Badge>
            <Badge variant="secondary">Books: Separate</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FeeStructureTable

