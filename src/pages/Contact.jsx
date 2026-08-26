import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, MapPin, ChevronDown, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
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

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="page-wrapper"
    >
      <section className="section-padding bg-light" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="section-title-large mb-4"
              >
                Get in <span className="text-royal">Touch</span>
              </motion.h1>
              <p className="lead-text mb-5">We are here to answer your questions before you decide anything.</p>
              
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="icon"><PhoneCall size={24} /></div>
                  <div>
                    <h4>WhatsApp / Call</h4>
                    <a href="tel:7340094647" className="d-block text-royal font-weight-bold fs-4">7340094647</a>
                    <p className="text-muted mt-2 text-sm">For Financial Wisdom enquiries: Send "FW" on WhatsApp</p>
                  </div>
                </div>
                
                <div className="contact-info-card mt-4">
                  <div className="icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Location</h4>
                    <p className="font-weight-bold">Balotra, Rajasthan</p>
                    <p className="text-muted text-sm mt-1">Class Timings: Shared with each batch announcement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="contact-form-premium"
              >
                <h3>Send Enquiry</h3>
                <form className="mt-4">
                  <div className="form-group mb-4">
                    <label>Name</label>
                    <input type="text" className="form-control-editorial" placeholder="Your full name" required />
                  </div>
                  <div className="form-group mb-4">
                    <label>Mobile Number</label>
                    <input type="tel" className="form-control-editorial" placeholder="Your 10-digit number" required />
                  </div>
                  <div className="form-group mb-4">
                    <label>Course You Are Interested In</label>
                    <select className="form-control-editorial" required>
                      <option value="">Select a course</option>
                      <option value="fw">Financial Wisdom</option>
                      <option value="re">Real Estate Wealth Building</option>
                      <option value="rm">Relationship Mastery</option>
                    </select>
                  </div>
                  <div className="form-group mb-4">
                    <label>Message</label>
                    <textarea className="form-control-editorial" rows="4" placeholder="Any specific questions?"></textarea>
                  </div>
                  <button type="button" className="btn-editorial w-100 justify-content-center">
                    <Send size={18} /> Send Enquiry
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <h2 className="section-title-large text-center mb-5">Getting Started Is <span className="text-amethyst">Simple</span></h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Send Us a Message</h3>
              <p>WhatsApp us with the course you are interested in. For Financial Wisdom, just send “FW” to 7340094647.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Understand the Program</h3>
              <p>We will explain the course structure, timings, batch dates and fees. Ask us anything — there is no pressure.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Confirm Your Seat</h3>
              <p>Batches are small and seats are limited. Once you confirm, your place is reserved.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Start Learning</h3>
              <p>Attend your classes, apply what you learn, and stay connected through our monthly live sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title-large">Frequently Asked <span className="text-royal">Questions</span></h2>
          </div>
          <div className="faq-container mx-auto" style={{ maxWidth: '800px' }}>
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  <motion.div 
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-royal" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
