"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }))
    if (errors.rating) {
      setErrors((prev) => ({ ...prev, rating: "" }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (formData.rating === 0) {
      newErrors.rating = "Please provide a rating"
    }
    
    if (!formData.feedback.trim()) {
      newErrors.feedback = "Feedback is required"
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    setTimeout(() => {
      alert("Thank you for your feedback! We appreciate your input.")
      setFormData({
        name: "",
        email: "",
        rating: 0,
        feedback: "",
      })
      setErrors({})
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Share Your Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="feedback-name" className="block text-sm font-medium text-slate-900 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="feedback-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="feedback-email" className="block text-sm font-medium text-slate-900 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="feedback-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleRatingClick(rating)}
                  className={`p-2 rounded transition-colors ${
                    formData.rating >= rating
                      ? "text-yellow-400"
                      : "text-slate-300 hover:text-yellow-300"
                  }`}
                >
                  <Star className="h-6 w-6 fill-current" />
                </button>
              ))}
            </div>
            {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating}</p>}
          </div>

          <div>
            <label htmlFor="feedback-text" className="block text-sm font-medium text-slate-900 mb-2">
              Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              id="feedback-text"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.feedback ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Share your feedback..."
            />
            {errors.feedback && <p className="mt-1 text-sm text-red-500">{errors.feedback}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default FeedbackForm

