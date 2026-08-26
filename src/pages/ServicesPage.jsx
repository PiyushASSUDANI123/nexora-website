import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="page-container"
    >
      <div className="section-padding" style={{ paddingTop: '150px' }}>
        <Services />
      </div>
    </motion.div>
  );
};

export default ServicesPage;
