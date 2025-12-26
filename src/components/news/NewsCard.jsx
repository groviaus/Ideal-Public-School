import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const NewsCard = ({ title, excerpt, date, category, slug, image }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-green-100">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <Image
            src="https://source.unsplash.com/600x400/?school,news,event"
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        )}
        {category && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary">{category}</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Calendar className="h-3 w-3" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
          {excerpt}
        </p>
        <Link
          href={`/news/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default NewsCard

