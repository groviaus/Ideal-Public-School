"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { schoolLogo } from "@/lib/schoolPhotos"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAdmissionForm } from "@/context/AdmissionFormContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { openAdmissionForm } = useAdmissionForm()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities", href: "/facilities" },
    { name: "Faculty", href: "/faculty" },
    { name: "Student Life", href: "/student-life" },
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <span
              className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white"
              aria-hidden
            >
              <Image
                src={schoolLogo.src}
                alt=""
                fill
                className="object-contain p-0.5"
                sizes="36px"
                priority
                unoptimized
              />
            </span>
            <span className="text-xl font-bold tracking-tight text-foreground truncate">
              Ideal Public School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <Button size="sm" className="ml-4" onClick={openAdmissionForm}>
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-muted-foreground transition hover:text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground font-semibold"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="mt-4 px-3">
              <Button className="w-full" onClick={() => { setIsOpen(false); openAdmissionForm(); }}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
