import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const SectionHeading = ({ badge, title, description, className }) => {
  return (
    <div className={cn("space-y-4 text-center mb-12", className)}>
      {badge && (
        <Badge variant="secondary" className="text-sm font-semibold">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading

