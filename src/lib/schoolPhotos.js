/**
 * Canonical paths and descriptions for on-campus photography in /public/images.
 * Used for gallery filters, hero imagery, and section-specific visuals.
 */

/** @typedef {{ src: string, alt: string, categories: string[] }} SchoolGalleryPhoto */

/** @type {SchoolGalleryPhoto[]} */
export const schoolGalleryPhotos = [
  {
    src: "/images/Achieve Republic Day 2_7.webp",
    alt: "Achieve Republic Day 2",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Archive Republic Day_8.webp",
    alt: "Archive Republic Day 8",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Archives Republic Day_9.webp",
    alt: "Archives Republic Day 9",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Campus_10.webp",
    alt: "Campus 10",
    categories: ["infrastructure"],
  },
  {
    src: "/images/Campus__1.webp",
    alt: "Campus 1",
    categories: ["infrastructure"],
  },
  {
    src: "/images/Chemistry Lab_6.webp",
    alt: "Chemistry Lab",
    categories: ["academic", "infrastructure"],
  },
  {
    src: "/images/Independence Day_4.webp",
    alt: "Independence Day 4",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Independence day 3_3.webp",
    alt: "Independence Day 3",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Kidz_5.webp",
    alt: "Kidz",
    categories: ["academic"],
  },
  {
    src: "/images/Library_8.webp",
    alt: "Library",
    categories: ["academic", "infrastructure"],
  },
  {
    src: "/images/Physics Lab_6.webp",
    alt: "Physics Lab",
    categories: ["academic", "infrastructure"],
  },
  {
    src: "/images/Republic Day 2_1.webp",
    alt: "Republic Day 2",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Republic Day_2.webp",
    alt: "Republic Day",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Sports Day_10.webp",
    alt: "Sports Day",
    categories: ["sports", "events"],
  },
  {
    src: "/images/Throwback to old time Celebration of republic day_4.webp",
    alt: "Throwback to old time Celebration of republic day",
    categories: ["events", "cultural"],
  },
  {
    src: "/images/Transportation_5.webp",
    alt: "Transportation",
    categories: ["infrastructure"],
  },
  {
    src: "/images/computer lab_2.jpeg",
    alt: "Computer Lab",
    categories: ["academic", "infrastructure"],
  },
  {
    src: "/images/school-library_9.jpeg",
    alt: "School Library",
    categories: ["academic", "infrastructure"],
  },
  {
    src: "/images/Teachers_11.webp",
    alt: "Teachers",
    categories: ["academic"],
  },
]

export const schoolLogo = {
  src: "/images/school-logo-ideal-public-high-school.jpeg",
  alt: "Ideal Public High School, Hasanpura, Siwan — school emblem",
}

/** Hero and large marketing strips */
export const heroCampus = {
  src: "/images/Campus__1.webp",
  alt: "Ideal Public School campus and main building",
}

export const aboutHistoryBanner = {
  src: "/images/Campus_10.webp",
  alt: "Ideal Public School campus, Hasanpura, Siwan",
}

export const homeAboutImage = {
  src: "/images/relatable_school_about.png",
  alt: "Students learning in a classroom at Ideal Public School",
}

export const admissionsBanner = {
  src: "/images/Campus_10.webp",
  alt: "Student speaking at a school celebration at Ideal Public School",
}

export const contactCampusImage = {
  src: "/images/Transportation_5.webp",
  alt: "Entrance gate of Ideal Public School, Hasanpura",
}

export const principalSectionImage = {
  src: "/images/Founder Ideal public school_7.webp",
  alt: "Founder of Ideal Public School",
}

/** Home “Campus Life” mosaic — order matches layout (first item is large tile). */
export const homeGalleryMosaic = [
  {
    image: "/images/Campus__1.webp",
    alt: "Campus",
    large: true,
  },
  {
    image: "/images/Achieve Republic Day 2_7.webp",
    alt: "Republic Day",
  },
  {
    image: "/images/Chemistry Lab_6.webp",
    alt: "Chemistry Lab",
  },
  {
    image: "/images/Sports Day_10.webp",
    alt: "Sports Day",
  },
  {
    image: "/images/Transportation_5.webp",
    alt: "Transportation",
  },
  {
    image: "/images/Library_8.webp",
    alt: "Library",
  },
]

/** Facilities page slider */
export const facilityTourSliderPhotos = [
  "/images/Campus__1.webp",
  "/images/Transportation_5.webp",
  "/images/Chemistry Lab_6.webp",
  "/images/Physics Lab_6.webp",
  "/images/computer lab_2.jpeg",
  "/images/Library_8.webp",
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
