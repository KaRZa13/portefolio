import { ReactLenis, useLenis } from 'lenis/react'
import './styles/App.css'
import Title from './Title'
import Profil from './Profil'
import Skills from './Skills'

const App = () => {
  const lenis = useLenis(({ scroll }) => {

  })

  return (
    <ReactLenis root>
      <div className="title">
        <Title/>
      </div>

      <div className="profil">
        <Profil/>
      </div>

      <div className="skills">
        <Skills/>
      </div>
    </ReactLenis>
  )
}

export default App
