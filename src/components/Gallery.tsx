
import Image from "next/image"

const GALLERY_IMAGES = [
  { id: 1, src: "/Legacy1.png", hint: "Legacy Grill and Bar" },
  { id: 2, src: "/Legacy2.png", hint: "Legacy Grill and Bar" },
  { id: 3, src: "/Legacy3.png", hint: "Legacy Grill and Bar" },
  { id: 4, src: "/Legacy4.png", hint: "Legacy Grill and Bar" },
  { id: 5, src: "/Legacy5.png", hint: "Legacy Grill and Bar" },
  { id: 6, src: "/Legacy6.jpg", hint: "Legacy Grill and Bar" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-navy px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-gold font-bold uppercase tracking-[0.4em] text-sm block mb-4">The Atmosphere</span>
        <h2 className="font-headline text-4xl md:text-6xl text-white mb-6">Capturing the Moment</h2>
        <div className="w-24 h-[1px] bg-gold mx-auto opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GALLERY_IMAGES.map((img) => (
          <div key={img.id} className="group relative aspect-square overflow-hidden cursor-crosshair">
            <Image 
              src={img.src} 
              alt="Gallery item" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              data-ai-hint={img.hint}
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
              <div className="border border-gold/40 w-full h-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500">
                <span className="text-gold font-headline text-2xl italic">Lakeside Luxury</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
