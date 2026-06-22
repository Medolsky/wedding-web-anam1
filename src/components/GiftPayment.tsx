import { motion } from "motion/react";
import { useState } from "react";
import { Copy, Gift, QrCode } from "lucide-react";
import { coupleData } from "../data";

export function GiftPayment() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-24 md:py-36 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1200')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <Gift className="w-12 h-12 text-brand-pink-400 mx-auto mb-4" />
          <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-3 font-medium">Wedding Gift</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-pink-900 mb-6 font-semibold">Kirim Hadiah</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila Anda ingin memberikan tanda kasih secara digital maupun fisik, kami menyediakan detail rekening di bawah ini.
          </p>
        </motion.div>

        {/* Bank Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {coupleData.banks.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
              className="relative overflow-hidden bg-brand-pink-900 text-white rounded-[2.2rem] p-8 shadow-xl border border-brand-pink-300/20 group cursor-pointer"
            >
              {/* Luxury Geometric Lines Overlay */}
              <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.4),transparent)] pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                  <h4 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink-100 to-brand-pink-200 tracking-wide font-bold">{bank.name}</h4>
                  <p className="text-brand-pink-250 text-[10px] mt-1 font-semibold tracking-widest uppercase">{bank.accountName}</p>
                </div>
                <div className="p-2 bg-brand-pink-850/60 rounded-full border border-brand-pink-300/30">
                  <QrCode className="w-5 h-5 text-brand-pink-300" />
                </div>
              </div>
              
              <div className="flex justify-between items-center bg-brand-pink-950/80 p-2 pl-5 rounded-full border border-brand-pink-300/20 relative z-10">
                <span className="font-mono text-sm md:text-base tracking-[0.2em] text-brand-pink-100 font-bold">{bank.accountNumber}</span>
                <button 
                  onClick={() => handleCopy(bank.accountNumber)}
                  className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-brand-pink-950 bg-gradient-to-r from-brand-pink-300 via-brand-pink-250 to-brand-pink-400 hover:from-brand-pink-400 hover:to-brand-pink-500 px-5 py-2.5 rounded-full transition-all shadow-md cursor-pointer active:scale-95 duration-200"
                >
                  <Copy className="w-3 h-3" />
                  {copied === bank.accountNumber ? "Tersalin" : "Salin"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Physical Gift Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-lg text-left flex flex-col md:flex-row items-center justify-between gap-6 premium-border"
        >
           <div>
             <h3 className="font-serif text-2xl text-brand-pink-900 font-bold mb-2">Kirim Hadiah Fisik</h3>
             <p className="text-slate-600 font-light text-xs md:text-sm leading-relaxed max-w-lg mb-2">
               Jika Anda ingin mengirimkan bingkisan / kado fisik, silakan kirimkan ke alamat penerima di bawah ini:
             </p>
             <p className="text-slate-800 font-semibold text-sm md:text-base leading-relaxed p-4 bg-white/50 rounded-2xl border border-brand-pink-100/30">
               {coupleData.groom.fullName} & {coupleData.bride.fullName}<br/>
               <span className="text-slate-500 font-normal text-xs md:text-sm mt-1 block">{coupleData.address}</span>
             </p>
           </div>
           <button 
             onClick={() => handleCopy(coupleData.address)}
             className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-brand-pink-800 hover:bg-brand-pink-900 px-6 py-4 rounded-full transition-all shadow-md hover:shadow-lg w-full md:w-auto shrink-0 cursor-pointer active:scale-95 duration-200"
           >
             <Copy className="w-3.5 h-3.5" />
             {copied === coupleData.address ? "Tersalin!" : "Salin Alamat"}
           </button>
        </motion.div>
      </div>
    </section>
  );
}

