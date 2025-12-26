import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

const DocumentChecklist = ({ documents = [] }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Required Documents Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-slate-900">{doc.name}</p>
                {doc.description && (
                  <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> All documents must be self-attested copies. Original documents 
            should be brought for verification during the admission process.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default DocumentChecklist

