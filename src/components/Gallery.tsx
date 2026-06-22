import { motion } from "motion/react";
import { coupleData } from "../data";

export function Gallery() {
  return (
    <section className="py-24 md:py-36 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
           <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-3">Our Moments</span>
           <h2 className="font-serif text-4xl md:text-5xl text-brand-pink-900 mb-4 font-semibold">Galeri Bahagia</h2>
           <p className="text-slate-550 font-light text-sm md:text-base">Momen-momen manis kebersamaan kami yang abadi.</p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 px-4 md:px-8"
        >
          {coupleData.gallery.map((url, index) => {
            // Alternating rotation for custom polaroid feel
            const rotation = index % 3 === 0 ? -3 : index % 3 === 1 ? 3 : -1.5;
            const captionName = [
              "Tawa Bersama",
              "Saling Menatap",
              "Langkah Pertama",
              "Senyum Hangat",
              "Genggaman Erat",
              "Masa Depan Kita"
            ][index] || `Momen Indah ${index + 1}`;
            
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 55, scale: 0.9, rotate: rotation * 2 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    rotate: rotation,
                    transition: { type: "spring", stiffness: 90, damping: 14 }
                  }
                }}
                whileHover={{ 
                  scale: 1.04, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { type: "spring", stiffness: 300, damping: 18 } 
                }}
                className="bg-white p-4 pb-8 shadow-[0_12px_35px_rgba(138,37,66,0.08)] border border-slate-100/80 cursor-pointer relative rounded-xs group"
              >
                {/* Golden Washi Tape Detail */}
                <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-20 h-6 bg-gradient-to-r from-brand-pink-300/40 via-brand-pink-250/70 to-brand-pink-300/40 backdrop-blur-xs rotate-[-1deg] shadow-xs border-x border-brand-pink-300/20 z-20"></div>

                <div className="aspect-[4/5] overflow-hidden relative rounded-xs">
                  <img 
                    src={url} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-105"
                  />
                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-550 pointer-events-none"></div>
                </div>

                {/* Hand-written styled typography caption */}
                <div className="mt-5 text-center">
                  <p className="font-serif italic text-brand-pink-800 text-lg tracking-wide select-none">
                    {captionName}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 select-none">
                    Anam & Anggi
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

