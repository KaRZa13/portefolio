import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

import fragment from '../shaders/icosahedron/fragment.glsl'
import vertex from '../shaders/icosahedron/vertex.glsl'


const Icosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { gl, scene, camera } = useThree()
  
  const geometry = new THREE.IcosahedronGeometry(1.25)

  const material = new THREE.MeshPhysicalMaterial({
    roughness: 0.3,
    reflectivity: 0.1,
    transmission: 1,
    thickness: 0.4,
    color: 0xffffff
   })

  // const material = new THREE.ShaderMaterial({
  //   vertexShader: vertex,
  //   fragmentShader: fragment,
  //   uniforms: {
  //     iChannel0: {value: null},
  //     uCameraPosition: {value: new THREE.Vector3()}
  //   }
  // })

  // const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight)

  useFrame(() => {
    // Set the render target
    // gl.setRenderTarget(renderTarget)

    // Hide the Icosahedron object temporarily
    // if (meshRef.current) {
      // meshRef.current.visible = false
    // }

    // Render the scene to the render target
    // gl.render(scene, camera)

    // Restore the render target and show the Icosahedron object
    // gl.setRenderTarget(null)
    // if (meshRef.current) {
      // meshRef.current.visible = true
    // }

    // Update the texture uniform for the shader
    // material.uniforms.iChannel0.value = renderTarget.texture
    // material.uniforms.uCameraPosition.value.copy(camera.position)

    // Optionally, apply any rotation or animation to the mesh
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }

    // Final render to the screen
    gl.render(scene, camera)
  })

  return (
    <>
      <mesh ref={meshRef} geometry={geometry} material={material}/>
    </>
  )
}

export default Icosahedron