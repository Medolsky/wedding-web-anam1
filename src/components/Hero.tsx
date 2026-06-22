import { motion } from "motion/react";
import { coupleData } from "../data";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-brand-pink-900">
      {/* Background Image with elegant overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1600')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-950 via-brand-pink-900/60 to-brand-pink-950/80"></div>
      </div>

      {/* Decorative Botanical Corners */}
      <div className="absolute inset-8 border border-brand-pink-300/20 pointer-events-none z-10 hidden md:block">
        <div className="absolute top-2 left-2 w-16 h-16 text-brand-pink-300/40">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
            <path d="M 0 40 C 20 40 40 20 40 0 M 0 15 C 10 15 15 10 15 0 M 0 8 L 8 0" />
          </svg>
        </div>
        <div className="absolute top-2 right-2 w-16 h-16 text-brand-pink-300/40 rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
            <path d="M 0 40 C 20 40 40 20 40 0 M 0 15 C 10 15 15 10 15 0 M 0 8 L 8 0" />
          </svg>
        </div>
        <div className="absolute bottom-2 left-2 w-16 h-16 text-brand-pink-300/40 -rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
            <path d="M 0 40 C 20 40 40 20 40 0 M 0 15 C 10 15 15 10 15 0 M 0 8 L 8 0" />
          </svg>
        </div>
        <div className="absolute bottom-2 right-2 w-16 h-16 text-brand-pink-300/40 rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
            <path d="M 0 40 C 20 40 40 20 40 0 M 0 15 C 10 15 15 10 15 0 M 0 8 L 8 0" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center space-y-6 text-white w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="uppercase tracking-[0.4em] text-xs md:text-sm font-light text-brand-pink-200 block mb-2">
            The Wedding Of
          </span>
          <div className="w-12 h-[1px] bg-brand-pink-300/60 mx-auto mt-2"></div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
          className="font-luxury text-6xl md:text-8xl drop-shadow-2xl leading-tight py-4 shimmer-gold select-none"
        >
          {coupleData.groom.name} <span className="font-serif text-3xl md:text-5xl text-brand-pink-200/80 italic block md:inline md:mx-4 my-2 md:my-0">&</span> {coupleData.bride.name}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="text-sm md:text-lg font-medium tracking-[0.2em] uppercase bg-brand-pink-900/40 border border-brand-pink-300/30 px-8 py-3 rounded-full backdrop-blur-md shadow-lg text-brand-pink-100">
            24 September 2026
          </div>
          <div className="flex flex-col items-center gap-1 opacity-90 mt-2">
            <div className="text-base md:text-xl font-serif italic text-brand-pink-200">
              {coupleData.location}
            </div>
            <div className="text-[11px] md:text-xs font-light text-brand-pink-300/80 max-w-[280px] mx-auto tracking-wider uppercase">
              {coupleData.address}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-pink-200/80">Scroll Down</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-brand-pink-300/80 to-transparent animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}

