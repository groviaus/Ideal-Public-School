"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const CategoryFilter = ({ categories = [], activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === category.id
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter

