export const CLASSES = [
  "Nursery", "LKG", "UKG",
  "Class 1", "Class 2", "Class 3", "Class 4",
  "Class 5", "Class 6", "Class 7", "Class 8",
]

export const BOARDS = ["CBSE", "ICSE", "State Board", "IB", "IGCSE", "Other"]

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Lakshadweep", "Puducherry", "Ladakh", "Jammu and Kashmir"
]

const today = new Date().toISOString().split("T")[0]

// Reusable regex patterns
const nameRegex = /^[a-zA-Z\s]+$/
const phoneRegex = /^[6-9]\d{9}$/
const aadhaarRegex = /^\d{12}$/
const pinCodeRegex = /^\d{6}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Disposable email domains to block
const DISPOSABLE_DOMAINS = [
  "mailinator.com", "guerrillamail.com", "10minutemail.com", "tempmail.com", "yopmail.com"
]

export const validateField = (name, value, allData = {}) => {
  const v = typeof value === 'string' ? value.trim() : value

  switch (name) {
    // ── Student Info ────────────────────────────────────────────────────────
    case "studentName":
    case "fatherName":
    case "motherName": {
      const label = name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      if (!v) return `${label} is required.`
      if (v.length < 2) return `${label} must be at least 2 characters.`
      if (v.length > 50) return `${label} must not exceed 50 characters.`
      if (!nameRegex.test(v)) return `${label} allows only alphabets and spaces.`
      return null
    }

    case "gender":
      if (!v) return "Gender is required."
      if (!["Male", "Female", "Other"].includes(v)) return "Invalid gender selection."
      return null

    case "dateOfBirth": {
      if (!v) return "Date of birth is required."
      const dobDate = new Date(v)
      if (dobDate > new Date()) return "Date of birth cannot be in the future."
      
      // Basic age validation based on class (this can be fine-tuned)
      const ageInMs = new Date() - dobDate.getTime()
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25)
      
      const classApplying = allData.classApplying
      if (classApplying) {
        if (classApplying === "Nursery" && (ageInYears < 2 || ageInYears > 5)) return "Age should be between 2 and 5 for Nursery."
        if (classApplying === "LKG" && (ageInYears < 3 || ageInYears > 6)) return "Age should be between 3 and 6 for LKG."
        if (classApplying === "Class 1" && (ageInYears < 5 || ageInYears > 8)) return "Age should be between 5 and 8 for Class 1."
        // Could add more class-specific checks if strictly defined
      }
      return null
    }

    case "classApplying":
      if (!v) return "Class is required."
      if (!CLASSES.includes(v)) return "Invalid class selected."
      return null

    case "aadhaar":
      if (v && !aadhaarRegex.test(v)) return "Aadhaar must be exactly 12 digits."
      return null

    // ── Parent Details ──────────────────────────────────────────────────────
    case "mobile":
      if (!v) return "Mobile number is required."
      if (!phoneRegex.test(v)) return "Enter a valid 10-digit Indian mobile number."
      return null

    case "alternateMobile":
      if (v) {
        if (!phoneRegex.test(v)) return "Enter a valid 10-digit Indian mobile number."
        if (v === allData.mobile) return "Alternate mobile cannot be the same as primary."
      }
      return null

    case "email": {
      if (!v) return "Email is required."
      if (!emailRegex.test(v)) return "Invalid email address."
      const domain = v.split('@')[1]
      if (DISPOSABLE_DOMAINS.includes(domain)) return "Disposable emails are not allowed."
      return null
    }

    // ── Address Details ─────────────────────────────────────────────────────
    case "address":
      if (!v) return "Complete address is required."
      if (v.length < 10) return "Address must be at least 10 characters."
      if (v.length > 300) return "Address must not exceed 300 characters."
      return null

    case "district":
      if (!v) return "District is required."
      if (!nameRegex.test(v)) return "District allows only alphabets and spaces."
      return null

    case "state":
      if (!v) return "State is required."
      if (!INDIAN_STATES.includes(v)) return "Invalid state selected."
      return null

    case "pinCode":
      if (!v) return "PIN Code is required."
      if (!pinCodeRegex.test(v)) return "PIN Code must be exactly 6 digits."
      return null

    // ── Academic Details ────────────────────────────────────────────────────
    case "previousSchool":
      if (!v) return "Previous school name is required."
      if (v.length < 3) return "Previous school name must be at least 3 characters."
      if (v.length > 100) return "Previous school name must not exceed 100 characters."
      return null

    case "previousClass":
      if (!v) return "Previous class is required."
      return null

    case "board":
      if (!v) return "Board is required."
      if (!BOARDS.includes(v)) return "Invalid board selected."
      return null

    // ── Document Uploads (Frontend Specific checks) ─────────────────────────
    case "docPhoto":
      if (!v) return "Student photo is required."
      return null
      
    case "docBirthCert":
      if (!v) return "Birth certificate is required."
      return null
      
    case "docReportCard":
      if (!v) return "Report card is required."
      return null

    default:
      return null
  }
}

/** Utility to validate file on frontend before upload */
export const validateFile = (file, type) => {
  if (!file) return null
  const sizeMB = file.size / (1024 * 1024)
  const extension = file.name.split('.').pop().toLowerCase()
  
  if (type === 'photo') {
    if (!['jpg', 'jpeg', 'png'].includes(extension)) return "Only JPG, JPEG, PNG allowed."
    if (sizeMB > 2) return "File size must not exceed 2MB."
  } else {
    // doc types
    if (!['jpg', 'jpeg', 'png', 'pdf'].includes(extension)) return "Only PDF, JPG, JPEG, PNG allowed."
    if (sizeMB > 5) return "File size must not exceed 5MB."
  }
  return null
}
