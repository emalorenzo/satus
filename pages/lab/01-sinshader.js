import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import { StarterShader } from 'shaders'

import styles from './01-sinshader.module.scss'

function Scene() {
  const shaderRef = useRef()
  useFrame((_, delta) => (shaderRef.current.uTime += delta))
  return (
    <mesh scale={4}>
      <planeGeometry args={[0.5, 0.5, 32, 32]} />
      <starterShader
        attach="material"
        uSpeed={5}
        ref={shaderRef}
        key={StarterShader.key}
      />
    </mesh>
  )
}

function SinShader() {
  return (
    <div className={styles.wrapper}>
      <Canvas>
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  )
}

export default SinShader
