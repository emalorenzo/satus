import { generateShader } from 'lib/shader'
import fragment from './flag.frag'
import vertex from './flag.vert'

export const FlagMaterial = generateShader(
  'FlagMaterial',
  { uSpeed: 1, uTime: 1 },
  vertex,
  fragment
)
