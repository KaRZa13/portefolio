import { useEffect } from 'react'
import './styles/ParallaxCard.css'

interface ParallaxCardProps {
  src: string,
  name: string
}

const ParallaxCard = (props: ParallaxCardProps) => {
  useEffect(() => {
    const parallaxEffect = (document: any, tiltEffect:string) => {
      const container = document.querySelector('.container-card')
      const size = [300, 360]
      const [w, h] = size

      const handleMouseMove = (event:any) => {
        const {offsetX, offsetY} = event
        let X = 0, Y = 0

        if (tiltEffect === 'reverse') {
          X = ((offsetX - w / 2) / 3) / 3;
          Y = (-(offsetY - h / 2) / 3) / 3;
        } else if (tiltEffect === 'normal') {
          X = (-(offsetX - w / 2) / 3) / 3;
          Y = ((offsetY - h / 2) / 3) / 3;
        }

        container.style.setProperty('--rY', X.toFixed(2))
        container.style.setProperty('--rX', Y.toFixed(2))
        container.style.setProperty('--bY', (80 - Math.floor(X / 4)) + '%')
        container.style.setProperty('--bX', (50 - Math.floor(Y / 4)) + '%')
      }

      const handleMouseEnter = () => {
        container.classList.add('container--active')
      }

      const handleMouseLeave = () => {
        defaultStates()
      }

      const defaultStates = () => {
        container.classList.remove('container--active')
        container.style.setProperty('--rY', 0)
        container.style.setProperty('--rX', 0)
        container.style.setProperty('--bY', '80%')
        container.style.setProperty('--Bx', '50%')
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseenter', handleMouseEnter)
      document.addEventListener('mouseleave', handleMouseLeave)
    }
    const card = document.querySelector(".card")

    parallaxEffect(card, 'normal')
  }, [])


  return (
    <>
      <div className="card">
        <div className="container-card">
          <img src={props.src}/>
          <p>{props.name}</p>
        </div>
      </div>
    </>
  )
}

export default ParallaxCard