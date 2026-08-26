import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, MapPin } from 'lucide-react';

const ValueStrip = () => {
  const values = [
    {
      icon: <Users size={32} />,
      title: "Real Classroom, Real Teaching",
      desc: "No recorded videos playing on a screen. Every class is taught live, in person, with space to ask questions until the concept is clear."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Practical, Not Theoretical",
      desc: "No jargon and no textbook lectures. You learn frameworks you can apply to your income, savings, property decisions and relationships from the very next day."
    },
    {
      icon: <MapPin size={32} />,
      title: "Built for Our People",
      desc: "Designed for the families, shopkeepers, professionals and young earners of Balotra and nearby areas — in language and examples that make sense here."
    }
  ];

  return (
    <section className="value-strip">
      <div className="container">
        <div className="value-grid">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="value-card"
            >
              <div className="value-icon">{val.icon}</div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStrip;
