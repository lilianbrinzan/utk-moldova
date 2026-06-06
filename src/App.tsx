import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, ContactShadows } from '@react-three/drei';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Affiliation from './components/Affiliation';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Scene from './components/Scene';

import './App.css';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let pageIndex = 0;
      
      if (hash === '#about') pageIndex = 1;
      else if (hash === '#affiliation') pageIndex = 2;
      else if (hash === '#info') pageIndex = 3;
      else if (hash === '#contact') pageIndex = 4;
      else if (hash === '#home') pageIndex = 0;
      else return; // If hash is empty or unrecognized, do nothing
      
      const container = document.querySelector('.canvas-container');
      if (!container) return;
      
      // Find the scrollable overlay div created by ScrollControls (which has overflow style)
      const scrollContainer = Array.from(container.querySelectorAll('div')).find((el) => {
        const style = window.getComputedStyle(el);
        return (
          style.overflowY === 'auto' || 
          style.overflowY === 'scroll' || 
          style.overflow === 'auto' || 
          style.overflow === 'scroll'
        );
      });
      
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: pageIndex * window.innerHeight,
          behavior: 'smooth'
        });
      }
    };

    // Listen for hash changes (clicking nav links)
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash on load (with a small timeout to let the canvas render)
    const timer = setTimeout(handleHashChange, 500);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      
      <div className="canvas-container">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
          <color attach="background" args={['#f8fafc']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
          
          <Suspense fallback={null}>
            <ScrollControls pages={5} damping={0.2} distance={1.2}>
              <Scene />
              
              <Scroll html style={{ width: '100vw' }}>
                <Hero />
                <About />
                <Affiliation />
                <Subscribe />
                <Contact />
              </Scroll>
            </ScrollControls>
            <Environment preset="city" />
            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
