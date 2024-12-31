import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Leva } from 'leva'
// import { ReactLenis } from 'lenis/react'

// import Home from './Home'
import Profil from './components/Profil'
// import Skills from './Skills'
// import Projects from './Project'

import Background from './meshes/background'
import Icosahedron from './meshes/icosahedron'
import Text from './meshes/text'



const App: React.FC = () => {

  return (
    <div className='w-screen h-screen font-black text-tertiary text-lg italic bg-gray'>

      {/* <ReactLenis root options={{smoothWheel: true, orientation: 'vertical'}}>
        <Profil />
        <Home />
        <Skills /> 
        </ReactLenis> */}
      <Leva collapsed/>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 7]}} className='w-screen h-screen'>
        <ambientLight intensity={1.0}/>
        <Background/>
        <Text text="RAFAEL MURO" />
        <Icosahedron/>
        <OrbitControls/>
      </Canvas>
      <Profil/>
    </div>
  )
}

export default App
