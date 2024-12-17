import Title from '../Home/Title'
import Profil from '../Profil/Profil'
import Skills from '../Skills/Skills'
// import Project from '../Project/Project'

import './App.css'


import { ReactLenis } from 'lenis/react'



const App = () => {


  return (
    <>
      <ReactLenis root options={{smoothWheel: true, orientation: 'vertical'}}>
        <Title />
        <Profil />
        <Skills />
      </ReactLenis>
      {/* <ReactLenis root options={{smoothWheel: true, orientation: 'horizontal'}}>
        <Project />
      </ReactLenis> */}
    </>
  )
}

export default App
