import { memo } from 'react';
import { motion } from 'motion/react';

const PARTICLE_COUNT = 15;

export const FallingFlowers = memo(() => {
  // Stable random particles mapping type, scale, positions
  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
    const isSparkle = Math.random() > 0.55;
    return {
      id: i,
      type: isSparkle ? 'sparkle' : 'petal',
      x: Math.random() * 100,
      delay: Math.random() * -20,
      duration: 12 + Math.random() * 10,
      size: isSparkle ? 0.4 + Math.random() * 0.4 : 0.8 + Math.random() * 0.8,
      rotateDirection: Math.random() > 0.5 ? 1 : -1,
      swayWidth: 4 + Math.random() * 6,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-5%] drop-shadow-sm"
          style={{
            left: `${p.x}%`,
            width: `${p.size}rem`,
            height: `${p.size}rem`,
            opacity: p.type === 'sparkle' ? 0.75 : 0.5,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [
              '0vw', 
              `${p.swayWidth}vw`, 
              `-${p.swayWidth}vw`,
              '0vw'
            ],
            rotate: [0, 360 * p.rotateDirection * (1.5 + Math.random())],
          }}
          transition={{
            y: {
              duration: p.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: p.delay,
            },
            x: {
              duration: p.duration * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            },
            rotate: {
              duration: p.duration * 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: p.delay,
            }
          }}
        >
          {p.type === 'sparkle' ? (
            /* Golden Sparkle Star */
            <svg viewBox="0 0 24 24" className="w-full h-full fill-brand-pink-300">
              <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9Z" />
            </svg>
          ) : (
            /* Soft Petal */
            <svg viewBox="0 0 24 24" className="w-full h-full fill-brand-pink-600/30">
              <path d="M12 2C11.5 4.5 9.5 7.5 7 10C4 13 3 16 5 18C7 20 10 19 13 16C16 13.5 19 11.5 21.5 11C19 10.5 16.5 8.5 14 6C11 3 8 2 6 4C4 6 4.5 9.5 7.5 12.5" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
});

