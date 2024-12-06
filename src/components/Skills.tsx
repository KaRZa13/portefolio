import './styles/Skills.css'
import ParallaxCard from './ParallaxCard'

const Skills = () => {
  return(
    <>
      <div className="main">
        <ParallaxCard name='HTML' src='./src/assets/html-logo.png'/>
        <ParallaxCard name='CSS' src='./src/assets/css-logo.png'/>
        <ParallaxCard name='JS' src='./src/assets/js-logo.png'/>
        <ParallaxCard name='GIT' src='./src/assets/git-logo.png'/>
        <ParallaxCard name='PYTHON' src='./src/assets/python-logo.png'/>
        <ParallaxCard name='REACT' src='./src/assets/react-logo.png'/>
      </div>
    </>
  )
}

export default Skills