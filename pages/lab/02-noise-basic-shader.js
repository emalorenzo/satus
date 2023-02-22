import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CanvasLayout } from 'layouts/canvas'
import { useRef } from 'react'

import { NoiseMaterial } from 'shaders'

function Scene() {
  const shaderRef = useRef()
  useFrame((_, delta) => (shaderRef.current.uTime += delta))
  return (
    <mesh scale={4}>
      <planeGeometry args={[0.5, 0.5, 32, 32]} />
      <noiseMaterial
        uSpeed={0.5}
        ref={shaderRef}
        key={NoiseMaterial.key}
        wireframe
      />
    </mesh>
  )
}

function NoiseBasicShader() {
  return (
    <CanvasLayout>
      <OrbitControls />
      <Scene />
    </CanvasLayout>
  )
}

export default NoiseBasicShader
