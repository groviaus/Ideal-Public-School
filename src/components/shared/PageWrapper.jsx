import { cn } from "@/lib/utils"

const PageWrapper = ({ children, className, background = "white" }) => {
  return (
    <div 
      className={cn(
        "container px-4 md:px-6 mx-auto py-8 md:py-12",
        background === "light" ? "bg-slate-50" : "bg-white",
        className
      )}
    >
      {children}
    </div>
  )
}

export default PageWrapper

