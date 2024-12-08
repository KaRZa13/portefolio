import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'

import './styles/Project.css'

gsap.registerPlugin(ScrollTrigger)

interface ProjecProps{
  images : { id: string, src: string, alt: string}[]
  content: React.ReactNode
}

const Project = (props: ProjecProps) => {

  return (
    <>
     
    </>
  )
}

export default Project