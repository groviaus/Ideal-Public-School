import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const VirtualTourEmbed = () => {
  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 border border-slate-200 mb-4">
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
            <Globe className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">360° Virtual Tour</h3>
            <p className="text-muted-foreground mb-4">
              Explore our campus from anywhere in the world
            </p>
            <Button className="gap-2">
              <Globe className="h-4 w-4" />
              Launch Virtual Tour
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Interactive 360° virtual tour of our school facilities, classrooms, labs, and campus.
        </p>
      </CardContent>
    </Card>
  )
}

export default VirtualTourEmbed

