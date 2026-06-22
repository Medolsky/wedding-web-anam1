import { useState, useRef, useEffect } from "react";
import { Disc2, Play, Pause } from "lucide-react";
import { coupleData } from "../data";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export function MusicPlayer({ autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(coupleData.musicUrl);
      audioRef.current.loop = true;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Handle autoplay policy block
        setIsPlaying(false);
      });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={togglePlay}
        className="w-12 h-12 bg-white/80 backdrop-blur-md border border-brand-pink-100 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
      >
        <Disc2 className={`w-6 h-6 text-brand-pink-600 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
        <div className="absolute -top-1 -right-1 bg-brand-pink-500 w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
           {isPlaying ? <Pause className="w-2 h-2 text-white" /> : <Play className="w-2 h-2 text-white ml-[1px]" />}
        </div>
      </button>
    </div>
  );
}
