/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { CountdownSection } from "./components/CountdownTimer";
import { LoveStory } from "./components/LoveStory";
import { Gallery } from "./components/Gallery";
import { EventDetails } from "./components/EventDetails";
import { GiftPayment } from "./components/GiftPayment";
import { GuestWishes } from "./components/GuestWishes";
import { GuestQR } from "./components/GuestQR";
import { MusicPlayer } from "./components/MusicPlayer";
import { WelcomeCover } from "./components/WelcomeCover";
import { FallingFlowers } from "./components/FallingFlowers";
import { coupleData } from "./data";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <main className={`w-full min-h-screen font-sans text-slate-800 ${isOpen ? 'overflow-auto' : 'overflow-hidden h-[100dvh]'}`}>
      <WelcomeCover isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      
      {/* Background Pattern Layer */}
      <div className="fixed inset-0 z-[-1] bg-wedding opacity-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000')] opacity-[0.04] mix-blend-multiply bg-cover bg-center bg-fixed"></div>
      </div>
      
      {isOpen && <FallingFlowers />}

      <Hero />
      <CountdownSection />
      <LoveStory />
      <Gallery />
      <EventDetails />
      <GuestQR />
      <GiftPayment />
      <GuestWishes />
      
      {/* Global Footer */}
      <footer className="bg-transparent text-brand-pink-900 py-16 text-center relative border-t border-brand-pink-200/50">
        {/* Footer Top Ornament */}
        <div className="w-20 h-10 text-brand-pink-300/40 mx-auto mb-6">
          <svg viewBox="0 0 100 50" className="w-full h-full fill-none stroke-current animate-pulse" strokeWidth="1.5">
            <path d="M 10 30 Q 50 10 90 30 M 30 25 Q 50 15 70 25" />
          </svg>
        </div>
        <h2 className="font-luxury text-4xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-brand-pink-700 via-brand-pink-900 to-brand-pink-850 font-bold">{coupleData.groom.name} & {coupleData.bride.name}</h2>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-pink-500">24 September 2026</p>
        <p className="mt-10 text-[10px] uppercase tracking-widest text-slate-400 opacity-80">© 2026 {coupleData.groom.name} & {coupleData.bride.name}. Crafted with Love.</p>
      </footer>

      {isOpen && <MusicPlayer autoPlayTrigger={isOpen} />}
    </main>
  );
}
