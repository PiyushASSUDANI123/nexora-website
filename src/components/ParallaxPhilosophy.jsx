import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxPhilosophy = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale the background image slightly as you scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Darken the overlay to make text pop as you scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.3, 0.7, 0.8]);
  // Reveal the text slowly from bottom up
  const textY = useTransform(scrollYProgress, [0, 0.4, 0.8], [100, 0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 0.3]);

  return (
    <section ref={containerRef} className="parallax-philosophy">
      <div className="sticky-wrapper">
        <motion.div 
          className="parallax-bg"
          style={{ 
            scale,
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <motion.div className="parallax-overlay" style={{ opacity }} />
        
        <div className="parallax-content container">
          <motion.div 
            style={{ y: textY, opacity: textOpacity }}
            className="parallax-text-container"
          >
            <h2 className="parallax-headline">
              "The most expensive education is the one you get from your own mistakes."
            </h2>
            <p className="parallax-subtext">— The NEXORA Philosophy</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxPhilosophy;
