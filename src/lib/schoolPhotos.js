/**
 * Canonical paths and descriptions for on-campus photography in /public/images.
 * Used for gallery filters, hero imagery, and section-specific visuals.
 */

/** @typedef {{ src: string, alt: string, categories: string[] }} SchoolGalleryPhoto */

/** @type {SchoolGalleryPhoto[]} */
export const schoolGalleryPhotos = [
  {
    src: "/images/students-uniform-outdoors-duo.jpeg",
    alt: "Two students in school uniform outdoors at Ideal Public School",
    categories: ["cultural", "events"],
  },
  {
    src: "/images/student-graduation-speaking-microphone.jpeg",
    alt: "Student in graduation gown speaking at a school event",
    categories: ["events", "academic"],
  },
  {
    src: "/images/trophy-presentation-boy-uniform.jpeg",
    alt: "Trophy presentation to a student during a school ceremony",
    categories: ["sports", "events"],
  },
  {
    src: "/images/cultural-event-outdoor-stage.jpeg",
    alt: "Decorated outdoor stage for a cultural programme",
    categories: ["cultural", "events"],
  },
  {
    src: "/images/school-campus-building-field.jpeg",
    alt: "Ideal Public School campus building and grounds",
    categories: ["infrastructure", "events"],
  },
  {
    src: "/images/award-ceremony-group-banner.jpeg",
    alt: "Students and staff at an award ceremony with banner backdrop",
    categories: ["events", "sports"],
  },
  {
    src: "/images/classroom-students-front-view.jpeg",
    alt: "Students seated in a classroom facing the camera",
    categories: ["academic"],
  },
  {
    src: "/images/school-interior-corridor.jpeg",
    alt: "Interior corridor with classroom doors at Ideal Public School",
    categories: ["infrastructure"],
  },
  {
    src: "/images/classroom-aerial-students-working.jpeg",
    alt: "Students working at desks seen from above",
    categories: ["academic"],
  },
  {
    src: "/images/classroom-teacher-at-desk.jpeg",
    alt: "Teacher addressing students at the front of a classroom",
    categories: ["academic"],
  },
  {
    src: "/images/classroom-students-with-hijab.jpeg",
    alt: "Students in uniform during a lesson in the classroom",
    categories: ["academic", "cultural"],
  },
  {
    src: "/images/classroom-boys-hands-raised.jpeg",
    alt: "Students participating actively with hands raised",
    categories: ["academic"],
  },
  {
    src: "/images/classroom-view-toward-whiteboard.jpeg",
    alt: "Classroom view toward the whiteboard during a lesson",
    categories: ["academic"],
  },
  {
    src: "/images/student-portrait-hijab-classroom.jpeg",
    alt: "Student in uniform at a desk in the classroom",
    categories: ["academic"],
  },
  {
    src: "/images/classroom-students-windows-fans.jpeg",
    alt: "Bright classroom with students at wooden desks",
    categories: ["academic"],
  },
  {
    src: "/images/classroom-students-alternate-angle.jpeg",
    alt: "Students focused on classwork at their desks",
    categories: ["academic"],
  },
  {
    src: "/images/staff-students-certificate-whiteboard.jpeg",
    alt: "Staff and students with a certificate near the whiteboard",
    categories: ["events", "academic"],
  },
  {
    src: "/images/school-entrance-gate-sign.jpeg",
    alt: "School entrance gate with Ideal Public School signage",
    categories: ["infrastructure"],
  },
  {
    src: "/images/classroom-teacher-blackboard.jpeg",
    alt: "Teacher at the blackboard with a full class seated",
    categories: ["academic"],
  },
  {
    src: "/images/classroom-panoramic-students.jpeg",
    alt: "Wide view of students during a lesson",
    categories: ["academic"],
  },
  {
    src: "/images/classroom-active-lesson.jpeg",
    alt: "Students engaged in an active classroom lesson",
    categories: ["academic"],
  },
  {
    src: "/images/outdoor-group-traditional-clothing.jpeg",
    alt: "Group of families and staff outdoors in traditional dress",
    categories: ["cultural", "events"],
  },
]

export const schoolLogo = {
  src: "/images/school-logo-ideal-public-high-school.jpeg",
  alt: "Ideal Public High School, Hasanpura, Siwan — school emblem",
}

/** Hero and large marketing strips */
export const heroCampus = {
  src: "/images/school-campus-building-field.jpeg",
  alt: "Ideal Public School campus and main building",
}

export const aboutHistoryBanner = {
  src: "/images/school-campus-building-field.jpeg",
  alt: "Ideal Public School campus, Hasanpura, Siwan",
}

export const homeAboutImage = {
  src: "/images/classroom-students-front-view.jpeg",
  alt: "Students learning in a classroom at Ideal Public School",
}

export const admissionsBanner = {
  src: "/images/student-graduation-speaking-microphone.jpeg",
  alt: "Student speaking at a school celebration at Ideal Public School",
}

export const contactCampusImage = {
  src: "/images/school-entrance-gate-sign.jpeg",
  alt: "Entrance gate of Ideal Public School, Hasanpura",
}

export const principalSectionImage = {
  src: "/images/classroom-teacher-at-desk.jpeg",
  alt: "Teaching in progress at Ideal Public School",
}

/** Home “Campus Life” mosaic — order matches layout (first item is large tile). */
export const homeGalleryMosaic = [
  {
    image: "/images/award-ceremony-group-banner.jpeg",
    alt: "Award ceremony with students and staff at Ideal Public School",
    large: true,
  },
  {
    image: "/images/trophy-presentation-boy-uniform.jpeg",
    alt: "Student receiving a trophy at a school event",
  },
  {
    image: "/images/cultural-event-outdoor-stage.jpeg",
    alt: "Cultural celebration on the school stage",
  },
  {
    image: "/images/student-graduation-speaking-microphone.jpeg",
    alt: "Student speaking at a school programme",
  },
  {
    image: "/images/outdoor-group-traditional-clothing.jpeg",
    alt: "School community gathering outdoors",
  },
  {
    image: "/images/students-uniform-outdoors-duo.jpeg",
    alt: "Students in school uniform at a campus event",
  },
]

/** Facilities page slider */
export const facilityTourSliderPhotos = [
  "/images/school-campus-building-field.jpeg",
  "/images/school-entrance-gate-sign.jpeg",
  "/images/school-interior-corridor.jpeg",
  "/images/classroom-panoramic-students.jpeg",
  "/images/cultural-event-outdoor-stage.jpeg",
]

/**
 * @param {string} categoryId - "all" | "events" | "sports" | "cultural" | "academic" | "infrastructure"
 * @returns {SchoolGalleryPhoto[]}
 */
export function galleryPhotosByCategory(categoryId) {
  if (categoryId === "all") return schoolGalleryPhotos
  return schoolGalleryPhotos.filter((p) => p.categories.includes(categoryId))
}

/** Normalize gallery item to { src, alt } for grids and lightbox. */
export function toGalleryItem(entry) {
  if (entry && typeof entry === "object" && "src" in entry) {
    return { src: entry.src, alt: entry.alt || "Ideal Public School" }
  }
  if (typeof entry === "string") {
    return { src: entry, alt: "Ideal Public School" }
  }
  return { src: "", alt: "" }
}
