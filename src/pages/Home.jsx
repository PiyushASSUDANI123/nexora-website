import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ValueStrip from '../components/ValueStrip';
import FaqAccordion from '../components/FaqAccordion';
import ParallaxPhilosophy from '../components/ParallaxPhilosophy';
import SuccessStories from '../components/SuccessStories';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
  })
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="page-wrapper"
    >
      <Hero />
      <ValueStrip />

      {/* ===== ABOUT PREVIEW — Editorial Split (image left, text right, dots) ===== */}
      <section className="section-padding about-preview">
        <div className="container">
          <div className="about-split">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="about-image-side"
            >
              <div className="about-image-wrapper">
                <img 
                  src="/classroom.png" 
                  alt="NEXORA Classroom" 
                />
              </div>
              <div className="about-dots"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="about-text-side"
            >
              <p className="about-label">01. THE CLASSROOM</p>
              <h2 className="section-title-large">A New Kind of Classroom in Balotra.</h2>
              <div className="about-divider-gold"></div>
              <p className="about-body-text">
                Most of us were taught how to earn, but never how to manage, grow or protect what we earn. We learn about money from mistakes — and those mistakes cost years.
              </p>
              <p className="about-body-text">
                NEXORA exists to close that gap. We teach the subjects that decide the quality of your life: money, wealth, property and relationships. Our classes are structured, our frameworks are original, and our teaching is honest — no shortcuts, no false promises, no get-rich schemes.
              </p>
              <Link to="/about" className="btn-outline-editorial mt-4">
                Know More About NEXORA <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== COURSES PREVIEW ===== */}
      <section className="section-padding courses-preview">
        <div className="container">
          <div className="text-center mb-5">
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="about-label"
            >
              02. OUR PROGRAMS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-title-large"
            >
              What You Can Learn at <span className="text-royal">NEXORA</span>
            </motion.h2>
          </div>
          
          <div className="courses-grid-home">
            {[
              { title: "Financial Wisdom", desc: "12 classes that change how you see money forever." },
              { title: "Real Estate Wealth Building", desc: "Understand property as an asset, not a gamble." },
              { title: "Relationship Mastery", desc: "Because wealth means little without peace at home." }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="course-card-premium"
              >
                <span className="card-number">0{idx + 1}</span>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/courses" className="btn-editorial">
              View All Courses <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY NEXORA ===== */}
      <section className="section-padding bg-dark text-white why-nexora">
        <div className="container">
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="about-label text-center"
          >
            03. WHY US
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-title-large text-center mb-5"
          >
            Why People Choose <span className="text-amethyst">NEXORA</span>
          </motion.h2>
          <div className="why-grid">
            {[
              "Face-to-face classes — you sit in a real classroom, not in front of a screen.",
              "Original frameworks — concepts built from years of practical experience, not copied from books.",
              "Small batches — limited seats so every student gets attention.",
              "Continued support — 2 live sessions every month even after your classes are complete.",
              "Simple language — deep ideas explained in the simplest possible way.",
              "Local understanding — examples from our own market, our own families, our own situations."
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="why-item"
              >
                <CheckCircle className="text-amethyst" size={24} />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="about-label text-center"
          >
            04. IS THIS FOR YOU?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-title-large text-center mb-5"
          >
            NEXORA Is For You <span className="text-royal">If...</span>
          </motion.h2>
          <div className="who-its-for-grid">
            {[
              "You earn well but never seem to save",
              "You want to invest but do not know where to begin",
              "You are planning to buy property and want to decide wisely",
              "You are young and want to build the right habits early",
              "You run a business and want clarity on money, not just accounts",
              "You want your family to grow together, not drift apart"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="who-item card-hover-effect"
              >
                <div className="who-icon"><CheckCircle size={24} /></div>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARALLAX PHILOSOPHY ($100k Section) ===== */}
      <ParallaxPhilosophy />

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-padding">
        <div className="container">
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="about-label text-center"
          >
            05. THE PROCESS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-title-large text-center mb-5"
          >
            Getting Started Is <span className="text-royal">Simple</span>
          </motion.h2>
          
          <div className="steps-grid">
            {[
              { title: "Send Us a Message", desc: "WhatsApp us with the course you are interested in. For Financial Wisdom, just send “FW” to 7340094647." },
              { title: "Understand the Program", desc: "We will explain the course structure, timings, batch dates and fees. Ask us anything — there is no pressure." },
              { title: "Confirm Your Seat", desc: "Batches are small and seats are limited. Once you confirm, your place is reserved." },
              { title: "Start Learning", desc: "Attend your classes, apply what you learn, and stay connected through our monthly live sessions." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="step-card"
              >
                <div className="step-number">Step {idx + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER'S NOTE ===== */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <div className="founder-split">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="founder-image-wrapper"
            >
              <img src="/mahesh-rajpurohit.png" alt="Mahesh Rajpurohit - Founder NEXORA" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="founder-content"
            >
              <p className="about-label">06. A NOTE FROM THE FOUNDER</p>
              <h2 className="section-title-large text-white">Why I Started NEXORA</h2>
              <div className="about-divider-gold"></div>
              <p className="founder-quote">
                "I started teaching because I kept meeting the same person again and again — hardworking, honest, sincere, and completely lost when it came to money. They were not lazy. They were not unlucky. They were simply never taught."
              </p>
              <p className="founder-text">
                NEXORA is my attempt to bring that knowledge here, to Balotra, in our own language and our own context. What I teach is not theory I read somewhere. It is what I have learned, tested and lived.
              </p>
              <p className="founder-text font-bold mt-4">
                If you are willing to learn, I promise you this: the way you see money after these classes will not be the way you see it today.
              </p>
              <div className="founder-signature mt-5">
                <h4>— Mahesh Rajpurohit</h4>
                <p>Founder, NEXORA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <SuccessStories />

      {/* ===== FAQ SECTION ===== */}
      <FaqAccordion />

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta section-padding">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="cta-box"
          >
            <h2 className="cta-headline">Your Next 10 Years Depend on What You Learn Today.</h2>
            <p className="cta-subtext">Money does not grow from luck. It grows from understanding. Take the first step — send us a message and we will guide you to the right course.</p>
            <a href="https://wa.me/917340094647?text=FW" className="btn-editorial-light" target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Send "FW" on WhatsApp — 7340094647
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
