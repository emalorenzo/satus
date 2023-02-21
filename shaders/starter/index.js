import { generateShader } from 'lib/shader'
import fragment from './starter.frag'
import vertex from './starter.vert'

console.log('fragment', fragment)
console.log('vertex', vertex)

export const StarterShader = generateShader(
  'StarterShader',
  { uSpeed: 1, uTime: 1 },
  vertex,
  fragment
)

console.log('shader', StarterShader)
