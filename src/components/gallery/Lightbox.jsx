"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Lightbox = ({ images = [], currentIndex = 0, isOpen, onClose, onNavigate }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onNavigate(-1)
      if (e.key === "ArrowRight") onNavigate(1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNavigate])

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={(e) => {
                e.stopPropagation()
                onNavigate(-1)
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={(e) => {
                e.stopPropagation()
                onNavigate(1)
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        <div className="relative">
          {currentImage ? (
            <img
              src={currentImage}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          ) : (
            <div className="w-full h-[90vh] bg-slate-800 flex items-center justify-center rounded-lg">
              <span className="text-white">Image {currentIndex + 1}</span>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate(index - currentIndex)
                }}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-white w-8" : "bg-white/50"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Lightbox

