import { generateShader } from 'lib/shader'
import fragment from './normalized-sin.frag'
import vertex from './normalized-sin.vert'

export const NormalizedSinMaterial = generateShader(
  'NormalizedSinMaterial',
  { uSize: 0.5, uAmplitude: 0.2 },
  vertex,
  fragment
)
