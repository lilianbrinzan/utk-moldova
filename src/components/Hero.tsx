import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <motion.div 
        className="content-block glass"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ maxWidth: '800px', background: 'transparent', border: 'none', boxShadow: 'none', backdropFilter: 'none' }}
      >
        <motion.h1 
          className="title-large"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          UNIVERSAL TACTICAL KNIFE
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Blade Defense Study Group
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
