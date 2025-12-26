import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Breadcrumb = ({ items = [] }) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...items
  ]

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" aria-hidden="true" />
            )}
            {index === 0 ? (
              <Link
                href={item.href}
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Home"
              >
                <Home className="h-4 w-4" />
              </Link>
            ) : index === breadcrumbItems.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb

