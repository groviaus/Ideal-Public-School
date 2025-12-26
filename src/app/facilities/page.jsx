import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import FacilityDetailCard from "@/components/facilities/FacilityDetailCard"
import ImageGallerySlider from "@/components/facilities/ImageGallerySlider"
import VirtualTourEmbed from "@/components/facilities/VirtualTourEmbed"
import SafetyChecklist from "@/components/facilities/SafetyChecklist"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Facilities | Ideal Public School",
  description: "Explore our state-of-the-art facilities including smart classrooms, science labs, sports facilities, library, and more at Ideal Public School.",
}

export default function FacilitiesPage() {
  const facilities = [
    {
      name: "Smart Classrooms",
      description: "Fully equipped smart classrooms with interactive whiteboards, projectors, and digital learning tools to enhance the teaching and learning experience.",
      image: "https://source.unsplash.com/800x600/?classroom,smart,technology",
      features: [
        "Interactive whiteboards",
        "Digital projectors",
        "Audio-visual systems",
        "Climate-controlled environment",
        "Ergonomic furniture",
      ],
    },
    {
      name: "Library & Reading Room",
      description: "A well-stocked library with over 15,000 books, digital resources, and a quiet reading room for students to explore and learn.",
      image: "https://source.unsplash.com/800x500/?library,books,reading",
      features: [
        "15,000+ books",
        "Digital library access",
        "Reading room",
        "Research facilities",
        "Periodicals and journals",
      ],
    },
    {
      name: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, Biology, and Computer Science laboratories with modern equipment and safety measures.",
      image: "https://source.unsplash.com/800x500/?science,laboratory,experiment",
      features: [
        "Physics Lab",
        "Chemistry Lab",
        "Biology Lab",
        "Computer Lab (4 labs)",
        "Safety equipment",
      ],
    },
    {
      name: "Sports Facilities",
      description: "Comprehensive indoor and outdoor sports facilities including basketball court, football field, cricket ground, and more.",
      image: "https://source.unsplash.com/800x500/?sports,playground,athletics",
      features: [
        "Basketball court",
        "Football field",
        "Cricket ground",
        "Indoor games room",
        "Swimming pool",
      ],
    },
    {
      name: "Auditorium & Assembly Hall",
      description: "A spacious auditorium with seating capacity of 500, equipped with modern sound and lighting systems for events and assemblies.",
      image: "https://source.unsplash.com/800x600/?auditorium,hall,stage",
      features: [
        "500-seat capacity",
        "Sound system",
        "Stage lighting",
        "Projection facilities",
        "Air-conditioned",
      ],
    },
    {
      name: "Cafeteria/Canteen",
      description: "A clean and hygienic cafeteria serving nutritious meals and snacks, following strict food safety standards.",
      image: "https://source.unsplash.com/800x600/?cafeteria,canteen,dining",
      features: [
        "Hygienic kitchen",
        "Nutritious meals",
        "Snack counter",
        "Seating area",
        "Food safety certified",
      ],
    },
    {
      name: "Medical Room",
      description: "A well-equipped medical room with a qualified nurse and first-aid facilities to handle medical emergencies.",
      image: "https://source.unsplash.com/800x500/?medical,clinic,healthcare",
      features: [
        "Qualified nurse",
        "First-aid equipment",
        "Regular health checkups",
        "Emergency response",
        "Medical records",
      ],
    },
    {
      name: "Transport with GPS",
      description: "Safe and reliable transport service with GPS-enabled vehicles, trained drivers, and route optimization.",
      image: "https://source.unsplash.com/800x500/?school,bus,yellow",
      features: [
        "GPS tracking",
        "Trained drivers",
        "Route optimization",
        "Safety measures",
        "Multiple routes",
      ],
    },
    {
      name: "Security & CCTV",
      description: "24/7 security with CCTV surveillance covering all areas of the campus, ensuring a safe learning environment.",
      image: "https://source.unsplash.com/800x600/?security,camera,surveillance",
      features: [
        "100+ CCTV cameras",
        "24/7 security staff",
        "Access control",
        "Visitor management",
        "Emergency response",
      ],
    },
  ]

  const safetyMeasures = [
    {
      icon: "cctv",
      title: "CCTV Surveillance",
      description: "100+ cameras covering all areas of the campus",
    },
    {
      icon: "security",
      title: "24/7 Security Staff",
      description: "Trained security personnel on duty round the clock",
    },
    {
      icon: "staff",
      title: "Background Verified Staff",
      description: "All staff members undergo thorough background checks",
    },
    {
      icon: "emergency",
      title: "Emergency Response System",
      description: "Quick response protocols for medical and safety emergencies",
    },
    {
      icon: "cctv",
      title: "Access Control",
      description: "Controlled entry and exit points with visitor management",
    },
    {
      icon: "security",
      title: "Fire Safety",
      description: "Fire extinguishers, alarms, and regular safety drills",
    },
    {
      icon: "staff",
      title: "First Aid Facilities",
      description: "Well-equipped medical room with qualified nurse",
    },
    {
      icon: "emergency",
      title: "Safe Transport",
      description: "GPS-enabled vehicles with trained drivers",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Facilities"
        subtitle="State-of-the-art infrastructure designed to support comprehensive learning, development, and growth of every student."
        breadcrumbItems={[{ label: "Facilities", href: "/facilities" }]}
      />

      <PageWrapper>
        {/* Infrastructure Overview */}
        <section className="mb-16">
          <SectionHeading
            badge="Infrastructure"
            title="Infrastructure Overview"
            description="Our modern campus is equipped with world-class facilities to provide the best learning environment for our students."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Smart Classrooms", count: "50+" },
              { name: "Science Labs", count: "6" },
              { name: "Computer Labs", count: "4" },
              { name: "Library Books", count: "15,000+" },
              { name: "Sports Facilities", count: "10+" },
              { name: "CCTV Cameras", count: "100+" },
            ].map((stat, index) => (
              <Card key={index} className="text-center shadow-md">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.count}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Facility Cards */}
        <section className="mb-16">
          <SectionHeading
            badge="Facilities"
            title="Our Facilities"
            description="Explore our comprehensive range of facilities designed to support academic excellence and holistic development."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <FacilityDetailCard key={index} {...facility} />
            ))}
          </div>
        </section>

        {/* Image Gallery Slider */}
        <section className="mb-16">
          <SectionHeading
            badge="Gallery"
            title="Facility Images"
            description="Take a visual tour of our facilities and infrastructure."
          />
          <div className="max-w-4xl mx-auto">
            <ImageGallerySlider
              images={[
                "https://source.unsplash.com/800x600/?school,classroom,learning",
                "https://source.unsplash.com/800x600/?science,laboratory,experiment",
                "https://source.unsplash.com/800x600/?library,books,reading",
                "https://source.unsplash.com/800x600/?sports,playground,athletics",
                "https://source.unsplash.com/800x600/?auditorium,hall,stage",
              ]}
            />
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="mb-16">
          <SectionHeading
            badge="Virtual Tour"
            title="360° Virtual Tour"
            description="Experience our campus from anywhere in the world with our interactive virtual tour."
          />
          <div className="max-w-4xl mx-auto">
            <VirtualTourEmbed />
          </div>
        </section>

        {/* Safety & Security */}
        <section className="mb-16">
          <SectionHeading
            badge="Safety"
            title="Safety & Security Measures"
            description="The safety and security of our students is our top priority. We have comprehensive measures in place to ensure a safe learning environment."
          />
          <SafetyChecklist safetyMeasures={safetyMeasures} />
        </section>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

