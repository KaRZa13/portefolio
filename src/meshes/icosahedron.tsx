import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useFBO } from '@react-three/drei'
import { folder, useControls } from 'leva'
import { v4 as uuidv4 } from 'uuid'


import fragment from '../shaders/icosahedron/fragment.glsl'
import vertex from '../shaders/icosahedron/vertex.glsl'


const Icosahedron = () => {
  const mesh = useRef<THREE.Mesh | null>(null)

  // This is our main render target where we'll render and store the scene as a texture
  const mainRenderTarget = useFBO()

  const {
    iorR,
    iorG,
    iorB,
    saturation,
    chromaticAberration,
    refraction
  } = useControls({
    ior: folder({
      iorR: { min: 1.0, max: 2.333, step: 0.001, value: 1.15 },
      iorG: { min: 1.0, max: 2.333, step: 0.001, value: 1.18 },
      iorB: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
    }),
    saturation: { value: 1.06, min: 1, max: 1.25, step: 0.01 },
    chromaticAberration: {
      value: 0.5,
      min: 0,
      max: 1.5,
      step: 0.01,
    },
    refraction: {
      value: 0.4,
      min: 0,
      max: 1,
      step: 0.01,
    },
  })

  const uniforms = useMemo(() => ({
    uTexture: {value: null},
    uIorR: { value: 1.0 },
    uIorG: { value: 1.0 },
    uIorB: { value: 1.0 },
    uRefractPower: { value: 0.2 },
    uChromaticAberration: {value: 1.0 },
    uSaturation: { value: 0.0 },
    winResolution: {
      value: new THREE.Vector2(
        window.innerWidth,
        window.innerHeight
      ).multiplyScalar(Math.min(window.devicePixelRatio, 2)),
    },
  }), [])

  useFrame((state) => {
    const { gl, scene, camera } = state
    if (mesh.current) {
      mesh.current.visible = false
      gl.setRenderTarget(mainRenderTarget)
      gl.render(scene, camera)
  
      if (mesh.current.material instanceof THREE.ShaderMaterial) {
        mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture

        mesh.current.material.uniforms.uIorR.value = iorR
        mesh.current.material.uniforms.uIorG.value = iorG
        mesh.current.material.uniforms.uIorB.value = iorB

        mesh.current.material.uniforms.uSaturation.value = saturation
        mesh.current.material.uniforms.uChromaticAberration.value = chromaticAberration
        mesh.current.material.uniforms.uRefractPower.value = refraction
      }
      gl.setRenderTarget(null)
      mesh.current.visible = true
    }
  });

  return (
    <>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25]} />
        <shaderMaterial
          key={uuidv4()}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
        />
      </mesh>
    </>
  )
}

export default Icosahedron