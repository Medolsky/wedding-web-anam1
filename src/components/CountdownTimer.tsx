import { motion } from "motion/react";
import Countdown from "react-countdown";
import { coupleData } from "../data";

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <span className="font-serif text-4xl text-brand-pink-900 shimmer-gold">Hari Bahagia Telah Tiba!</span>;
  } else {
    return (
      <div className="flex gap-3 md:gap-6 justify-center items-center">
        {[
          { label: "Hari", value: days },
          { label: "Jam", value: hours },
          { label: "Menit", value: minutes },
          { label: "Detik", value: seconds },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative group w-16 h-20 md:w-24 md:h-28">
              {/* Premium Gold Card Shadow border */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-pink-300 via-brand-pink-200 to-brand-pink-400 rounded-2xl p-[1px] shadow-lg">
                <div className="w-full h-full bg-brand-pink-900 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden">
                  {/* Subtle card separation line */}
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-brand-pink-950/40"></div>
                  <span className="font-luxury text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-brand-pink-100 to-brand-pink-300 font-bold relative z-10">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
            <span className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-pink-850 font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }
};

export function CountdownSection() {
  return (
    <section className="py-24 md:py-36 px-4 bg-transparent relative overflow-hidden">
      {/* Luxurious floral/abstract blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-3">Save The Date</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-pink-900 mb-6 font-semibold">Menghitung Hari</h2>
          <p className="text-slate-650 mb-12 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri momen istimewa pernikahan kami.
          </p>

          {/* Countdown Clock */}
          <div className="mb-20">
            <Countdown date={new Date(coupleData.date)} renderer={renderer} />
          </div>

          {/* Couple Cards Container */}
          <div className="glass rounded-[2.5rem] p-8 md:p-14 card-shadow relative max-w-3xl mx-auto premium-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
              
              {/* Groom */}
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-36 h-36 rounded-full overflow-hidden mb-6 p-1 bg-gradient-to-tr from-brand-pink-300 via-brand-pink-100 to-brand-pink-400 shadow-xl relative"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80" alt="Sayyidul Anam" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <h3 className="font-serif text-3xl text-brand-pink-900 font-bold mb-2">{coupleData.groom.fullName}</h3>
                <p className="text-xs text-brand-pink-700 mb-2 italic">Putra dari</p>
                <p className="text-sm font-semibold text-slate-700">{coupleData.groom.father}</p>
                <p className="text-xs text-slate-500 font-medium">& {coupleData.groom.mother}</p>
                <a 
                  href={`https://instagram.com/${coupleData.groom.instagram.replace('@','')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] uppercase tracking-wider text-brand-pink-900 mt-4 font-semibold px-4 py-1.5 bg-brand-pink-100 hover:bg-brand-pink-200 rounded-full shadow-xs transition-colors"
                >
                  {coupleData.groom.instagram}
                </a>
              </div>

              {/* Decorative Center & */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-pink-50 border border-brand-pink-250 items-center justify-center font-serif text-2xl text-brand-pink-400 z-10 shadow-sm">
                &
              </div>

              {/* Bride */}
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-36 h-36 rounded-full overflow-hidden mb-6 p-1 bg-gradient-to-tr from-brand-pink-300 via-brand-pink-100 to-brand-pink-400 shadow-xl relative"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80" alt="Anggi Saraswati" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <h3 className="font-serif text-3xl text-brand-pink-900 font-bold mb-2">{coupleData.bride.fullName}</h3>
                <p className="text-xs text-brand-pink-700 mb-2 italic">Putri dari</p>
                <p className="text-sm font-semibold text-slate-700">{coupleData.bride.father}</p>
                <p className="text-xs text-slate-500 font-medium">& {coupleData.bride.mother}</p>
                <a 
                  href={`https://instagram.com/${coupleData.bride.instagram.replace('@','')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] uppercase tracking-wider text-brand-pink-900 mt-4 font-semibold px-4 py-1.5 bg-brand-pink-100 hover:bg-brand-pink-200 rounded-full shadow-xs transition-colors"
                >
                  {coupleData.bride.instagram}
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

