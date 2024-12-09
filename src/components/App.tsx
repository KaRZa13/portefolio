import Title from './Title'
import Profil from './Profil'
import Skills from './Skills'
// import Project from './Project'

import './styles/App.css'

import { ReactLenis } from 'lenis/react'

const App = () => {

  return (
    <ReactLenis root options={{smoothWheel: true, orientation: 'vertical'}}>
        <Title/>
        <Profil/>
        <Skills/>
    </ReactLenis>
  )
}

export default App
