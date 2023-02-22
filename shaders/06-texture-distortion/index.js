import { generateShader } from 'lib/shader'
import fragment from './texture-distortion.frag'
import vertex from './texture-distortion.vert'

export const TextureDistortionMaterial = generateShader(
  'TextureDistortionMaterial',
  {
    uNoiseScale: 4,
    uAmplitude: 0.2,
    uTime: 0,
    uSpeed: 1,
    uMixThreshold: 0.5,
    uTexture: null,
  },
  vertex,
  fragment
)
