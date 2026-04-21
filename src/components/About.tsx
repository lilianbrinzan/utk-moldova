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
        <h2>UTK</h2>
        <p>
          Survival, situational awareness, distance/time & disarming. 
        </p>
        <a href="https://ving-tsun-kung-fu.com/training/" target="_blank" rel="noopener noreferrer">
          <button className="primary-btn" style={{ marginTop: '1rem' }}>Curriculum</button>
        </a>
      </motion.div>
    </section>
  );
};

export default About;
