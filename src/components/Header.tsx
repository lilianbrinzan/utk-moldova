import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="site-header"
    >
      <div className="header-logo-wrapper">
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="UTK-International.png" 
            alt="UTK International Logo" 
            className="header-logo"
            width={70}
            height={70}
          />
        </a>
      </div>
      <nav className="header-nav">
        <a href="#about" className="nav-link">About</a>
        <a href="#affiliation" className="nav-link">Affiliation</a>
        <a href="#subscribe" className="nav-link">Subscribe</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;
