"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float, PresentationControls } from "@react-three/drei"

function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const ref = useRef()
  const { scene } = useGLTF(url)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = Math.sin(t / 4) / 4
    ref.current.rotation.z = Math.sin(t / 4) / 4
    ref.current.position.y = Math.sin(t / 2) / 10
  })

  return <primitive ref={ref} object={scene} scale={scale} position={position} rotation={rotation} />
}

export default function ThreeDBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Float rotationIntensity={1} speed={2}>
            <Model url="/assets/3d/duck.glb" scale={0.5} position={[-2, 0, 0]} />
            <mesh position={[2, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
              <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />
              <meshStandardMaterial color="#1f1d42" />
            </mesh>
            <mesh position={[0, 1.5, 0]}>
              <sphereGeometry args={[0.6, 32, 32]} />
              <meshStandardMaterial color="#ef7636" />
            </mesh>
          </Float>
        </PresentationControls>
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

