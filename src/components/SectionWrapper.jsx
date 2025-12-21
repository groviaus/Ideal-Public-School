import { cn } from "@/lib/utils"

const SectionWrapper = ({ children, className, id, background = "white" }) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24", 
        background === "light" ? "bg-blue-50/50" : "bg-white",
        className
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
