import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

import CreateBackground from '../meshes/background'

const MyThree: React.FC = () => {
  const refContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!refContainer.current) 
      return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    refContainer.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const cube = new THREE.Mesh(geometry, material)
    const background = CreateBackground()

    scene.add(background)
    scene.add(cube)

    camera.position.z = 5

    const orbits = new OrbitControls(camera, renderer.domElement)

    const animate = () => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    };

    renderer.setAnimationLoop(animate)

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(2)
    }

    window.addEventListener('resize', onWindowResize)

    // Gestion du nettoyage pour éviter les fuites de mémoire
    return () => {
      renderer.dispose()
      if (refContainer.current) {
        refContainer.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={refContainer} style={{ width: '100%', height: '100%' }} />
  )
}

export default MyThree;
