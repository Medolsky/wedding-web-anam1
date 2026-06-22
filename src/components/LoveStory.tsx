import { motion } from "motion/react";
import { coupleData } from "../data";

export function LoveStory() {
  return (
    <section className="py-24 md:py-36 px-4 bg-transparent relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-3">Our Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-pink-900 mb-4 font-semibold">Kisah Cinta Kami</h2>
          <p className="text-slate-500 font-light text-sm md:text-base">Perjalanan cerita dua hati yang ditakdirkan bersama.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Gradient Line (Gold to Rose) */}
          <div className="absolute left-[20px] md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-pink-300 via-brand-pink-200 to-brand-pink-600 -translate-x-1/2 rounded-full opacity-60"></div>

          <div className="space-y-16">
            {coupleData.story.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className={`relative flex items-center md:justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline Gold Diamond Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-5 h-5 rounded-sm bg-brand-pink-300 -translate-x-1/2 rotate-45 border-4 border-brand-pink-900 shadow-md z-10"></div>

                  <div className="pl-12 md:pl-0 md:w-[45%]">
                    <div className="glass p-8 rounded-3xl card-shadow relative overflow-hidden transition-all duration-300 hover:shadow-xl premium-border">
                      <span className="text-brand-pink-500 font-semibold tracking-widest text-xs uppercase block mb-2">{item.date}</span>
                      <h3 className="font-serif text-2xl text-brand-pink-900 mb-3 font-semibold">{item.title}</h3>
                      <p className="text-slate-650 text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Engagement Highlight Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ type: "spring", stiffness: 80, damping: 18 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mt-28 text-center glass p-6 md:p-8 rounded-[3rem] card-shadow max-w-4xl mx-auto premium-border relative overflow-hidden"
        >
           {/* Decorative background circle */}
           <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-pink-150 rounded-full blur-2xl opacity-40"></div>

           <span className="font-luxury text-sm md:text-base text-brand-pink-500 uppercase tracking-[0.25em] block mb-2">Our Engagement</span>
           <h3 className="font-serif text-3xl text-brand-pink-900 mb-8 font-semibold italic">Momen Tunangan</h3>
           
           <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative group border-4 border-white">
             <img 
               src="https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&w=1200&q=80" 
               alt="Engagement" 
               className="w-full h-[300px] md:h-[550px] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-950/90 via-brand-pink-900/30 to-transparent"></div>
             
             {/* Subtle floral silhouette over overlay */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

             <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
               <p className="font-serif text-3xl md:text-4xl mb-3 font-semibold shimmer-gold">Sebuah Awal Baru</p>
               <p className="text-white/85 text-xs md:text-sm font-light max-w-xl mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 tracking-wide leading-relaxed">
                 Langkah awal penyatuan dua keluarga besar, mengikat janji suci di bawah ridho Allah SWT untuk melangkah bersama ke gerbang pernikahan.
               </p>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

