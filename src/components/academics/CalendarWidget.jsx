"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarIcon, CalendarDays, Award } from "lucide-react"

const CalendarWidget = ({ academicMilestones = [], officialHolidays = [] }) => {
  const [activeTab, setActiveTab] = useState("milestones")
  
  const currentEvents = activeTab === "milestones" ? academicMilestones : officialHolidays

  return (
    <Card className="shadow-xl border border-slate-100/80 overflow-hidden bg-white/70 backdrop-blur-md">
      <CardHeader className="bg-gradient-to-r from-blue-50/50 via-slate-50/50 to-green-50/50 border-b pb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-100/60 text-blue-600">
              <CalendarIcon className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-lg font-black text-slate-800 tracking-tight">School Calendar & Holidays</CardTitle>
              <p className="text-xs text-muted-foreground">Session 2026-2027</p>
            </div>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex p-1 bg-slate-100 rounded-xl self-start sm:self-auto border border-slate-200/40">
            <button
              onClick={() => setActiveTab("milestones")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeTab === "milestones"
                  ? "bg-white text-blue-600 shadow-md scale-102"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
              }`}
            >
              <CalendarDays className="h-3.5 w-3.5" />
              Academic Milestones
            </button>
            <button
              onClick={() => setActiveTab("holidays")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeTab === "holidays"
                  ? "bg-white text-green-600 shadow-md scale-102"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              School Holidays
            </button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="space-y-4">
          {currentEvents.length > 0 ? (
            currentEvents.map((event, index) => (
              <div 
                key={index} 
                className="group flex gap-4 pb-4 border-b last:border-0 last:pb-0 border-slate-100 hover:bg-slate-50/40 p-2 rounded-xl transition-colors duration-200"
              >
                <div className="flex-shrink-0 text-center w-14 self-start">
                  <div className={`text-2xl font-black transition-colors duration-300 ${
                    activeTab === "milestones" ? "text-blue-600 group-hover:text-blue-700" : "text-green-600 group-hover:text-green-700"
                  }`}>
                    {event.date}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider mt-0.5">
                    {event.month} {event.year ? `'${event.year.slice(-2)}` : ""}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base tracking-tight transition-colors duration-200 group-hover:text-slate-900">
                      {event.title}
                    </h4>
                    {event.badge && (
                      <Badge 
                        variant={
                          event.badge.toLowerCase().includes("holiday") ? "destructive" :
                          event.badge.toLowerCase().includes("exam") ? "outline" :
                          event.badge.toLowerCase().includes("vacation") ? "default" : "secondary"
                        } 
                        className={`text-[9px] uppercase font-black tracking-widest px-2 py-0.5 shrink-0 transition-all duration-300 ${
                          event.badge.toLowerCase().includes("holiday") 
                            ? "bg-rose-500 hover:bg-rose-600 text-white border-0 shadow-sm" 
                            : event.badge.toLowerCase().includes("vacation")
                            ? "bg-amber-500 hover:bg-amber-600 text-white border-0 shadow-sm"
                            : ""
                        }`}
                      >
                        {event.badge}
                      </Badge>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-slate-400 text-sm">
              No events found.
            </div>
          )}
        </div>
        
        {/* Note */}
        <div className="mt-6 p-4 bg-slate-50/60 rounded-xl border border-slate-100">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Important Note:</strong> Official session schedules and public holidays are aligned with CBSE guidelines and regional government declarations. Islamic holidays are tentative, subject to local moon sightings. Please consult official circulars for verified dates.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CalendarWidget
