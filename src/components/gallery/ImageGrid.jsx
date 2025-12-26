"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Lightbox from "./Lightbox"

const ImageGrid = ({ images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigate = (direction) => {
    if (typeof direction === "number") {
      setCurrentIndex(direction)
    } else {
      setCurrentIndex((prev) => {
        const newIndex = prev + direction
        if (newIndex < 0) return images.length - 1
        if (newIndex >= images.length) return 0
        return newIndex
      })
    }
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No images available in this category.
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(index)}
          >
            {image ? (
              <Image
                src={image}
                alt={`Gallery image ${index + 1} from Ideal Public School`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Image {index + 1}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </>
  )
}

export default ImageGrid

