
"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function LiveStatus() {
  const [status, setStatus] = useState<{ open: boolean; message: string } | null>(null)

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const hour = now.getHours()
      const isOpen = hour >= 11 && hour < 22 // 11 AM to 10 PM
      setStatus({
        open: isOpen,
        message: isOpen ? "Currently Open" : "Closed - Opens at 11 AM"
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
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
        {status.message}
      </span>
    </div>
  )
}
