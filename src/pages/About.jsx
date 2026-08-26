import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="page-wrapper"
    >
      <section className="about-editorial section-padding">
        <div className="container">
          <div className="about-header text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="about-headline"
            >
              About <span className="text-royal">NEXORA</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-intro-lead mx-auto"
            >
              NEXORA is an education and coaching institute based in Balotra, built on one simple belief — that the most important subjects of life are never taught in any school or college.
            </motion.p>
          </div>
          
          <div className="about-philosophy-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="philosophy-text"
            >
              <p>We spend twenty years studying to earn money, and not a single day learning what to do with it. We build careers without understanding assets. We buy property without understanding value. We build homes without understanding relationships. And then we spend the rest of our lives correcting those mistakes.</p>
              <p className="font-weight-bold text-royal mt-4" style={{ fontSize: '1.5rem' }}>NEXORA was created to change that.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="split-layout">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="split-content">
              <h2 className="section-title-large">Our <span className="text-royal">Approach</span></h2>
              <div className="about-divider"></div>
              <p className="lead-text">
                We teach in a classroom, in person, because real learning happens in conversation — not in a video that plays while your mind is somewhere else. Every class is structured, every concept is broken down with stories and examples, and every student is free to ask until it is clear.
              </p>
              <p className="lead-text">
                Our teaching is built on original frameworks developed over years of practical work in finance, property and business — not on borrowed theory.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="split-visual">
               <div className="image-card-premium">
                <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Approach" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title-large text-center mb-5">What We <span className="text-royal">Stand For</span></h2>
          <div className="stand-for-grid">
            <div className="stand-card">
              <h3>Clarity over complexity</h3>
              <p>If you cannot explain it simply, you have not understood it.</p>
            </div>
            <div className="stand-card">
              <h3>Honesty over hype</h3>
              <p>We teach wealth building, not overnight riches.</p>
            </div>
            <div className="stand-card">
              <h3>Application over information</h3>
              <p>Knowledge that you do not use is just entertainment.</p>
            </div>
            <div className="stand-card">
              <h3>Respect for the student</h3>
              <p>Everyone deserves to understand their own money.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white text-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title-large mb-4">Our <span className="text-amethyst">Vision</span></h2>
            <p className="vision-text mx-auto">
              To make Balotra a place where financial understanding is normal — where every family knows how to earn well, save wisely, invest carefully and live peacefully.
            </p>
            <p className="vision-tagline mt-5">
              Learn | Grow | Succeed<br/>
              <span style={{fontSize: '1rem', fontWeight: 400, opacity: 0.8}}>That is not just our tagline. It is the order in which life actually improves.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding founder-note">
        <div className="container">
          <div className="founder-card">
            <h2 className="section-title-large mb-4">A Note From the Founder</h2>
            <div className="about-divider"></div>
            <div className="founder-content">
              <p>I started teaching because I kept meeting the same person again and again — hardworking, honest, sincere, and completely lost when it came to money.</p>
              <p>They were not lazy. They were not unlucky. They were simply never taught. And no one was going to teach them, because this knowledge stays locked inside expensive rooms in big cities.</p>
              <p>NEXORA is my attempt to bring that knowledge here, to Balotra, in our own language and our own context. What I teach is not theory I read somewhere. It is what I have learned, tested and lived.</p>
              <p>If you are willing to learn, I promise you this: the way you see money after these classes will not be the way you see it today.</p>
              
              <div className="mt-5" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <img src="/mahesh-rajpurohit.png" alt="Mahesh Rajpurohit" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)' }} />
                <div>
                  <div className="about-signature" style={{ marginTop: 0 }}>
                    Mahesh Rajpurohit
                  </div>
                  <p className="mt-2 text-royal" style={{fontWeight: 600, letterSpacing: '1px'}}>FOUNDER, NEXORA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
