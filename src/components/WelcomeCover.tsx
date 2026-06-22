import { motion, AnimatePresence } from "motion/react";
import { coupleData } from "../data";
import { MailOpen } from "lucide-react";

interface WelcomeCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function WelcomeCover({ isOpen, onOpen }: WelcomeCoverProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-brand-pink-900"
        >
          {/* Background image with parallax overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1600')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-pink-900/90 via-brand-pink-950/75 to-brand-pink-950/90 backdrop-blur-xs"></div>
          </div>

          {/* Animated Gold Sparkle Dust Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-pink-300 rounded-full blur-xs animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-brand-pink-200 rounded-full blur-xs animate-ping" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-brand-pink-350 rounded-full blur-xs animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
          </div>

          {/* Luxury Frame Container */}
          <div className="relative z-10 w-[90%] max-w-lg mx-auto p-1 text-center rounded-[2.5rem] bg-gradient-to-b from-brand-pink-300/40 via-brand-pink-300/10 to-brand-pink-300/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="bg-brand-pink-900/90 backdrop-blur-md rounded-[2.4rem] p-8 md:p-12 relative overflow-hidden premium-border">
              {/* Corner SVG Ornaments */}
              <div className="absolute top-4 left-4 w-12 h-12 text-brand-pink-300 opacity-60">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                  <path d="M 0 50 Q 50 50 50 0 M 0 10 L 10 0 M 0 25 Q 25 25 25 0" />
                </svg>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 text-brand-pink-300 opacity-60 rotate-90">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                  <path d="M 0 50 Q 50 50 50 0 M 0 10 L 10 0 M 0 25 Q 25 25 25 0" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 text-brand-pink-300 opacity-60 -rotate-90">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                  <path d="M 0 50 Q 50 50 50 0 M 0 10 L 10 0 M 0 25 Q 25 25 25 0" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 text-brand-pink-300 opacity-60 rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                  <path d="M 0 50 Q 50 50 50 0 M 0 10 L 10 0 M 0 25 Q 25 25 25 0" />
                </svg>
              </div>

              {/* Bismillah Calligraphy Placeholder/Ornament */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.8, y: 0 }}
                className="mb-6"
              >
                <span className="font-serif italic text-brand-pink-100 text-sm tracking-widest block">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                <div className="w-16 h-[1px] bg-brand-pink-350 mx-auto mt-2"></div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-brand-pink-200 text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4"
              >
                The Wedding Invitation
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="font-luxury text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-brand-pink-100 via-brand-pink-200 to-brand-pink-300 mb-6 leading-tight drop-shadow-md shimmer-gold"
              >
                {coupleData.groom.name} <br/> 
                <span className="font-serif text-2xl md:text-3xl italic text-brand-pink-200 font-light block my-2">&</span>
                {coupleData.bride.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-brand-pink-100 text-sm md:text-base font-medium mb-6 flex flex-col items-center gap-1"
              >
                <p className="tracking-wide">Kamis, 24 September 2026</p>
                <div className="w-12 h-[1px] bg-brand-pink-350 my-2"></div>
                <p className="font-serif text-lg text-brand-pink-200 italic">{coupleData.location}</p>
                <p className="text-[11px] text-brand-pink-300 max-w-[240px] tracking-wide mt-1">{coupleData.address}</p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-brand-pink-200/70 mb-8 font-serif italic text-xs leading-relaxed max-w-sm mx-auto"
              >
                &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri...&rdquo;
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative inline-block"
              >
                <button 
                  onClick={onOpen}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-pink-300 via-brand-pink-200 to-brand-pink-400 text-brand-pink-950 rounded-full font-semibold uppercase tracking-wider text-xs md:text-sm overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95 duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <MailOpen className="w-4 h-4 relative z-10 transition-transform group-hover:rotate-6" />
                  <span className="relative z-10">Buka Undangan</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

