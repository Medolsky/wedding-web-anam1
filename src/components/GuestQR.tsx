import { useState } from "react";
import { motion } from "motion/react";
import { QRCodeSVG } from "qrcode.react";

export function GuestQR() {
  const [guestName, setGuestName] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      setGenerated(true);
    }
  };

  return (
    <section className="py-24 md:py-36 px-4 bg-transparent text-slate-800 relative flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543885065-5d98fbcf5435?auto=format&fit=crop&q=80&w=1200')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
      
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="max-w-2xl mx-auto text-center relative z-10 w-full"
      >
        <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-3 font-medium">Digital Access</span>
        <h2 className="font-serif text-3xl md:text-4xl mb-4 text-brand-pink-900 font-semibold">Akses Pintu Masuk</h2>
        <p className="text-slate-600 mb-12 font-light text-xs md:text-sm max-w-md mx-auto leading-relaxed">
          Dapatkan QR Code khusus Anda sebagai akses utama memasuki ruangan resepsi pernikahan kami secara eksklusif.
        </p>

        {!generated ? (
          <form onSubmit={handleGenerate} className="flex flex-col items-center max-w-sm mx-auto space-y-5 bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-sm">
            <div className="w-full">
              <input 
                type="text" 
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Masukkan Nama Lengkap Anda"
                className="w-full px-6 py-3.5 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-pink-300 text-center bg-white border border-brand-pink-200/60 font-medium placeholder-slate-400 text-sm"
              />
            </div>
            <button 
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-brand-pink-800 to-brand-pink-900 hover:from-brand-pink-900 hover:to-brand-pink-950 text-white font-semibold uppercase tracking-wider text-xs rounded-full shadow-md hover:shadow-lg transition-all w-full cursor-pointer active:scale-95 duration-200"
            >
              Generate VIP Pass
            </button>
          </form>
        ) : (
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative p-1 bg-gradient-to-b from-brand-pink-300 via-brand-pink-200 to-brand-pink-400 rounded-[2.5rem] shadow-2xl inline-block max-w-xs w-full"
          >
            {/* VIP Pass Card UI */}
            <div className="bg-brand-pink-900 text-white rounded-[2.4rem] p-8 relative overflow-hidden premium-border">
              
              {/* Ticket cutouts on the sides */}
              <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-brand-pink-50 border-r border-brand-pink-200/50"></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-brand-pink-50 border-l border-brand-pink-200/50"></div>
              
              <div className="mb-6 text-center">
                <span className="text-[10px] tracking-[0.35em] text-brand-pink-300 font-bold uppercase block mb-1">Wedding VIP Access</span>
                <div className="w-12 h-[1px] bg-brand-pink-300/40 mx-auto mb-4"></div>
                <h4 className="font-serif text-2xl text-transparent bg-clip-text bg-gradient-to-b from-brand-pink-50 to-brand-pink-100 font-bold tracking-wide">{guestName}</h4>
                <p className="text-[9px] text-brand-pink-200/80 uppercase tracking-widest mt-1 font-medium">Exclusive Guest</p>
              </div>

              <div className="bg-white p-3 rounded-2xl inline-block shadow-inner relative z-10 border border-brand-pink-200/20">
                <QRCodeSVG 
                  value={`https://anam-anggi-wedding.com/checkin?guest=${encodeURIComponent(guestName)}`}
                  size={170}
                  bgColor={"#ffffff"}
                  fgColor={"#3D0414"} // deep burgundy mapping to brand-pink-900
                  level={"H"}
                  includeMargin={false}
                />
              </div>

              <div className="w-full border-t border-dashed border-brand-pink-350/50 my-6"></div>

              <p className="text-[10px] text-brand-pink-200/80 max-w-[200px] text-center mx-auto tracking-wide leading-relaxed">
                Tunjukkan QR code ini kepada petugas penerima tamu di pintu masuk utama gedung.
              </p>
              
              <button 
                onClick={() => {setGenerated(false); setGuestName("");}}
                className="absolute -top-2 -right-2 bg-brand-pink-100 text-brand-pink-900 rounded-full w-7 h-7 flex items-center justify-center font-bold shadow-md hover:bg-brand-pink-205 cursor-pointer text-sm"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

