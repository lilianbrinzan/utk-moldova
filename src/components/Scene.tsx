import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

interface TacticalKnifeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

const CarbonFiberShader = {
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color("#111111") },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    uniform vec3 color;
    uniform float time;
    void main() {
      // Procedural Carbon Fiber Weave
      vec2 uv = vUv * 40.0;
      float weave = step(0.5, fract(uv.x)) == step(0.5, fract(uv.y)) ? 0.7 : 0.9;
      
      // Add a subtle metallic sheen based on angle
      float sheen = pow(max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0) * 0.2;
      
      gl_FragColor = vec4(color * weave + sheen, 1.0);
    }
  `
};

const TacticalKnife: React.FC<TacticalKnifeProps> = ({ ...props }) => {
  const groupRef = useRef<THREE.Group>(null);
  const carbonRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (carbonRef.current) {
      carbonRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  // 1. Blade Shape (Leaf-style curving up to a sharp point)
  const bShape = new THREE.Shape();
  bShape.moveTo(0, 2.6); 
  bShape.quadraticCurveTo(0.42, 1.2, 0.42, 0); 
  bShape.lineTo(-0.42, 0); 
  bShape.quadraticCurveTo(-0.42, 1.2, 0, 2.6); 
  const bladeGeo = new THREE.ExtrudeGeometry(bShape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.03, bevelSegments: 3 });
  bladeGeo.center();

  // 2. Crossguard Shape (Central triangle + wings)
  const gShape = new THREE.Shape();
  gShape.moveTo(-0.3, -0.4); 
  gShape.lineTo(0.3, -0.4); 
  gShape.lineTo(0.35, -0.1); 
  gShape.quadraticCurveTo(1.0, -0.1, 1.2, 0.1); 
  gShape.quadraticCurveTo(0.6, 0.2, 0.45, 0.25); 
  gShape.lineTo(0, 0.8); 
  gShape.lineTo(-0.45, 0.25); 
  gShape.quadraticCurveTo(-0.6, 0.2, -1.2, 0.1); 
  gShape.quadraticCurveTo(-1.0, -0.1, -0.35, -0.1); 
  gShape.lineTo(-0.3, -0.4); 
  const guardGeo = new THREE.ExtrudeGeometry(gShape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 3 });
  guardGeo.center();

  // 3. Pommel Shape (V-shape)
  const pShape = new THREE.Shape();
  pShape.moveTo(-0.25, 0.2); 
  pShape.lineTo(0.25, 0.2); 
  pShape.lineTo(0.4, -0.1); 
  pShape.lineTo(0, -0.5); 
  pShape.lineTo(-0.4, -0.1); 
  pShape.lineTo(-0.25, 0.2); 
  const pommelGeo = new THREE.ExtrudeGeometry(pShape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 3 });
  pommelGeo.center();

  // Optimized PBR Materials
  const steelMaterial = (
    <meshPhysicalMaterial 
      color="#f8fafc" 
      metalness={1} 
      roughness={0.1} 
      clearcoat={1} 
      clearcoatRoughness={0.05}
      reflectivity={1}
    />
  );
  
  const carbonMaterial = (
    <shaderMaterial 
      ref={carbonRef}
      attach="material" 
      args={[CarbonFiberShader]} 
    />
  );

  const darkMetalMaterial = <meshPhysicalMaterial color="#334155" metalness={0.9} roughness={0.3} />;
  const ringMaterial = <meshStandardMaterial color="#0f172a" roughness={0.7} metalness={0.5} />;

  return (
    <group ref={groupRef} {...props}>
      {/* Extruded Leaf Blade */}
      <mesh geometry={bladeGeo} position={[0, 1.7, 0]} castShadow receiveShadow>
        {steelMaterial}
      </mesh>

      {/* Blade Fuller (Central Dark Groove) */}
      <mesh position={[0, 1.7, 0.06]} castShadow receiveShadow>
        <boxGeometry args={[0.12, 1.9, 0.04]} />
        {darkMetalMaterial}
      </mesh>
      <mesh position={[0, 1.7, -0.06]} castShadow receiveShadow>
        <boxGeometry args={[0.12, 1.9, 0.04]} />
        {darkMetalMaterial}
      </mesh>

      {/* Extruded Crossguard */}
      <mesh geometry={guardGeo} position={[0, 0, 0]} castShadow receiveShadow>
        {darkMetalMaterial}
      </mesh>

      {/* Crossguard Circle (MD Area) */}
      <group position={[0, -0.05, 0]}>
         <mesh position={[0, 0, 0.12]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.06, 32]} />
            {steelMaterial}
         </mesh>
         <mesh position={[0, 0, 0.14]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.03, 32]} />
            {darkMetalMaterial}
         </mesh>
      </group>

      {/* Carbon Fiber Handle Segments */}
      <group position={[0, -0.5, 0]}>
        {[0, -0.35, -0.7, -1.05].map((y, i) => (
          <React.Fragment key={i}>
            <mesh position={[0, y, 0]}>
              <cylinderGeometry args={[0.22, 0.22, 0.3, 32]} />
              {carbonMaterial}
            </mesh>
            {i < 3 && (
              <mesh position={[0, y - 0.175, 0]}>
                <cylinderGeometry args={[0.23, 0.23, 0.05, 32]} />
                {ringMaterial}
              </mesh>
            )}
          </React.Fragment>
        ))}
      </group>

      {/* Extruded Pommel */}
      <mesh geometry={pommelGeo} position={[0, -1.8, 0]} castShadow receiveShadow>
        {steelMaterial}
      </mesh>
    </group>
  );
};

const Scene: React.FC = () => {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      const r1 = scroll.range(0, 1 / 3);
      const r2 = scroll.range(1 / 3, 1 / 3);
      const r3 = scroll.range(2 / 3, 1 / 3);

      const targetX = r1 * 2 + (r2 * 0) - (r3 * 2); 
      const targetY = r1 * 1 - r2 * 2 + r3 * 1;
      const targetZ = -r1 * 2 + r2 * 1 + r3 * 3;

      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.1);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.1);
      group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, targetZ, 0.1);
      
      const targetRotationY = r1 * Math.PI * 2 + r2 * Math.PI - r3 * Math.PI;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.1);
    }
  });

  return (
    <group ref={group}>
      <TacticalKnife position={[0, 0, 0]} scale={0.9} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 5, 5]} intensity={1} color="#e2e8f0" />
    </group>
  );
};

export default Scene;
