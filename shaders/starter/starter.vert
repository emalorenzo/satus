uniform float uTime;
uniform float uSpeed;

void main() {
  vec3 newPosition = position;
  newPosition.z += sin((position.x + uTime) * uSpeed) * 0.1;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
