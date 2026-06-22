import { motion } from "motion/react";
import { MapPin, Calendar, Clock } from "lucide-react";
import { coupleData } from "../data";

export function EventDetails() {
  return (
    <section className="py-24 md:py-36 px-4 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
           <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-3">Event Details</span>
           <h2 className="font-serif text-4xl md:text-5xl text-brand-pink-900 mb-4 font-semibold">Detail Acara</h2>
           <p className="text-slate-550 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
             Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu bagi lembaran baru kami.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-20">
          {coupleData.events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 * idx }}
              className="glass rounded-[2.5rem] p-8 md:p-14 text-center card-shadow relative overflow-hidden premium-border hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card top ornament */}
              <div className="w-16 h-8 text-brand-pink-300/40 mx-auto mb-6">
                <svg viewBox="0 0 100 50" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                  <path d="M 10 40 Q 50 10 90 40 M 30 35 Q 50 20 70 35" />
                </svg>
              </div>

              <h3 className="font-serif text-3xl text-brand-pink-900 font-bold mb-8">{evt.title}</h3>
              
              <div className="space-y-6 text-slate-750 mb-10 flex flex-col items-center">
                
                {/* Date */}
                <div className="flex items-center gap-4 bg-white/40 px-6 py-2.5 rounded-full border border-brand-pink-100/50 shadow-xs">
                  <div className="p-1.5 bg-brand-pink-100 rounded-full text-brand-pink-700">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-705">{evt.date}</span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-4 bg-white/40 px-6 py-2.5 rounded-full border border-brand-pink-100/50 shadow-xs">
                  <div className="p-1.5 bg-brand-pink-100 rounded-full text-brand-pink-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-705">{evt.time}</span>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center gap-2 mt-4">
                  <div className="p-3 bg-gradient-to-tr from-brand-pink-300 to-brand-pink-200 rounded-full text-brand-pink-950 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-xl text-brand-pink-900 font-semibold mt-2">{evt.location}</span>
                  <span className="text-xs text-slate-500 max-w-[280px] leading-relaxed uppercase tracking-wider">{evt.address}</span>
                </div>

              </div>

              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(evt.address)}`} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-gradient-to-r from-brand-pink-800 to-brand-pink-900 hover:from-brand-pink-900 hover:to-brand-pink-950 text-brand-pink-100 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 duration-300"
              >
                Petunjuk Arah Google Maps
              </a>
            </motion.div>
          ))}
        </div>

        {/* Map Embed with gold shadow frame */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(138,37,66,0.1)] border-2 border-brand-pink-200/50 p-2 bg-white/60 backdrop-blur-md h-[400px] relative"
        >
          <div className="w-full h-full rounded-[2.3rem] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.47250645053!2d106.74548450125792!3d-6.240751963283259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Pernikahan"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

