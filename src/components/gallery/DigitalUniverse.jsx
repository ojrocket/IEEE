import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function ParticleUniverse() {
  const ref = useRef();
  
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.05;
    ref.current.rotation.z = time * 0.02;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3C72B0"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

const DigitalUniverse = () => {
  return (
    <section className="py-24 bg-ieee-deep relative h-[600px] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-black text-white/10 uppercase tracking-[0.5em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          UNIVERSE
        </motion.h2>
        
        <div className="relative text-center pt-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white uppercase tracking-widest mb-4"
          >
            Digital Universe
          </motion.h3>
          <div className="w-16 h-1 bg-ieee-cyan mx-auto rounded-full" />
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-[#020510]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <ParticleUniverse />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
             {/* Floating core */}
             <mesh>
               <sphereGeometry args={[1.5, 32, 32]} />
               <meshStandardMaterial 
                 color="#0a66c2" 
                 wireframe 
                 transparent 
                 opacity={0.3} 
               />
             </mesh>
          </Float>
        </Canvas>
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ieee-deep to-transparent z-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ieee-deep to-transparent z-10" />
    </section>
  );
};

export default DigitalUniverse;
