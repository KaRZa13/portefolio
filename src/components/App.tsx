import { ReactLenis } from 'lenis/react'

import Home from './Home'
import Profil from './Profil'
import Skills from './Skills'
// import Projects from './Project'

const App = () => {

  return (
    <div className='font-black text-quaternary text-lg italic bg-background'>
      <ReactLenis root options={{smoothWheel: true, orientation: 'vertical'}}>
        <Home />
        <Profil />
        <Skills />
      </ReactLenis>
      {/* <ReactLenis root options={{smoothWheel: true, orientation: 'horizontal'}}>
        <Project />
      </ReactLenis> */}
    </div>
  )
}

export default App
