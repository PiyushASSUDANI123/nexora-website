import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-editorial">
      <div className="container hero-editorial-container">
        
        {/* Left: Content */}
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-badge-wrapper"
          >
            <span className="hero-badge">Learn · Grow · Succeed</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
            }}
            className="hero-headline"
          >
            {"Learn What School Never Taught You About ".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                style={{ display: 'inline-block', marginRight: '0.3em' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 } }
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.em 
              className="text-royal"
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { ease: [0.16, 1, 0.3, 1], duration: 1 } }
              }}
            >
              Money, Property and Life.
            </motion.em>
          </motion.div>

          <motion.p 
            className="hero-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            NEXORA is a learning space in Balotra where real-world financial wisdom, property knowledge and relationship skills are taught the way they should be — in a classroom, face to face, with clarity you can actually use.
          </motion.p>

          <motion.div 
            className="hero-actions-multi"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="/courses" className="btn-editorial">
              Join Financial Wisdom
            </a>
            <a href="https://wa.me/917340094647" className="btn-outline-editorial" target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Talk to Us on WhatsApp
            </a>
          </motion.div>
          
          <motion.div
            className="hero-trustline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p>In-person classes &nbsp;·&nbsp; Limited seats &nbsp;·&nbsp; Balotra</p>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="hero-visual">
          <motion.div 
            className="hero-image-mask"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=900&auto=format&fit=crop&q=80" 
              alt="NEXORA Classroom — Financial Wisdom Balotra" 
              className="hero-image"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
