import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

const VideoPlayer = ({ videos = [] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
          <div className="relative aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-green-100">
            {video.thumbnail ? (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Play className="h-16 w-16 text-blue-600" />
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="h-8 w-8 text-blue-600 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-lg">{video.title}</CardTitle>
          </CardHeader>
          {video.description && (
            <CardContent>
              <p className="text-sm text-muted-foreground">{video.description}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}

export default VideoPlayer

