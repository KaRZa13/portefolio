import './styles/Skills.css'
import Tilt from 'react-parallax-tilt'
import Card from './Card'

const Skills = () => {
  const maxAngle = 10

  const skills = [
    {
      name: 'HTML',
      src: './src/assets/html-logo.png'
    }, 
  ]

  return(
    <>
      <div className="main">
        <h1>Mes compétences</h1>
        <div className="cards">
          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='HTML' src='./src/assets/html-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='CSS' src='./src/assets/css-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='JAVASCRIPT' src='./src/assets/js-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='TYPESCRIPT' src='./src/assets/ts-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='REACT' src='./src/assets/react-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='VUEJS' src='./src/assets/vue-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='NODE' src='./src/assets/node-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='PYTHON' src='./src/assets/python-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='PHP' src='./src/assets/php-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='SYMFONY' src='./src/assets/symfony-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='MYSQL' src='./src/assets/sql-logo.png'/>
          </Tilt>

          <Tilt tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
            <Card name='GIT' src='./src/assets/git-logo.png'/>
          </Tilt>

        </div>
      </div>
    </>
  )
}

export default Skills