
import Image from "next/image"

const GALLERY_IMAGES = [
  { id: 1, src: "https://picsum.photos/seed/lake1/800/800", hint: "lake view" },
  { id: 2, src: "https://picsum.photos/seed/steak1/800/800", hint: "grilled steak" },
  { id: 3, src: "https://picsum.photos/seed/fish1/800/800", hint: "grilled salmon" },
  { id: 4, src: "https://picsum.photos/seed/drink1/800/800", hint: "craft cocktail" },
  { id: 5, src: "https://picsum.photos/seed/interior1/800/800", hint: "restaurant interior" },
  { id: 6, src: "https://picsum.photos/seed/terrace1/800/800", hint: "outdoor dining" },
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
