import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/shared/BackToTop"
import PageHero from "@/components/shared/PageHero"
import PageWrapper from "@/components/shared/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ProcessSteps from "@/components/admissions/ProcessSteps"
import AgeTable from "@/components/admissions/AgeTable"
import DocumentChecklist from "@/components/admissions/DocumentChecklist"
import FeeStructureTable from "@/components/admissions/FeeStructureTable"
import FAQAccordion from "@/components/admissions/FAQAccordion"
import Timeline from "@/components/about/Timeline"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, FileText, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Admissions | Ideal Public School",
  description: "Apply for admission to Ideal Public School. Learn about our admission process, age criteria, fee structure, and required documents.",
}

export default function AdmissionsPage() {
  const processSteps = [
    {
      title: "Inquiry & Registration",
      description: "Submit online inquiry form or visit the school. Complete registration with basic details.",
      duration: "1-2 days",
    },
    {
      title: "Document Submission",
      description: "Submit required documents for verification. Schedule interaction session.",
      duration: "3-5 days",
    },
    {
      title: "Interaction & Assessment",
      description: "Student and parent interaction with school authorities. Basic assessment for grade level.",
      duration: "1 day",
    },
    {
      title: "Admission Confirmation",
      description: "Receive admission offer. Complete fee payment and secure your seat.",
      duration: "2-3 days",
    },
  ]

  const ageCriteria = [
    { grade: "Nursery", minAge: "3 years", maxAge: "4 years", asOnDate: "2024" },
    { grade: "LKG", minAge: "4 years", maxAge: "5 years", asOnDate: "2024" },
    { grade: "UKG", minAge: "5 years", maxAge: "6 years", asOnDate: "2024" },
    { grade: "Grade 1", minAge: "6 years", maxAge: "7 years", asOnDate: "2024" },
    { grade: "Grade 2", minAge: "7 years", maxAge: "8 years", asOnDate: "2024" },
    { grade: "Grade 3", minAge: "8 years", maxAge: "9 years", asOnDate: "2024" },
    { grade: "Grade 4", minAge: "9 years", maxAge: "10 years", asOnDate: "2024" },
    { grade: "Grade 5", minAge: "10 years", maxAge: "11 years", asOnDate: "2024" },
  ]

  const documents = [
    { name: "Birth Certificate", description: "Original or certified copy" },
    { name: "Previous School Report Card", description: "If applicable (for Grade 2 onwards)" },
    { name: "Transfer Certificate", description: "Original TC from previous school (if applicable)" },
    { name: "Aadhaar Card", description: "Copy of student's Aadhaar card" },
    { name: "Parent's ID Proof", description: "Aadhaar card or passport copy" },
    { name: "Address Proof", description: "Utility bill or rental agreement" },
    { name: "Passport Size Photos", description: "4 recent photographs of student" },
    { name: "Medical Certificate", description: "If applicable" },
  ]

  const feeStructure = [
    {
      grade: "Nursery - UKG",
      admissionFee: 15000,
      annualFee: 12000,
      monthlyTuition: 3500,
      totalAnnual: 54000,
    },
    {
      grade: "Grade 1 - 5",
      admissionFee: 18000,
      annualFee: 15000,
      monthlyTuition: 4000,
      totalAnnual: 63000,
    },
    {
      grade: "Grade 6 - 8",
      admissionFee: 20000,
      annualFee: 18000,
      monthlyTuition: 4500,
      totalAnnual: 72000,
    },
    {
      grade: "Grade 9 - 10",
      admissionFee: 22000,
      annualFee: 20000,
      monthlyTuition: 5000,
      totalAnnual: 80000,
    },
    {
      grade: "Grade 11 - 12",
      admissionFee: 25000,
      annualFee: 22000,
      monthlyTuition: 5500,
      totalAnnual: 88000,
    },
  ]

  const importantDates = [
    {
      year: "2024",
      title: "Admission Process Begins",
      description: "Online registration opens for academic year 2024-25",
    },
    {
      year: "2024",
      title: "Last Date for Registration",
      description: "Final date to submit admission applications",
    },
    {
      year: "2024",
      title: "Interaction Sessions",
      description: "Scheduled interaction and assessment dates",
    },
    {
      year: "2024",
      title: "Admission Confirmation",
      description: "Last date to confirm admission and pay fees",
    },
  ]

  const faqs = [
    {
      question: "What is the admission process?",
      answer: "The admission process involves four simple steps: Inquiry & Registration, Document Submission, Interaction & Assessment, and Admission Confirmation. Each step is designed to ensure a smooth experience for parents and students.",
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include Birth Certificate, Previous School Report Card (if applicable), Transfer Certificate, Aadhaar Card, Parent's ID Proof, Address Proof, Passport Size Photos, and Medical Certificate (if applicable). All documents must be self-attested copies.",
    },
    {
      question: "Is there an entrance exam?",
      answer: "For lower grades (Nursery to Grade 2), we conduct a simple interaction session. For higher grades, a basic assessment is conducted to ensure the student is placed in the appropriate grade level.",
    },
    {
      question: "What is the fee structure?",
      answer: "Fee structure varies by grade level and includes Admission Fee, Annual Fee, and Monthly Tuition. Additional fees may apply for transport, uniform, and books. Please refer to the fee structure table or contact the admission office for detailed information.",
    },
    {
      question: "Do you provide transport facilities?",
      answer: "Yes, we provide safe and reliable transport facilities with GPS tracking. Transport routes cover major areas in the city. Transport fees are additional and vary based on distance.",
    },
    {
      question: "Can I visit the school before applying?",
      answer: "Absolutely! We encourage parents to visit our campus. You can schedule a school tour by contacting our admission office. We also offer virtual tours for your convenience.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain an optimal student-teacher ratio of approximately 25:1 to ensure personalized attention and quality education for every student.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, we offer merit-based scholarships and financial assistance programs for deserving students. Please contact the admission office for more details about eligibility and application process.",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <PageHero
        title="Admissions"
        subtitle="Begin your journey with Ideal Public School. Admissions are now open for the academic year 2024-25."
        breadcrumbItems={[{ label: "Admissions", href: "/admissions" }]}
        badge="Admissions Open for 2024-25"
      />

      <PageWrapper>
        {/* Admission Counseling Image */}
        <section className="mb-16">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://source.unsplash.com/1200x800/?family,school,admission"
              alt="Parents and children during admission counseling at Ideal Public School"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </section>

        {/* Admission Process Steps */}
        <section className="mb-16">
          <SectionHeading
            badge="Process"
            title="Admission Process"
            description="A simple, transparent four-step process to secure admission at Ideal Public School."
          />
          <ProcessSteps steps={processSteps} />
        </section>

        {/* Age Criteria */}
        <section className="mb-16">
          <SectionHeading
            badge="Eligibility"
            title="Age Criteria"
            description="Age requirements for admission to different grade levels."
          />
          <AgeTable ageCriteria={ageCriteria} />
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <SectionHeading
            badge="Documents"
            title="Required Documents"
            description="Ensure you have all the necessary documents ready for a smooth admission process."
          />
          <DocumentChecklist documents={documents} />
        </section>

        {/* Fee Structure */}
        <section className="mb-16">
          <SectionHeading
            badge="Fees"
            title="Fee Structure"
            description="Transparent and competitive fee structure for all grade levels."
          />
          <FeeStructureTable feeStructure={feeStructure} />
        </section>

        {/* Registration Form CTA */}
        <section className="mb-16">
          <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Ready to Apply?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Fill out our online admission form to begin the process. Our admission team will 
                contact you within 24 hours to guide you through the next steps.
              </p>
              <Button size="lg" className="gap-2">
                Apply Online <ArrowRight className="h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Important Dates */}
        <section className="mb-16">
          <SectionHeading
            badge="Timeline"
            title="Important Dates"
            description="Key dates to remember for the admission process."
          />
          <Timeline events={importantDates} />
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our admission process."
          />
          <Card className="shadow-md">
            <CardContent className="p-6">
              <FAQAccordion faqs={faqs} />
            </CardContent>
          </Card>
        </section>

        {/* Transfer Certificate Requirements */}
        <section className="mb-16">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Transfer Certificate Requirements</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Students seeking admission from other schools must submit an original Transfer Certificate (TC) 
                  from their previous school. The TC should be:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Issued by the previous school's principal or authorized authority</li>
                  <li>Duly signed and stamped</li>
                  <li>Containing all necessary details including date of admission, date of leaving, and reason for leaving</li>
                  <li>Submitted within 30 days of admission confirmation</li>
                </ul>
                <p className="pt-2">
                  For students from schools outside the state or country, additional documentation may be required. 
                  Please contact the admission office for specific requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Admission Office */}
        <section className="mb-16">
          <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Contact Admission Office
                </h3>
                <p className="text-muted-foreground">
                  Have questions? Our admission team is here to help.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-slate-900">+1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-slate-900">admissions@idealschool.edu</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button variant="outline" size="lg" className="gap-2">
                  Schedule a Visit <Calendar className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </PageWrapper>

      <Footer />
      <BackToTop />
    </main>
  )
}

