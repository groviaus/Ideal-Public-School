"use client"

import { useState, useMemo } from "react"
import { 
  Calculator, 
  Atom, 
  Languages, 
  BookOpen, 
  Laptop, 
  Brain, 
  Globe, 
  Search, 
  Printer, 
  BookCheck, 
  PhoneCall, 
  Info,
  X,
  Check
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const bookData = {
  "Class I": {
    total: 1969,
    books: [
      { name: "Modern English Reader", subject: "English", price: 250 },
      { name: "Progressive English Grammar", subject: "English", price: 100 },
      { name: "नई उड़ान", subject: "Hindi", price: 250 },
      { name: "नवनीत सरल हिन्दी व्याकरण", subject: "Hindi", price: 120 },
      { name: "APM Mathematics", subject: "Mathematics", price: 250 },
      { name: "Introductory Science", subject: "Science", price: 360 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 125 },
      { name: "dot com", subject: "Computer", price: 115 },
      { name: "Oscar G.K.", subject: "GK", price: 149 },
      { name: "Basics of Social Science", subject: "Social Science", price: 250 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 125 }
    ]
  },
  "Class II": {
    total: 2103,
    books: [
      { name: "Modern English Reader", subject: "English", price: 250 },
      { name: "Progressive English Grammar", subject: "English", price: 110 },
      { name: "नई उड़ान", subject: "Hindi", price: 250 },
      { name: "नवनीत सरल हिन्दी व्याकरण", subject: "Hindi", price: 130 },
      { name: "APM Mathematics", subject: "Mathematics", price: 250 },
      { name: "Introductory Science", subject: "Science", price: 299 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 125 },
      { name: "dot com", subject: "Computer", price: 125 },
      { name: "Oscar G.K.", subject: "GK", price: 159 },
      { name: "Basics of Social Science", subject: "Social Science", price: 280 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 125 }
    ]
  },
  "Class III": {
    total: 2298,
    books: [
      { name: "Modern English Reader", subject: "English", price: 300 },
      { name: "Progressive English Grammar", subject: "English", price: 120 },
      { name: "नई उड़ान", subject: "Hindi", price: 300 },
      { name: "नवनीत सरल हिन्दी व्याकरण", subject: "Hindi", price: 140 },
      { name: "APM Mathematics", subject: "Mathematics", price: 250 },
      { name: "Introductory Science", subject: "Science", price: 319 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 125 },
      { name: "dot com", subject: "Computer", price: 150 },
      { name: "Oscar G.K.", subject: "GK", price: 169 },
      { name: "Basics of Social Science", subject: "Social Science", price: 300 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 125 }
    ]
  },
  "Class IV": {
    total: 2353,
    books: [
      { name: "Modern English Reader", subject: "English", price: 300 },
      { name: "Progressive English Grammar", subject: "English", price: 145 },
      { name: "नई उड़ान", subject: "Hindi", price: 300 },
      { name: "नवनीत सरल हिन्दी व्याकरण", subject: "Hindi", price: 150 },
      { name: "APM Mathematics", subject: "Mathematics", price: 250 },
      { name: "Introductory Science", subject: "Science", price: 329 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 125 },
      { name: "dot com", subject: "Computer", price: 150 },
      { name: "Oscar G.K.", subject: "GK", price: 179 },
      { name: "Basics of Social Science", subject: "Social Science", price: 300 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 125 }
    ]
  },
  "Class V": {
    total: 2443,
    books: [
      { name: "Modern English Reader", subject: "English", price: 300 },
      { name: "Progressive English Grammar", subject: "English", price: 160 },
      { name: "नई उड़ान", subject: "Hindi", price: 300 },
      { name: "नवनीत सरल हिन्दी व्याकरण", subject: "Hindi", price: 150 },
      { name: "APM Mathematics", subject: "Mathematics", price: 250 },
      { name: "Introductory Science", subject: "Science", price: 369 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 125 },
      { name: "dot com", subject: "Computer", price: 175 },
      { name: "Oscar G.K.", subject: "GK", price: 189 },
      { name: "Basics of Social Science", subject: "Social Science", price: 300 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 125 }
    ]
  },
  "Class VI": {
    total: 3103,
    books: [
      { name: "Modern English Reader", subject: "English", price: 350 },
      { name: "Progressive English Grammar", subject: "English", price: 285 },
      { name: "नई उड़ान", subject: "Hindi", price: 350 },
      { name: "नवनीत माध्यमिक हिन्दी व्याकरण", subject: "Hindi", price: 230 },
      { name: "R.S. Aggarwal - Mathematics", subject: "Mathematics", price: 340 },
      { name: "Introductory Science", subject: "Science", price: 469 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 150 },
      { name: "dot com", subject: "Computer", price: 195 },
      { name: "Knowledge +", subject: "GK", price: 184 },
      { name: "Basics of Social Science", subject: "Social Science", price: 400 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 150 }
    ]
  },
  "Class VII": {
    total: 3057,
    books: [
      { name: "Modern English Reader", subject: "English", price: 350 },
      { name: "Progressive English Grammar", subject: "English", price: 190 },
      { name: "नई उड़ान", subject: "Hindi", price: 350 },
      { name: "नवनीत माध्यमिक हिन्दी व्याकरण", subject: "Hindi", price: 240 },
      { name: "R.S. Aggarwal - Mathematics", subject: "Mathematics", price: 360 },
      { name: "Introductory Science", subject: "Science", price: 479 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 150 },
      { name: "dot com", subject: "Computer", price: 200 },
      { name: "Knowledge +", subject: "GK", price: 188 },
      { name: "Basics of Social Science", subject: "Social Science", price: 400 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 150 }
    ]
  },
  "Class VIII": {
    total: 3129,
    books: [
      { name: "Modern English Reader", subject: "English", price: 350 },
      { name: "Progressive English Grammar", subject: "English", price: 200 },
      { name: "नई उड़ान", subject: "Hindi", price: 350 },
      { name: "नवनीत माध्यमिक हिन्दी व्याकरण", subject: "Hindi", price: 250 },
      { name: "R.S. Aggarwal - Mathematics", subject: "Mathematics", price: 380 },
      { name: "Introductory Science", subject: "Science", price: 489 },
      { name: "संस्कृत भारती", subject: "Sanskrit", price: 150 },
      { name: "dot com", subject: "Computer", price: 210 },
      { name: "Knowledge +", subject: "GK", price: 200 },
      { name: "Basics of Social Science", subject: "Social Science", price: 400 },
      { name: "Charagh-E-Urdu", subject: "Urdu", price: 150 }
    ]
  }
}

// Subject definitions with design configurations
const subjectsList = [
  { name: "English", colorClass: "bg-blue-50 text-blue-700 border-blue-200", icon: BookOpen },
  { name: "Hindi", colorClass: "bg-rose-50 text-rose-700 border-rose-200", icon: Languages },
  { name: "Mathematics", colorClass: "bg-indigo-50 text-indigo-700 border-indigo-200", icon: Calculator },
  { name: "Science", colorClass: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: Atom },
  { name: "Social Science", colorClass: "bg-sky-50 text-sky-700 border-sky-200", icon: Globe },
  { name: "Sanskrit", colorClass: "bg-amber-50 text-amber-700 border-amber-200", icon: Languages },
  { name: "Computer", colorClass: "bg-purple-50 text-purple-700 border-purple-200", icon: Laptop },
  { name: "Urdu", colorClass: "bg-teal-50 text-teal-700 border-teal-200", icon: Languages },
  { name: "GK", colorClass: "bg-pink-50 text-pink-700 border-pink-200", icon: Brain }
]

const classes = ["Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII"]

export default function BooksListClient() {
  const [activeClass, setActiveClass] = useState("Class I")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSubject, setActiveSubject] = useState("All")

  // Filter book list based on user selections and search text
  const filteredBooks = useMemo(() => {
    const classData = bookData[activeClass]
    if (!classData) return []

    return classData.books.filter((book) => {
      const matchesSearch = book.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSubject = activeSubject === "All" || book.subject === activeSubject
      return matchesSearch && matchesSubject
    })
  }, [activeClass, searchQuery, activeSubject])

  // Total sum of the currently filtered book items
  const filteredTotal = useMemo(() => {
    return filteredBooks.reduce((sum, book) => sum + book.price, 0)
  }, [filteredBooks])

  // Total sum of the original complete set for the selected class
  const classSetTotal = bookData[activeClass]?.total || 0

  const handlePrint = () => {
    window.print()
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setActiveSubject("All")
  }

  return (
    <div className="space-y-8 my-8">
      {/* Screen-Only Section: Controls, Interactive Widgets */}
      <div className="print:hidden space-y-8">
        
        {/* Class Selection Tabs */}
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Select Class</label>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {classes.map((cls) => (
              <button
                key={cls}
                onClick={() => {
                  setActiveClass(cls)
                  // Reset filters when switching class to keep it clean
                  setActiveSubject("All")
                }}
                className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  activeClass === cls
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/10 scale-102"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <Card className="shadow-sm border-slate-100 overflow-hidden bg-gradient-to-r from-slate-50 to-white">
          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search book name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 py-6 border-slate-200 bg-white rounded-xl focus-visible:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Action Buttons: Print list */}
              <div className="flex gap-2 shrink-0">
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  className="py-6 px-5 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 rounded-xl flex items-center gap-2"
                >
                  <Printer className="h-4 w-4 text-primary" />
                  Print / Save PDF
                </Button>
              </div>
            </div>

            {/* Subject Filters */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Filter by Subject</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSubject("All")}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                    activeSubject === "All"
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  All Subjects
                </button>
                {subjectsList.map((subj) => {
                  const isActive = activeSubject === subj.name
                  return (
                    <button
                      key={subj.name}
                      onClick={() => setActiveSubject(subj.name)}
                      className={`px-4 py-2 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 ${
                        isActive
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <subj.icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                      {subj.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-sm border-slate-100 bg-white hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <span className="text-sm text-slate-400 font-medium">Class Selection</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeClass}</h3>
              </div>
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <BookCheck className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-100 bg-white hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <span className="text-sm text-slate-400 font-medium">Total Books in Set</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {bookData[activeClass]?.books.length || 0} Books
                </h3>
              </div>
              <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-indigo-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-100 bg-gradient-to-br from-blue-600 to-indigo-700 text-white hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <span className="text-sm text-blue-100 font-medium">Total Kit Fee</span>
                <h3 className="text-3xl font-extrabold mt-1">₹{classSetTotal.toLocaleString("en-IN")}</h3>
              </div>
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <span className="text-xl font-bold text-white">₹</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters Active Alert Info */}
        {(searchQuery || activeSubject !== "All") && (
          <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-slate-400 shrink-0" />
              <span>
                Showing <strong>{filteredBooks.length}</strong> of <strong>{bookData[activeClass]?.books.length}</strong> books. 
                {activeSubject !== "All" && <span> Subject: <strong>{activeSubject}</strong>.</span>}
                {searchQuery && <span> Search: "<strong>{searchQuery}</strong>".</span>}
                Filtered Sub-Total: <strong>₹{filteredTotal.toLocaleString("en-IN")}</strong>
              </span>
            </div>
            <button
              onClick={handleClearFilters}
              className="text-xs font-semibold text-primary hover:underline hover:text-blue-700 shrink-0"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Books List Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book, index) => {
              // Find matching subject styling
              const subjectInfo = subjectsList.find((s) => s.name === book.subject) || {
                colorClass: "bg-slate-50 text-slate-700 border-slate-200",
                icon: BookOpen
              }
              const SubjectIcon = subjectInfo.icon

              return (
                <Card 
                  key={index}
                  className="group relative border border-slate-100 bg-white hover:-translate-y-1 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    {/* Header: Icon and Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${subjectInfo.colorClass} bg-opacity-70 group-hover:scale-105 transition-transform duration-200`}>
                        <SubjectIcon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline" className={`border ${subjectInfo.colorClass}`}>
                        {book.subject}
                      </Badge>
                    </div>

                    {/* Book Name */}
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2 min-h-12">
                        {book.name}
                      </h4>
                      <p className="text-xs text-slate-400">Prescribed Textbook • Session 2026-27</p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-50 pt-3 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">Price</span>
                      <span className="text-lg font-extrabold text-slate-900">₹{book.price}</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-slate-50 border border-dashed border-slate-200 rounded-2xl space-y-4">
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-800">No books match your filters</h4>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find any textbooks matching "{searchQuery}" in {activeClass} under the selected filters.
              </p>
            </div>
            <Button onClick={handleClearFilters} variant="outline" className="rounded-xl border-slate-200">
              Reset Filters
            </Button>
          </div>
        )}

        {/* Guidelines and Purchasing Information */}
        <section className="mt-12 bg-blue-50/50 border border-blue-100/60 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Purchase & Syllabus Guidelines</h3>
              <p className="text-sm text-slate-500">Important instructions for parents and guardians</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <p><strong>Official Syllabus Set:</strong> The books listed constitute the complete prescribed curriculum kit approved by the school board for the 2026-27 session.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <p><strong>Verify Editions:</strong> Please ensure you purchase the latest print editions of each textbook. Verify the publisher and book cover styling before purchasing.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <p><strong>Local Bookstore Availabilities:</strong> Syllabus sets are ready at the authorized local book stores in Hasanpura. Alternatively, you can purchase from the school counter.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <p><strong>Opting for Individual Books:</strong> Parents are free to buy the books separately if they already have certain textbooks from senior siblings, provided they match the current edition.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <PhoneCall className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Contact School Office</p>
                <p className="text-sm font-bold text-slate-700">+91 9934991694 (Admin Desk)</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic">Office Hours: 08:00 AM to 02:00 PM (Monday to Saturday)</p>
          </div>
        </section>

      </div>

      {/* Print-Only Layout: Rendered only when window.print() is executed */}
      <div className="hidden print:block font-serif text-slate-900 bg-white p-4 space-y-6">
        {/* Print Header */}
        <div className="border-b-4 border-double border-slate-900 pb-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight uppercase">Ideal Public School</h1>
          <p className="text-sm mt-1">Affiliated to CBSE • Nursery to Class VIII</p>
          <p className="text-xs text-slate-500">Hasanpura, SH-87, District Siwan, Bihar - Phone: +91 9934991694</p>
          <p className="text-xs text-slate-400">Email: idealpublichighschool2005@gmail.com</p>
        </div>

        {/* Document Info */}
        <div className="flex justify-between items-center bg-slate-50 border border-slate-200 px-4 py-2 rounded">
          <div>
            <h2 className="text-lg font-bold">Prescribed Textbooks & Prices List</h2>
            <p className="text-xs text-slate-600">Academic Session: 2026-27</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold block bg-slate-200 px-3 py-1 rounded">{activeClass}</span>
            <span className="text-xs text-slate-500">Printed on: {new Date().toLocaleDateString("en-IN")}</span>
          </div>
        </div>

        {/* Books Table */}
        <table className="w-full text-left border-collapse border border-slate-300">
          <thead>
            <tr className="bg-slate-100 text-xs font-bold uppercase border-b border-slate-300">
              <th className="px-4 py-3 border-r border-slate-300 w-12 text-center">S.No.</th>
              <th className="px-4 py-3 border-r border-slate-300">Book Title</th>
              <th className="px-4 py-3 border-r border-slate-300">Subject</th>
              <th className="px-4 py-3 text-right">Price (₹)</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bookData[activeClass]?.books.map((book, idx) => (
              <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50/50">
                <td className="px-4 py-2.5 border-r border-slate-200 text-center">{idx + 1}</td>
                <td className="px-4 py-2.5 border-r border-slate-200 font-medium">{book.name}</td>
                <td className="px-4 py-2.5 border-r border-slate-200">{book.subject}</td>
                <td className="px-4 py-2.5 text-right font-semibold">₹{book.price}</td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="bg-slate-100 border-t-2 border-double border-slate-900 font-bold">
              <td colSpan="3" className="px-4 py-3 border-r border-slate-300 text-right uppercase tracking-wider">
                Total Syllabus Kit Fee:
              </td>
              <td className="px-4 py-3 text-right text-base text-slate-900">
                ₹{classSetTotal.toLocaleString("en-IN")}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Guidelines Disclaimer */}
        <div className="border border-slate-200 p-4 rounded text-xs space-y-2 bg-slate-50/50">
          <p className="font-bold">Please Note:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Parents are requested to verify textbook names, publishers, and prices before purchasing.</li>
            <li>Syllabus kit prices are tentative and strictly match the list issued by the school administration.</li>
            <li>Ensure the latest reprint or edition is purchased for the session 2026-27.</li>
          </ul>
        </div>

        {/* Signatures */}
        <div className="pt-12 flex justify-between">
          <div className="text-center w-40 border-t border-slate-400 pt-1 text-xs">
            Checked By
          </div>
          <div className="text-center w-40 border-t border-slate-400 pt-1 text-xs">
            Principal Signatory
          </div>
        </div>
      </div>

    </div>
  )
}
