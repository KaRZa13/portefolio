import * as THREE from 'three'
import fragment from '../shaders/grid/fragment.glsl'
import vertex from '../shaders/grid/vertex.glsl'

const Background = () => {
  const geometry = new THREE.SphereGeometry(15, 64, 32)
  

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uGridSize: { value: 20.0 },
    },
    side: THREE.DoubleSide,
    transparent: true,
    vertexShader: vertex,
    fragmentShader: fragment
  })



  return (
    <>
      <mesh geometry={geometry} material={material}/>
    </>
  )
}

export default Background