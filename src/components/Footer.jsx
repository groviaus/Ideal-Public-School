import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-50 py-12 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Ideal Public School</h3>
            <p className="text-slate-400 text-sm">
              Empowering students to become future leaders through excellence in education and character building.
            </p>
            <div className="flex space-x-4">
              <div className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="rounded-full bg-slate-800 p-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#admissions" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#academics" className="hover:text-white transition-colors">Academics</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>123 School Lane, Education City,<br/> State, Country - 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>info@idealschool.edu</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
             <h3 className="text-lg font-bold">Location</h3>
             <div className="aspect-video w-full rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-500 border border-slate-700">
                Google Map Placeholder
             </div>
          </div>
        </div>
        <Separator className="my-8 bg-slate-800" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Ideal Public School. All rights reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
