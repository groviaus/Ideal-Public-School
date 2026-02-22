"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FacultyCard from "./FacultyCard"

const DepartmentTabs = ({ departments = [] }) => {
  return (
    <Tabs defaultValue={departments[0]?.name || ""} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
        {departments.map((dept) => (
          <TabsTrigger key={dept.name} value={dept.name}>
            {dept.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {departments.map((dept) => (
        <TabsContent key={dept.name} value={dept.name}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(dept.members || dept.faculty || []).map((member, index) => (
              <FacultyCard key={index} {...member} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default DepartmentTabs

