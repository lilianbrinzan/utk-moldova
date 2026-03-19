import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div 
        className="content-block glass-card"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <h2>The UTK Philosophy</h2>
        <p>
          Universal Tactical Knife Moldova (UTK) focuses primarily on survival, situational awareness, distance/time principles, and disarming the opponent. 
        </p>
        <p>
          More than just a physical discipline, UTK is an information portal that explains fundamental concepts of movement efficiency and energy economy for everyday self-defense.
        </p>
        <p>
          Our platform digitizes a traditional art, building a community and serving as a benchmark for student progression—from novice to advanced practitioner.
        </p>
        <a href="https://ving-tsun-kung-fu.com/training/" target="_blank" rel="noopener noreferrer">
          <button className="primary-btn" style={{ marginTop: '1rem' }}>Read Curriculum</button>
        </a>
      </motion.div>
    </section>
  );
};

export default About;
