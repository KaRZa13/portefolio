import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import { ReactLenis } from 'lenis/react'

// import Home from './Home'
// import Profil from './Profil'
import Skills from './Skills'
// import Projects from './Project'

import Background from '../meshes/background'
import Icosahedron from '../meshes/icosahedron'
import Text from '../meshes/text'



const App: React.FC = () => {

  return (
    <div className='w-screen h-screen font-black text-quaternary text-lg italic bg-background'>

      {/* <ReactLenis root options={{smoothWheel: true, orientation: 'vertical'}}>
        <Profil />
        <MyThree/>
        <Home />
        </ReactLenis> */}

      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} className='w-screen h-screen'>
        <Background/>
        <Icosahedron/>
        <Text text="RAFAEL MURO" />
        <OrbitControls/>
      </Canvas>
        <Skills />
    </div>
  )
}

export default App
