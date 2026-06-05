import { motion } from 'framer-motion';
import { Youtube, Facebook, Instagram, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <motion.div 
          className="content-block glass-card contact-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
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

        {/* Partners Extended Footer */}
        <motion.div 
          className="partners-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="partners-title">AFFILIATIONS & PARTNERS</h3>
          
          <div className="partners-flow">
            {/* UTK Moldova (Local Brand) */}
            <div className="partner-item">
              <div className="partner-logo-container">
                <img 
                  src="favicon_cropped.png" 
                  alt="UTK Moldova Logo" 
                  className="partner-logo"
                  width={120}
                  height={120}
                  loading="lazy"
                />
              </div>
              <span className="partner-label">UTK Moldova</span>
            </div>

            {/* Connection Arrow */}
            <div className="partner-arrow">
              <span className="arrow-desktop">→</span>
              <span className="arrow-mobile">↓</span>
            </div>

            {/* UTK International (International Affiliation) */}
            <div className="partner-item">
              <div className="partner-logo-container">
                <img 
                  src="UTK-International.png" 
                  alt="UTK International Logo" 
                  className="partner-logo"
                  width={120}
                  height={120}
                  loading="lazy"
                />
              </div>
              <span className="partner-label">UTK International</span>
            </div>

            {/* Connection Arrow */}
            <div className="partner-arrow">
              <span className="arrow-desktop">→</span>
              <span className="arrow-mobile">↓</span>
            </div>

            {/* Baraw Sugbo (Base System) */}
            <div className="partner-item">
              <div className="partner-logo-container">
                <img 
                  src="BARAW-SUGBO.png" 
                  alt="Baraw Sugbo Logo" 
                  className="partner-logo"
                  width={120}
                  height={120}
                  loading="lazy"
                />
              </div>
              <span className="partner-label">Baraw Sugbo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
