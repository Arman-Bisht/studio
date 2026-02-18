
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Story } from "@/components/Story"
import { Gallery } from "@/components/Gallery"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-navy selection:bg-gold selection:text-navy">
      <Navigation />
      <Hero />
      <Story />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
