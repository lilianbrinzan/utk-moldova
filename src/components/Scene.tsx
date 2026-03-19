import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

interface TacticalKnifeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

const TacticalKnife: React.FC<TacticalKnifeProps> = ({ ...props }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // 1. Blade Shape (Leaf-style curving up to a sharp point, matching logo)
  const bShape = new THREE.Shape();
  bShape.moveTo(0, 2.6); // Top point
  bShape.quadraticCurveTo(0.42, 1.2, 0.42, 0); // Right smooth curve down to straight edge
  bShape.lineTo(-0.42, 0); // Left across
  bShape.quadraticCurveTo(-0.42, 1.2, 0, 2.6); // Left smooth curve up to point
  
  const bladeGeo = new THREE.ExtrudeGeometry(bShape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.03, bevelSegments: 3 });
  bladeGeo.center();

  // 2. Crossguard Shape (Central triangle pointing up, sweeping curved wings)
  const gShape = new THREE.Shape();
  gShape.moveTo(-0.3, -0.4); // Start at bottom left (connection to handle)
  gShape.lineTo(0.3, -0.4); // Bottom straight to handle right
  gShape.lineTo(0.35, -0.1); // Slight taper up
  gShape.quadraticCurveTo(1.0, -0.1, 1.2, 0.1); // Sweep out right wing horn
  gShape.quadraticCurveTo(0.6, 0.2, 0.45, 0.25); // Sweep back in
  gShape.lineTo(0, 0.8); // Straight up to central triangle peak
  gShape.lineTo(-0.45, 0.25); // Down from peak left
  gShape.quadraticCurveTo(-0.6, 0.2, -1.2, 0.1); // Sweep out left wing horn
  gShape.quadraticCurveTo(-1.0, -0.1, -0.35, -0.1); // Sweep back in left
  gShape.lineTo(-0.3, -0.4); // Back to start

  const guardGeo = new THREE.ExtrudeGeometry(gShape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 3 });
  guardGeo.center();

  // 3. Pommel Shape (Flared metal leading to sharp bottom V)
  const pShape = new THREE.Shape();
  pShape.moveTo(-0.25, 0.2); // Top left (connects to leather)
  pShape.lineTo(0.25, 0.2); // Top right
  pShape.lineTo(0.4, -0.1); // Flare out
  pShape.lineTo(0, -0.5); // V Point
  pShape.lineTo(-0.4, -0.1); // Left Flare
  pShape.lineTo(-0.25, 0.2); // Close shape

  const pommelGeo = new THREE.ExtrudeGeometry(pShape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 3 });
  pommelGeo.center();

  const metalMaterial = <meshPhysicalMaterial color="#d1d5db" metalness={1} roughness={0.2} clearcoat={1} clearcoatRoughness={0.1} />;
  const darkMetalMaterial = <meshPhysicalMaterial color="#374151" metalness={0.8} roughness={0.4} />;
  const handleMaterial = <meshStandardMaterial color="#452a1a" roughness={0.9} metalness={0.1} />;
  const ringMaterial = <meshStandardMaterial color="#1a1a1a" roughness={0.8} />;

  return (
    <group ref={groupRef} {...props}>
      {/* Extruded Leaf Blade */}
      <mesh geometry={bladeGeo} position={[0, 1.7, 0]} castShadow receiveShadow>
        {metalMaterial}
      </mesh>

      {/* Blade Fuller (Central Dark Groove overlays on flat extrusion) */}
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
        {metalMaterial}
      </mesh>

      {/* Crossguard Circle (MD Area) overlaid on crossguard */}
      <mesh position={[0, -0.05, 0.12]} rotation={[Math.PI/2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.06, 32]} />
        {metalMaterial}
      </mesh>
      <mesh position={[0, -0.05, -0.12]} rotation={[Math.PI/2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.06, 32]} />
        {metalMaterial}
      </mesh>
      {/* Dark Inner Circle */}
      <mesh position={[0, -0.05, 0.14]} rotation={[Math.PI/2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.03, 32]} />
        {darkMetalMaterial}
      </mesh>
      <mesh position={[0, -0.05, -0.14]} rotation={[Math.PI/2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.03, 32]} />
        {darkMetalMaterial}
      </mesh>

      {/* Ribbed Leather Handle */}
      {/* Segment 1 */}
      <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.3, 16]} />
        {handleMaterial}
      </mesh>
      <mesh position={[0, -0.65, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.23, 0.23, 0.05, 16]} />
        {ringMaterial}
      </mesh>
      {/* Segment 2 */}
      <mesh position={[0, -0.85, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.3, 16]} />
        {handleMaterial}
      </mesh>
      <mesh position={[0, -1.0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.23, 0.23, 0.05, 16]} />
        {ringMaterial}
      </mesh>
      {/* Segment 3 */}
      <mesh position={[0, -1.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.3, 16]} />
        {handleMaterial}
      </mesh>
      <mesh position={[0, -1.35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.23, 0.23, 0.05, 16]} />
        {ringMaterial}
      </mesh>
      {/* Segment 4 */}
      <mesh position={[0, -1.55, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.3, 16]} />
        {handleMaterial}
      </mesh>

      {/* Extruded Pommel (V-shape without weird flat tip) */}
      <mesh geometry={pommelGeo} position={[0, -1.9, 0]} castShadow receiveShadow>
        {metalMaterial}
      </mesh>
    </group>
  );
};

const Scene: React.FC = () => {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      // Offset by scroll ratio
      const r1 = scroll.range(0, 1 / 3);
      const r2 = scroll.range(1 / 3, 1 / 3);
      const r3 = scroll.range(2 / 3, 1 / 3);

      // Hero to About transition (spin and move right)
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
