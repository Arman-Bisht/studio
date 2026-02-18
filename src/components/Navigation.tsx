
"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LiveStatus } from "./LiveStatus"
import { MenuModal } from "./MenuModal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
      scrolled ? "nav-blur shadow-lg py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <a href="#" className="font-headline text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
            LEGACY <span className="text-gold">GRILL & BAR</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] font-light text-white/60">By the Lake</span>
          </a>
          <LiveStatus />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white hover:text-gold transition-colors text-sm font-medium tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <MenuModal trigger={
            <button className="gold-glow bg-gold text-navy px-6 py-2 text-sm font-bold uppercase tracking-widest">
              View Menu
            </button>
          } />
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden text-white p-2", isOpen && "hamburger-active")}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <div className="hamburger-line line-1"></div>
            <div className="hamburger-line line-2"></div>
            <div className="hamburger-line line-3"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-navy h-screen transition-transform duration-500 ease-in-out z-[-1] flex flex-col items-center justify-center gap-8",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl font-headline hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
        <MenuModal trigger={
          <button className="gold-glow bg-gold text-navy px-10 py-4 text-lg font-bold uppercase tracking-widest mt-4">
            View Menu
          </button>
        } />
      </div>
    </nav>
  )
}
