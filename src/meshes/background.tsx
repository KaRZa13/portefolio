import * as THREE from 'three'
import fragment from '../shaders/grid/fragment.glsl'
import vertex from '../shaders/grid/vertex.glsl'

const CreateBackground = () => {
  const geometry = new THREE.SphereGeometry(10, 10, 10)
  // const material = new THREE.MeshBasicMaterial({
  //   color: 0xff00ff,
  //   side: THREE.DoubleSide,
  //   wireframe: true,
    
  // }) 

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uGridSize: { value: 20.0 },
    },
    vertexShader: vertex,
    fragmentShader: fragment
  })

  const mesh = new THREE.Mesh(geometry, material)
  
  return mesh
}

export default CreateBackground