import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const NewsDetail = ({ news }) => {
  if (!news) return null

  return (
    <article>
      <div className="mb-6">
        <Link href="/news">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Button>
        </Link>
      </div>

      <Card className="shadow-md mb-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-green-100">
          {news.image ? (
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <Image
              src="https://source.unsplash.com/1200x800/?school,news,event"
              alt={news.title}
              fill
              className="object-cover"
              unoptimized
            />
          )}
        </div>
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            {news.category && (
              <Badge variant="secondary">{news.category}</Badge>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{news.date}</span>
            </div>
            {news.author && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{news.author}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {news.title}
          </h1>

          <div className="prose max-w-none">
            {news.content && (
              <div className="text-muted-foreground leading-relaxed space-y-4">
                {news.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {news.relatedNews && news.relatedNews.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.relatedNews.map((related, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{related.date}</p>
                  <Link
                    href={`/news/${related.slug}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default NewsDetail

