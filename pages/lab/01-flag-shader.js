import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CanvasLayout } from 'layouts/canvas'
import { useControls } from 'leva'
import { useRef } from 'react'

import { FlagMaterial } from 'shaders'

function Scene() {
  const shaderRef = useRef()

  const { speed } = useControls({
    speed: {
      min: 0,
      value: 3,
      max: 5,
    },
  })

  useFrame((_, delta) => {
    shaderRef.current.uTime += delta
  })
  return (
    <mesh scale={4} position-x={-1}>
      <planeGeometry args={[0.5, 0.5, 32, 32]} />
      <flagMaterial
        uSpeed={speed}
        ref={shaderRef}
        key={FlagMaterial.key}
        wireframe
      />
    </mesh>
  )
}

function FlagShader() {
  return (
    <CanvasLayout>
      <OrbitControls />
      <Scene />
    </CanvasLayout>
  )
}

export default FlagShader
