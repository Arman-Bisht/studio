
import Image from "next/image"

export function Story() {
  return (
    <section id="story" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image 
                src="https://picsum.photos/seed/steak1/800/1000" 
                alt="Gourmet Food" 
                fill 
                className="object-cover shadow-2xl z-10"
                data-ai-hint="grilled steak"
              />
              <div className="absolute -top-10 -left-10 w-full h-full bg-navy/5 -z-0"></div>
              <div className="absolute -bottom-6 -right-6 border-4 border-gold w-32 h-32 -z-0"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-sm block">Our Legacy</span>
            <h2 className="font-headline text-4xl md:text-6xl text-navy leading-tight">
              Rooted in the Soil, <br />
              <span className="italic font-normal">Served by the Water.</span>
            </h2>
            <p className="text-navy/70 leading-relaxed text-lg">
              Since 1978, Legacy Lakeside has been the definitive destination for those who appreciate the finer things. We pride ourselves on sourcing the freshest local ingredients, from hand-cut steaks to locally harvested herbs.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Our culinary philosophy is simple: honor the ingredient, respect the tradition, and celebrate the view. Every table at Legacy offers a panoramic vista of the tranquil waters, providing a backdrop that is as exquisite as the food on your plate.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-4 border-l-2 border-gold pl-6">
                <p className="font-headline text-2xl italic text-navy/80">
                  "The most breathtaking sunset I've ever witnessed over a prime rib."
                </p>
              </div>
              <p className="text-gold font-bold uppercase tracking-widest text-xs mt-4 ml-6">— Michael V., Regular Patron</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
