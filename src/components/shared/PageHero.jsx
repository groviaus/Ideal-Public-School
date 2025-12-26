import Breadcrumb from "./Breadcrumb"
import { cn } from "@/lib/utils"

const PageHero = ({ title, subtitle, breadcrumbItems = [], badge }) => {
  return (
    <section className="relative overflow-hidden w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="space-y-6">
          {breadcrumbItems.length > 0 && (
            <Breadcrumb items={breadcrumbItems} />
          )}
          <div className="space-y-4">
            {badge && (
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                {badge}
              </div>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
              {title}
            </h1>
            {subtitle && (
              <p className="max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  )
}

export default PageHero

