import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ContactForm from "@/components/shared/ContactForm"
import MapEmbed from "@/components/shared/MapEmbed"
import DepartmentContactCard from "@/components/shared/DepartmentContactCard"
import FeedbackForm from "@/components/shared/FeedbackForm"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Bus } from "lucide-react"

export const metadata = {
  title: "Contact Us | Ideal Public School",
  description: "Get in touch with Ideal Public School. Find our address, phone numbers, email, and contact information for various departments.",
}

export default function ContactPage() {
  const departments = [
    {
      department: "Admissions",
      phone: "+1 234 567 8901",
      email: "admissions@idealschool.edu",
      hours: "Mon-Fri: 9:00 AM - 4:00 PM",
      person: "Ms. Jennifer Smith",
    },
    {
      department: "Academics",
      phone: "+1 234 567 8902",
      email: "academics@idealschool.edu",
      hours: "Mon-Fri: 8:00 AM - 3:00 PM",
      person: "Mr. Robert Williams",
    },
    {
      department: "Transport",
      phone: "+1 234 567 8903",
      email: "transport@idealschool.edu",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      person: "Mr. David Johnson",
    },
    {
      department: "Accounts",
      phone: "+1 234 567 8904",
      email: "accounts@idealschool.edu",
      hours: "Mon-Fri: 9:00 AM - 3:00 PM",
      person: "Ms. Sarah Davis",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out to us through any of the following channels and we'll get back to you as soon as possible."
        breadcrumbItems={[{ label: "Contact", href: "/contact" }]}
      />

      <PageWrapper>
        {/* Contact Form */}
        <section className="mb-16">
          <SectionHeading
            badge="Get in Touch"
            title="Send us a Message"
            description="Fill out the form below and we'll respond to your inquiry within 24 hours."
          />
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* School Address & Map */}
        <section className="mb-16">
          <SectionHeading
            badge="Location"
            title="Visit Our Campus"
            description="We welcome visitors to our campus. Schedule a visit to see our facilities and meet our team."
          />
          <div className="mb-8">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://source.unsplash.com/1200x800/?school,entrance,building"
                alt="Ideal Public School entrance and main building"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">School Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 School Lane<br />
                        Education City<br />
                        State, Country - 123456
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        Main: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a><br />
                        Reception: <a href="tel:+1234567891" className="text-blue-600 hover:underline">+1 234 567 891</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        General: <a href="mailto:info@idealschool.edu" className="text-blue-600 hover:underline">info@idealschool.edu</a><br />
                        Principal: <a href="mailto:principal@idealschool.edu" className="text-blue-600 hover:underline">principal@idealschool.edu</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div>
              <MapEmbed />
            </div>
          </div>
        </section>

        {/* Admission Enquiry */}
        <section className="mb-16">
          <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Admission Enquiry
                </h3>
                <p className="text-muted-foreground">
                  Have questions about admissions? Our team is ready to assist you.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-900">Call Us</p>
                  <a href="tel:+12345678901" className="text-blue-600 hover:underline">
                    +1 234 567 8901
                  </a>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-900">Email Us</p>
                  <a href="mailto:admissions@idealschool.edu" className="text-green-600 hover:underline break-all">
                    admissions@idealschool.edu
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Transport Enquiry */}
        <section className="mb-16">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                  <Bus className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Transport Enquiry</h3>
                  <p className="text-muted-foreground mb-4">
                    Our transport service covers major areas in the city with GPS-enabled vehicles 
                    and trained drivers. For route information and availability, please contact:
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Phone:</strong> <a href="tel:+12345678903" className="text-blue-600 hover:underline">+1 234 567 8903</a>
                    </p>
                    <p className="text-sm">
                      <strong>Email:</strong> <a href="mailto:transport@idealschool.edu" className="text-blue-600 hover:underline">transport@idealschool.edu</a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Department-wise Contact */}
        <section className="mb-16">
          <SectionHeading
            badge="Departments"
            title="Department-wise Contact"
            description="Contact specific departments for specialized inquiries."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <DepartmentContactCard key={index} {...dept} />
            ))}
          </div>
        </section>

        {/* Social Media Links */}
        <section className="mb-16">
          <SectionHeading
            badge="Connect"
            title="Follow Us on Social Media"
            description="Stay updated with school news, events, and announcements."
          />
          <div className="flex justify-center gap-4">
            {[
              { name: "Facebook", icon: "📘", color: "bg-blue-600" },
              { name: "Twitter", icon: "🐦", color: "bg-sky-500" },
              { name: "Instagram", icon: "📷", color: "bg-pink-600" },
              { name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`${social.color} text-white h-12 w-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md`}
                aria-label={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Feedback Form */}
        <section className="mb-16">
          <SectionHeading
            badge="Feedback"
            title="Share Your Feedback"
            description="We value your feedback. Help us improve by sharing your thoughts and suggestions."
          />
          <div className="max-w-2xl mx-auto">
            <FeedbackForm />
          </div>
        </section>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

