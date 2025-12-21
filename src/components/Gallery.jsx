import SectionWrapper from "@/components/SectionWrapper"

const Gallery = () => {
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
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium group-hover:scale-105 transition-transform duration-500">
               Annual Sports Day
             </div>
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
         </div>
         
         <div className="relative rounded-2xl overflow-hidden bg-slate-200 group">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium group-hover:scale-105 transition-transform duration-500">
               Science Fair
             </div>
         </div>

         <div className="relative rounded-2xl overflow-hidden bg-slate-200 group">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium group-hover:scale-105 transition-transform duration-500">
               Music Class
             </div>
         </div>

         <div className="relative rounded-2xl overflow-hidden bg-slate-200 group">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium group-hover:scale-105 transition-transform duration-500">
               Library Time
             </div>
         </div>

         <div className="relative rounded-2xl overflow-hidden bg-slate-200 group">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium group-hover:scale-105 transition-transform duration-500">
               Art Exhibition
             </div>
         </div>
      </div>
    </SectionWrapper>
  )
}

export default Gallery
