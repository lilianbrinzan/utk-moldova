import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
        <img src="/logo.png" alt="UTK Logo" style={{ height: '40px' }} />
        UTK
      </div>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about" style={{ fontWeight: '500', color: 'var(--text-secondary)', transition: 'color 0.3s' }}>About</a>
        <a href="#subscribe" style={{ fontWeight: '500', color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Subscribe</a>
        <a href="#contact" style={{ fontWeight: '500', color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;
