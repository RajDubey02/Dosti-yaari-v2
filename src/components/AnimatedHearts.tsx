import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const AnimatedHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-white/10"
          style={{
            left: `${heart.initialX}%`,
            top: `${heart.initialY}%`,
          }}
          animate={{
            y: [-50, -100, -50],
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart 
            size={heart.size} 
            className="fill-current" 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedHearts;