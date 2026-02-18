import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=9146+N+MacArthur+Blvd+Oklahoma+City+OK+73132"
  const phoneNumber = "+15805007527"

  return (
    <section id="contact" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-sm block mb-4">Location</span>
              <h2 className="font-headline text-4xl md:text-5xl text-navy mb-8">Visit the Legacy</h2>
              <p className="text-navy/70 max-w-md">
                Experience the finest dining in Oklahoma City. Located right by the water, we offer a unique atmosphere where great food meets unrivaled views.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href={googleMapsUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="bg-navy p-3 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">Our Address</h4>
                  <p className="text-navy/60 group-hover:text-navy transition-colors">9146 N MacArthur Blvd, <br />Oklahoma City, OK 73132</p>
                </div>
              </a>

              <a 
                href={`tel:${phoneNumber}`} 
                className="flex items-start gap-4 group"
              >
                <div className="bg-navy p-3 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">Call Us</h4>
                  <p className="text-navy/60 group-hover:text-navy transition-colors">(580) 500-7527</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="bg-navy p-3 text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">Service Hours</h4>
                  <p className="text-navy/60">Mon - Thu: 11:00 AM — 9:00 PM</p>
                  <p className="text-navy/60">Fri - Sat: 11:00 AM — 10:00 PM</p>
                  <p className="text-navy/60">Sun: 11:00 AM — 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-full bg-navy/5 overflow-hidden group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.406!2d-97.6227372!3d35.5636577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b205f3b80f54fd%3A0x37ab1b507e3f3b3e!2s9146%20N%20MacArthur%20Blvd%2C%20Oklahoma%20City%2C%20OK%2073132!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-8 border-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}