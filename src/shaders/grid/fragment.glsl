uniform float uGridSize;

varying vec2 vUv;

void main() {
    vec2 grid = abs(fract(vUv * uGridSize - 0.5) - 0.5) / fwidth(vUv * uGridSize);
    float line = min(grid.x, grid.y);
    vec3 color = vec3(1.0);
    float alpha = 1.0 - line;
    gl_FragColor = vec4(color, alpha);
}

