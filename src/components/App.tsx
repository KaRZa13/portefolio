import Title from './Title'
import Profil from './Profil'
import Skills from './Skills'
import Project from './Project'

import './styles/App.css'

import { ReactLenis } from 'lenis/react'

const images = [
  {
    id: 'projet-1',
    src: './assets/css-logo.png',
    alt: ''
  },
  {
    id: 'projet-2',
    src: '',
    alt: ''
  },
  {
    id: 'projet-3',
    src: '',
    alt: ''
  },
  {
    id: 'projet-4',
    src: '',
    alt: ''
  },
  {
    id: 'projet-5',
    src: '',
    alt: ''
  }
]


const App = () => {

  return (
    <ReactLenis root options={{smoothWheel: true, orientation: 'vertical'}}>
        <Title/>
        <Profil/>
        <Skills/>
        <Project images={images} content={<h1>Bonjour</h1>}/>
    </ReactLenis>
  )
}

export default App
