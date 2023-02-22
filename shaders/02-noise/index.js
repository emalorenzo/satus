import { generateShader } from 'lib/shader'
import fragment from './noise.frag'
import vertex from './noise.vert'

export const NoiseMaterial = generateShader(
  'NoiseMaterial',
  { uSpeed: 1, uTime: 1 },
  vertex,
  fragment
)
