import Image from "next/image"
import SectionWrapper from "@/components/SectionWrapper"

const Gallery = () => {
  const galleryItems = [
    {
      image: "https://source.unsplash.com/800x600/?sports,event,competition",
      alt: "Annual Sports Day at Ideal Public School",
      large: true
    },
    {
      image: "https://source.unsplash.com/800x600/?science,exhibition,fair",
      alt: "Science Exhibition showcasing student projects"
    },
    {
      image: "https://source.unsplash.com/800x600/?cultural,performance,dance",
      alt: "Cultural performance and dance events"
    },
    {
      image: "https://source.unsplash.com/800x600/?art,painting,exhibition",
      alt: "Art Exhibition with student artwork"
    },
    {
      image: "https://source.unsplash.com/800x600/?music,concert,performance",
      alt: "Music concert and student performances"
    },
    {
      image: "https://source.unsplash.com/800x600/?field,trip,education",
      alt: "Educational field trips and outdoor learning"
    }
  ]

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
