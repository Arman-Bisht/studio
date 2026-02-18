
export function Footer() {
  return (
    <footer className="bg-navy py-12 px-6 border-t border-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-headline text-2xl font-bold text-white tracking-tight mb-2">
            LEGACY <span className="text-gold">LAKESIDE</span>
          </p>
          <p className="text-white/40 text-sm tracking-widest uppercase">Fine Dining. Unrivaled Views.</p>
        </div>

        <div className="flex gap-8 text-white/60 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-gold transition-colors">Careers</a>
        </div>

        <p className="text-white/30 text-xs font-light">
          &copy; {new Date().getFullYear()} Legacy Grill and Bar by The Lake. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
