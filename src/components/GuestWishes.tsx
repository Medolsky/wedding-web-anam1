import { useState, useEffect } from "react";
import { motion } from "motion/react";
import type { GuestWish } from "../types";
import { MessageSquare, User, Check, AlertCircle } from "lucide-react";

export function GuestWishes() {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState<'yes' | 'no' | 'maybe'>('yes');
  
  useEffect(() => {
    const stored = localStorage.getItem("wedding_wishes");
    if (stored) {
      try {
        setWishes(JSON.parse(stored));
      } catch (e) {
        // ignore
      }
    } else {
      const initial: GuestWish[] = [
        { id: "1", name: "Keluarga Bpk. Fulan", message: "Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah mawaddah warahmah.", timestamp: Date.now() - 86400000, attendance: "yes" },
        { id: "2", name: "Sahabat Budi", message: "Wah selamat ya bro! Lancar sampai hari H.", timestamp: Date.now() - 3600000, attendance: "yes" }
      ];
      setWishes(initial);
      localStorage.setItem("wedding_wishes", JSON.stringify(initial));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: GuestWish = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      message,
      attendance,
      timestamp: Date.now(),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("wedding_wishes", JSON.stringify(updated));
    
    setName("");
    setMessage("");
    setAttendance('yes');
  };

  return (
    <section className="py-24 md:py-36 px-4 bg-transparent relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-3 font-medium">Guest Book</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-pink-900 mb-4 font-semibold">Ucapan & Doa</h2>
          <p className="text-slate-500 font-light text-xs md:text-sm">Kirimkan pesan manis dan konfirmasi kehadiran Anda untuk kebahagiaan kami.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 rounded-[2.5rem] card-shadow premium-border relative"
          >
            <h3 className="font-serif text-2xl text-brand-pink-900 font-bold mb-6">Kirim Ucapan</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-brand-pink-200/60 focus:outline-none focus:ring-2 focus:ring-brand-pink-300 bg-white/70 text-sm font-medium text-slate-800 placeholder-slate-450"
                    placeholder="Nama Anda"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Konfirmasi Kehadiran</label>
                <select 
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-2xl border border-brand-pink-200/60 focus:outline-none focus:ring-2 focus:ring-brand-pink-300 bg-white/70 text-sm font-medium text-slate-800"
                >
                  <option value="yes">Hadir</option>
                  <option value="no">Tidak Hadir</option>
                  <option value="maybe">Masih Ragu</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Pesan & Doa Restu</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea 
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-brand-pink-200/60 focus:outline-none focus:ring-2 focus:ring-brand-pink-300 bg-white/70 text-sm font-medium text-slate-800 resize-none placeholder-slate-450"
                    placeholder="Tulis ucapan selamat..."
                  ></textarea>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-brand-pink-800 to-brand-pink-900 hover:from-brand-pink-900 hover:to-brand-pink-950 text-white font-semibold uppercase tracking-wider text-xs py-3.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 duration-200 cursor-pointer"
              >
                Kirim Ucapan & Doa
              </button>
            </form>
          </motion.div>

          {/* List of Wishes */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-2xl text-brand-pink-900 font-bold">Pesan & Doa Masuk</h3>
              <span className="bg-brand-pink-100 text-brand-pink-850 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                {wishes.length} Pesan
              </span>
            </div>
            
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-3 scrollbar-thin">
              {wishes.map((wish) => (
                <motion.div 
                  key={wish.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-6 rounded-[2rem] card-shadow relative premium-border"
                >
                  {/* Decorative quotes icon on top right */}
                  <div className="absolute right-6 top-5 text-brand-pink-200/40 select-none">
                    <span className="font-luxury text-6xl leading-none">&ldquo;</span>
                  </div>

                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <div className="font-serif text-lg text-brand-pink-900 font-bold flex items-center gap-2.5">
                      {wish.name}
                      {wish.attendance === 'yes' && (
                        <span className="inline-flex items-center gap-1 text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 font-sans tracking-wide">
                          <Check className="w-2.5 h-2.5" /> Hadir
                        </span>
                      )}
                      {wish.attendance === 'no' && (
                        <span className="inline-flex items-center gap-1 text-[9px] bg-red-50 text-red-700 px-2 py-0.5 rounded-full border border-red-200 font-sans tracking-wide">
                          <AlertCircle className="w-2.5 h-2.5" /> Tidak Hadir
                        </span>
                      )}
                      {wish.attendance === 'maybe' && (
                        <span className="inline-flex items-center gap-1 text-[9px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200 font-sans tracking-wide">
                          <AlertCircle className="w-2.5 h-2.5" /> Ragu-Ragu
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                      {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(wish.timestamp)}
                    </span>
                  </div>
                  <p className="text-slate-650 text-xs md:text-sm leading-relaxed relative z-10 italic pr-6 font-serif">
                    {wish.message}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

