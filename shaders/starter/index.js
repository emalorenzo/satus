import { generateShader } from 'lib/shader'
import fragment from './starter.frag'
import vertex from './starter.vert'

export const StarterShader = generateShader(
  'StarterShader',
  { uSpeed: 1, uTime: 1 },
  vertex,
  fragment
)
