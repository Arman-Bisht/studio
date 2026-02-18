
"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LiveStatus } from "./LiveStatus"
import { MenuModal } from "./MenuModal"
import { Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const phoneNumber = "+15805007527"

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
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4 border-r border-white/10 pr-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white hover:text-gold transition-colors text-sm font-medium tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest border border-white/20 transition-all"
            >
              <Phone size={14} className="text-gold" />
              Call to Order
            </a>
            <MenuModal trigger={
              <button className="gold-glow bg-gold text-navy px-6 py-2 text-sm font-bold uppercase tracking-widest">
                View Menu
              </button>
            } />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <a 
            href={`tel:${phoneNumber}`}
            className="p-2 text-gold border border-gold/20 rounded-full"
            aria-label="Call to order"
          >
            <Phone size={20} />
          </a>
          <button 
            className={cn("text-white p-2", isOpen && "hamburger-active")}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <div className="hamburger-line line-1"></div>
              <div className="hamburger-line line-2"></div>
              <div className="hamburger-line line-3"></div>
            </div>
          </button>
        </div>
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
        <div className="flex flex-col gap-4 w-full px-12 mt-4">
          <a 
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest"
          >
            <Phone size={18} className="text-gold" />
            Call to Order
          </a>
          <MenuModal trigger={
            <button className="gold-glow bg-gold text-navy px-10 py-4 text-sm font-bold uppercase tracking-widest">
              View Menu
            </button>
          } />
        </div>
      </div>
    </nav>
  )
}
