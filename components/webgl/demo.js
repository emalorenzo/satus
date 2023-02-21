import { MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@studio-freight/hamo'
import { editable as e } from '@theatre/r3f'
import { useRef } from 'react'

export function Demo({ scale, ...props }) {
  const ref = useRef()
  // const [viewport, camera] = useThree((state) => [
  //   state.gl,
  //   state.viewport,
  //   state.camera,
  // ])
  // const uniforms = useRef({
  //   u_time: {
  //     value: 0.0,
  //   },
  //   u_resolution: {
  //     type: 'v2',
  //     value: new THREE.Vector2(
  //       viewport.getCurrentViewport(camera).width,
  //       viewport.getCurrentViewport(camera).height
  //     ),
  //   },
  // })

  useFrame(() => {
    // ref.current.rotation.y += 0.01
  })

  // useFrame((state) => {
  //   const { clock } = state
  //   uniforms.current.u_time.value = clock.getElapsedTime()
  // })

  return (
    <>
      <e.group scale={scale} {...props} theatreKey="Cube">
        <mesh
          ref={ref}
          onClick={() => console.log('click')}
          onPointerOver={() => console.log('hover')}
          onPointerOut={() => console.log('unhover')}
        >
          <planeGeometry args={[1, 1, 32, 16]} />
          <MeshDistortMaterial
            speed={3}
            distort={0.2}
            // uniforms={uniforms.current}
            //             vertexShader={`
            // uniform float u_time;
            // varying vec2 vUv;

            // void main() {
            //   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            //   vUv = uv;
            // }
            //             `}
            //             fragmentShader={`
            // #define PI 3.14159265359

            // uniform vec2 u_resolution;
            // uniform vec2 u_mouse;
            // uniform float u_time;
            // varying vec2 vUv;

            // float plot(vec2 st, float pct){
            //   return  smoothstep( pct-0.02, pct, st.y) -
            //           smoothstep( pct, pct+0.02, st.y);
            // }

            // void main() {
            // vec2 st = gl_FragCoord.xy/u_resolution;

            // float y = sin(st.x * PI);

            // vec3 color = vec3(0.0);

            // float pct = plot(st,y);
            // color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

            // gl_FragColor = vec4(color,1.0);
            // }
            //           `}
          />
        </mesh>
      </e.group>
    </>
  )
}
