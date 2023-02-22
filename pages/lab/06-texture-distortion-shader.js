import { OrbitControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CanvasLayout } from 'layouts/canvas'
import { useControls } from 'leva'
import { useRef } from 'react'
import { TextureDistortionMaterial } from 'shaders'

function Scene() {
  const shaderRef = useRef()

  const { noiseScale, speed, wireframe } = useControls({
    noiseScale: {
      min: 0.1,
      value: 1,
      max: 10,
    },
    speed: {
      min: 0,
      value: 0.4,
      max: 1,
    },
    wireframe: false,
  })

  const texture = useTexture('/images/fuji.jpg')

  useFrame((_, delta) => (shaderRef.current.uTime += delta))
  return (
    <mesh>
      <planeGeometry args={[5, 5, 250, 250]} />
      <textureDistortionMaterial
        ref={shaderRef}
        key={TextureDistortionMaterial.key}
        uTexture={texture}
        uSpeed={speed}
        uNoiseScale={noiseScale}
        wireframe={wireframe}
      />
    </mesh>
  )
}

function TextureDistortionShader() {
  return (
    <CanvasLayout>
      <OrbitControls />
      <Scene />
    </CanvasLayout>
  )
}

export default TextureDistortionShader
