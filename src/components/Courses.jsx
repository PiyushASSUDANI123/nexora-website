import React from 'react';
import { BookOpen, LineChart, Users, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Financial Wisdom",
      description: "Learn. Invest. Grow. Create Real Wealth.",
      icon: <LineChart size={40} />
    },
    {
      id: 2,
      title: "Real Estate Wealth Building",
      description: "Build Wealth Through Smart Property Decisions.",
      icon: <BookOpen size={40} />
    },
    {
      id: 3,
      title: "Relationships Master",
      description: "Stronger Relationships. Happier Life.",
      icon: <Users size={40} />
    },
    {
      id: 4,
      title: "How to Get Happiness",
      description: "Inner Peace. Positive Mind. Better Life.",
      icon: <Smile size={40} />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="courses" className="section-padding bg-dark text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white">Courses We Offer</h2>
          <p className="section-subtitle text-white-muted">Master skills to transform your life and business.</p>
        </motion.div>
        
        <motion.div 
          className="courses-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course) => (
            <motion.div key={course.id} className="course-premium-card" variants={itemAnim}>
              <div className="course-icon-large">{course.icon}</div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
