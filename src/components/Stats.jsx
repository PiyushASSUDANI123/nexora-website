import React from 'react';
import { Target, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { id: 1, icon: <Target size={32} />, label: "Expert Guidance" },
    { id: 2, icon: <ShieldCheck size={32} />, label: "Trust & Confidence" },
    { id: 3, icon: <TrendingUp size={32} />, label: "Growth Focused" },
    { id: 4, icon: <Users size={32} />, label: "Client First" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="stats-section">
      <div className="container">
        <motion.div 
          className="stats-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} className="stat-card" variants={itemAnim}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-label">{stat.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
