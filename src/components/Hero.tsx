
import Image from "next/image"
import { MenuModal } from "./MenuModal"

export function Hero() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=9146+N+MacArthur+Blvd+Oklahoma+City+OK+73132"

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/legacy-lake/1920/1080" 
          alt="Lakeside View at Legacy Grill" 
          fill 
          className="object-cover brightness-50"
          priority
          data-ai-hint="lake sunset"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in">
        <h1 className="font-headline text-5xl md:text-8xl text-white font-black leading-tight mb-6 text-shadow-sm">
          Legendary Taste. <br />
          <span className="italic font-normal text-gold">Lakeside Views.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light tracking-[0.3em] uppercase mb-12 max-w-2xl mx-auto">
          Legacy Grill and Bar by The Lake
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MenuModal trigger={
            <button className="gold-glow bg-gold text-navy px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] w-full sm:w-auto">
              Explore Our Menu
            </button>
          } />
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/50 text-white hover:bg-white hover:text-navy px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Find Our Location
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
        <div className="w-[1px] h-10 bg-white/20"></div>
      </div>
    </section>
  )
}
