import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CanvasLayout } from 'layouts/canvas'
import { useControls } from 'leva'
import { useRef } from 'react'

import { NormalizedSinMaterial } from 'shaders'

function Scene() {
  const shaderRef = useRef()

  const { size, amplitude } = useControls({
    size: {
      min: 0.1,
      value: 0.5,
      max: 2,
    },
    amplitude: {
      min: 0,
      value: 0.2,
      max: 0.25,
    },
  })

  useFrame((_, delta) => (shaderRef.current.uTime += delta))
  return (
    <mesh scale={4}>
      <planeGeometry args={[size, size, 32, 32]} />
      <normalizedSinMaterial
        ref={shaderRef}
        key={NormalizedSinMaterial.key}
        uSize={size}
        uAmplitude={amplitude}
        wireframe
      />
    </mesh>
  )
}

function NormalizedSinShader() {
  return (
    <CanvasLayout>
      <OrbitControls />
      <Scene />
    </CanvasLayout>
  )
}

export default NormalizedSinShader
