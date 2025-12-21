import SectionWrapper from "@/components/SectionWrapper"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const News = () => {
  const newsItems = [
    {
      date: "10 Feb, 2025",
      title: "Annual Sports Day Celebration",
      category: "Events",
      excerpt: "Join us for a day of athletic excellence and team spirit at our main sports ground."
    },
    {
      date: "05 Feb, 2025",
      title: "Science Exhibition Winners",
      category: "Academic",
      excerpt: "Our students bagged the first prize at the Inter-School Science Fair 2025."
    },
    {
      date: "28 Jan, 2025",
      title: "Admission Open for 2025-26",
      category: "Admissions",
      excerpt: "Online applications are now open for all grades from Nursery to Class IX."
    }
  ]

  return (
    <SectionWrapper id="news" background="light">
      <div className="flex justify-between items-end mb-10">
         <div>
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">News & Announcements</h2>
           <p className="mt-2 text-lg text-muted-foreground">Keep up with the latest happenings at our school.</p>
         </div>
         <Button variant="outline" className="hidden md:flex">
           View All Archives
         </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {newsItems.map((item, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-all duration-300 border-none shadow-md">
            <CardHeader className="pb-2">
               <div className="flex justify-between items-center mb-2">
                 <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                   {item.category}
                 </Badge>
                 <div className="flex items-center text-xs text-muted-foreground">
                   <CalendarDays className="mr-1 h-3 w-3" />
                   {item.date}
                 </div>
               </div>
               <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                 {item.title}
               </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {item.excerpt}
              </p>
            </CardContent>
            <CardFooter>
               <Button variant="link" className="px-0 text-blue-600">
                 Read More <ChevronRight className="ml-1 h-4 w-4" />
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <Button variant="outline">View All Archives</Button>
      </div>
    </SectionWrapper>
  )
}

export default News
