import React from 'react';
import { motion } from 'framer-motion';

const Subscribe = () => {
  return (
    <section className="subscribe-section" id="subscribe">
      <motion.div 
        className="content-block glass-card"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ textAlign: 'center' }}
      >
        <h2>Evolution through Knowledge</h2>
        <p>
          Subscribe to our YouTube channel or join the community to get the latest insights, training techniques, and updates.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <a href="https://www.youtube.com/@ghenadieceban4197" target="_blank" rel="noopener noreferrer">
            <button className="primary-btn" style={{ background: '#ef4444' }}>
              Subscribe on YouTube
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
