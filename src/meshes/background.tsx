import * as THREE from 'three'
import fragment from '../shaders/grid/fragment.glsl'
import vertex from '../shaders/grid/vertex.glsl'

const createBackground = () => {
  const geometry = new THREE.SphereGeometry(10, 40, 40)

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uGridSize: { value: 20.0 },
    },
    side: THREE.DoubleSide,
    transparent: true,
    vertexShader: vertex,
    fragmentShader: fragment
  })

  const mesh = new THREE.Mesh(geometry, material)

  return mesh
}

export default createBackground