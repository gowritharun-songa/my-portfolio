'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Html, useProgress } from '@react-three/drei'
import { useRef, Suspense } from 'react'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-2"></div>
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{Math.round(progress)}%</span>
      </div>
    </Html>
  )
}

function AnimatedSphere() {
  const sphereRef = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2
      sphereRef.current.rotation.y = time * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[-10, -10, -5]} intensity={1} />
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}