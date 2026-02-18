
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-sm block mb-4">Location</span>
              <h2 className="font-headline text-4xl md:text-5xl text-navy mb-8">Visit the Legacy</h2>
              <p className="text-navy/70 max-w-md">
                Find us at the edge of serenity. We are located on the northern shore of the lake, offering the most spectacular sunset views in the region.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Legacy+Grill+and+Bar+by+The+Lake" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="bg-navy p-3 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">Our Address</h4>
                  <p className="text-navy/60 group-hover:text-navy transition-colors">1200 Shoreline Drive, <br />Lakeside Springs, LS 45012</p>
                </div>
              </a>

              <a 
                href="tel:+15551234567" 
                className="flex items-start gap-4 group"
              >
                <div className="bg-navy p-3 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">Reservations</h4>
                  <p className="text-navy/60 group-hover:text-navy transition-colors">(555) 123-4567</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="bg-navy p-3 text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-sm mb-1">Service Hours</h4>
                  <p className="text-navy/60">Daily: 11:00 AM — 10:00 PM</p>
                  <p className="text-navy/40 text-xs italic mt-1">Bar remains open until late on weekends.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-full bg-navy/5 overflow-hidden group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647525350000!5m2!1sen!2sfr" 
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
