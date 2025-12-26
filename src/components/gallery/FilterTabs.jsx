"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const FilterTabs = ({ categories = [], activeCategory, onCategoryChange }) => {
  return (
    <Tabs value={activeCategory} onValueChange={onCategoryChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default FilterTabs

