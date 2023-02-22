precision mediump float;

uniform sampler2D uTexture;
// uniform float uMixThreshold;

varying float vNoise;
varying vec2 vUv;

void main() {
  // vec3 bottomColor = vec3(1., 1., 1.);
  // float normalizedNoise = 0.5 * (vNoise + 1.0);

  // vec3 color = mix(bottomColor, texture.xyz, normalizedNoise + uMixThreshold);

  vec2 newUV = vUv;

  newUV = vec2(newUV.x + vNoise * 0.5, newUV.y + vNoise * 0.5);

  vec4 texture = texture2D(uTexture, newUV);
  gl_FragColor = texture;
}
