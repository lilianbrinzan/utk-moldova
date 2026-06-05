import React from 'react';
import { motion } from 'framer-motion';

const Affiliation: React.FC = () => {
  return (
    <section className="affiliation-section" id="affiliation">
      <motion.div
        className="affiliation-card glass-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="affiliation-grid">
          <div className="affiliation-image-wrapper">
            <div className="circular-container">
              <img
                src="BARAW-SUGBO.png"
                alt="Baraw Sugbo Logo"
                className="affiliation-logo"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
          </div>
          <div className="affiliation-text-block">
            <h2 className="tactical-heading">BARAW SUGBO</h2>
            <div className="tactical-divider" />
            <p className="affiliation-desc">
              Baraw Sugbo is the original martial arts system on which our techniques are based.
              UTK Moldova is proud to teach this authentic style of Filipino self-defense.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Affiliation;
