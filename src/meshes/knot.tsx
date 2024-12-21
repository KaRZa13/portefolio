import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'

interface KnotProps {
  texture: THREE.Texture
}

const createKnot: React.FC<KnotProps> = ({ texture }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const {camera} = useThree()

  useEffect(() => {
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } )

    if (meshRef.current) {
      meshRef.current.material = material
    }

  }, [texture, camera])

  useFrame(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uCameraPosition.value.copy(camera.position)
    }
  })

  // const geometry = new THREE.TorusKnotGeometry(1, 0.25, 100, 20)
  // const mesh = new THREE.Mesh(geometry, material)
  
  // const update = (texture: THREE.Texture, camera: THREE.Camera)
  
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.25, 100, 20]}/>
    </mesh>
  )
}

export default createKnot
