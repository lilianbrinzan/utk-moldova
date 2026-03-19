import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Facebook, Instagram, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <motion.div 
        className="content-block glass-card"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', minWidth: '400px' }}
      >
        <h2>Get in Touch</h2>
        <p>Join the UTK Moldova community and refine your discipline.</p>
        
        <div className="social-links">
          <a href="https://www.youtube.com/@ghenadieceban4197" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Youtube size={28} />
          </a>
          <a href="https://www.facebook.com/groups/3380582805297978" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Facebook size={28} />
          </a>
          <a href="https://www.instagram.com/cebanghenadie74/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram size={28} />
          </a>
          <a href="https://wa.me/37368151177" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Phone size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
