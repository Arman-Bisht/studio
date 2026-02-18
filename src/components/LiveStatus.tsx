
"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function LiveStatus() {
  const [status, setStatus] = useState<{ open: boolean; message: string } | null>(null)

  useEffect(() => {
    const checkStatus = () => {
      // Get current time in Oklahoma City (Central Time)
      const okcDateStr = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
      const okcDate = new Date(okcDateStr)
      
      const day = okcDate.getDay() // 0 (Sun) to 6 (Sat)
      const hour = okcDate.getHours()
      
      let isOpen = false
      let openingTimeMsg = "Opens at 4:00 PM"

      // Logic based on provided image:
      // Mon-Thu: 4:00 PM - 10:00 PM (16:00 - 22:00)
      // Fri-Sun: 11:00 AM - 1:00 AM next day
      
      if (day >= 1 && day <= 4) { // Mon - Thu
        if (hour >= 16 && hour < 22) {
          isOpen = true
        }
        // Also check if it's early Monday morning (before 1am) from Sunday night
        if (day === 1 && hour < 1) {
          isOpen = true
        }
        openingTimeMsg = "Opens at 4:00 PM"
      } else if (day === 5 || day === 6 || day === 0) { // Fri, Sat, Sun
        if (hour >= 11 || hour < 1) {
          isOpen = true
        }
        openingTimeMsg = "Opens at 11:00 AM"
      }
      
      // Special case for Monday morning (0-1am) which is technically Day 1
      if (day === 1 && hour < 1) {
          isOpen = true
      }

      setStatus({
        open: isOpen,
        message: isOpen ? "Currently Open" : `Closed - ${openingTimeMsg}`
      })
    }

    checkStatus()
    const timer = setInterval(checkStatus, 60000)
    return () => clearInterval(timer)
  }, [])

  if (!status) return null

  return (
    <div className="flex items-center gap-2">
      <span className={cn(
        "relative flex h-2 w-2",
        status.open ? "text-green-500" : "text-red-500"
      )}>
        <span className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"
        )}></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
      </span>
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 text-white">
        {status.message}
      </span>
    </div>
  )
}
