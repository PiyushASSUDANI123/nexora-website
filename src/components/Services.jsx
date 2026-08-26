import React from 'react';
import { Wallet, Home, Heart, Brain, Briefcase, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Financial & Wealth",
      icon: <Wallet size={32} />,
      items: ["Financial Wisdom", "Wealth Creation", "Portfolio", "Tax Saving", "Advisory"],
      size: "bento-large"
    },
    {
      id: 2,
      title: "Real Estate",
      icon: <Home size={32} />,
      items: ["Wealth Building", "Buying & Selling", "Rental", "Consulting"],
      size: "bento-medium"
    },
    {
      id: 3,
      title: "Relationship Consulting",
      icon: <Heart size={32} />,
      items: ["Pre-Marital", "Marital", "Family Dispute", "Property Dispute", "Relationships Master"],
      size: "bento-medium"
    },
    {
      id: 4,
      title: "Personal Counselling",
      icon: <Brain size={32} />,
      items: ["Career", "Mental Health", "Personal Growth", "Happiness Coaching"],
      size: "bento-large"
    },
    {
      id: 5,
      title: "Business Consulting",
      icon: <Briefcase size={32} />,
      items: ["Business Setup", "GST", "ITR", "Growth", "Loan Consulting"],
      size: "bento-half"
    },
    {
      id: 6,
      title: "Banking Services",
      icon: <Landmark size={32} />,
      items: ["Home Loan", "LAP", "Life Insurance", "Accounts", "Bank Wealth Creation"],
      size: "bento-half"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Premium Services</h2>
          <p className="section-subtitle">Comprehensive solutions tailored for your life, wealth, and business needs.</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className={`bento-card ${service.size}`} variants={itemAnim}>
              <div className="bento-icon-wrapper">
                <div className="bento-icon">{service.icon}</div>
              </div>
              <h3 className="bento-title">{service.title}</h3>
              <div className="bento-list">
                {service.items.map((item, index) => (
                  <span key={index} className="bento-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
