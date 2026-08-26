import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Are the classes online or offline?",
    a: "All our main classes are held physically in our Balotra classroom. We believe in face-to-face teaching where you can ask questions and get complete clarity."
  },
  {
    q: "Are the classes recorded?",
    a: "No. Classes are not recorded. This keeps the classroom honest and interactive, and ensures every student attends and participates fully."
  },
  {
    q: "What if I miss a class?",
    a: "Speak to us — we will guide you on how to cover the missed session in the next batch or through the monthly live sessions."
  },
  {
    q: "Do I need any background in finance?",
    a: "None at all. Everything is taught from zero, in simple language, with everyday examples. If you can manage a household budget, you can follow this course."
  },
  {
    q: "What are the fees for Financial Wisdom?",
    a: "₹5,000 + GST for the complete 12-class program, including 2 live sessions every month."
  },
  {
    q: "Is this a stock market or trading course?",
    a: "No. This is a wealth and mindset education program. We do not give stock tips or investment recommendations. We teach you how to think, so you can decide for yourself."
  },
  {
    q: "How do I book a seat?",
    a: "Send “FW” on WhatsApp to 7340094647 and we will share the next batch details."
  }
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="about-label"
          >
            08. FREQUENTLY ASKED QUESTIONS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-title-large"
          >
            Clear Your <span className="text-royal">Doubts</span>
          </motion.h2>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className="faq-question">
                <h4>{faq.q}</h4>
                <div className="faq-icon">
                  {openIndex === idx ? <Minus size={20} className="text-royal" /> : <Plus size={20} className="text-royal" />}
                </div>
              </div>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
