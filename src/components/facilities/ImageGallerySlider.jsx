"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toGalleryItem } from "@/lib/schoolPhotos"

const ImageGallerySlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = images.map(toGalleryItem)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (slides.length === 0) return null

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.src || index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            {slide.src ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <span className="text-muted-foreground">Image {index + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-white w-8" : "bg-white/50"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ImageGallerySlider

