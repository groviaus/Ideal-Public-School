import Image from "next/image"
import SectionWrapper from "@/components/SectionWrapper"
import { homeGalleryMosaic } from "@/lib/schoolPhotos"

const Gallery = () => {
  const galleryItems = homeGalleryMosaic

  return (
    <SectionWrapper id="gallery" background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Campus Life</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Glimpses of our vibrant campus and student activities.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
         {/* Large Item */}
         <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden bg-slate-200 group">
             <Image
               src={galleryItems[0].image}
               alt={galleryItems[0].alt}
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
               className="object-cover group-hover:scale-105 transition-transform duration-500"
               unoptimized
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
         </div>
         
         {galleryItems.slice(1).map((item, index) => (
           <div key={index} className="relative rounded-2xl overflow-hidden bg-slate-200 group">
             <Image
               src={item.image}
               alt={item.alt}
               fill
               sizes="(max-width: 768px) 50vw, 25vw"
               className="object-cover group-hover:scale-105 transition-transform duration-500"
               unoptimized
             />
           </div>
         ))}
      </div>
    </SectionWrapper>
  )
}

export default Gallery
