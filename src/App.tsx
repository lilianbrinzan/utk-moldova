import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, ContactShadows } from '@react-three/drei';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Scene from './components/Scene';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <div className="canvas-container">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
          <color attach="background" args={['#f8fafc']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
          
          <Suspense fallback={null}>
            <ScrollControls pages={4} damping={0.2} distance={1.2}>
              <Scene />
              
              <Scroll html style={{ width: '100vw' }}>
                <Hero />
                <About />
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
