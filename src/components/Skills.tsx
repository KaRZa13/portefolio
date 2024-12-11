import './styles/Skills.css'
import skills from '../json/skills.json'
import Tilt from 'react-parallax-tilt'
import Card from './Card'

const Skills = () => {
  const maxAngle = 10

  return(
    <>
      <div className="skills">
        <h1>Mes compétences</h1>
        <div className="cards">
          {skills.map((skill, index) => (
            //  <Tilt key={index} tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>
              <Card name={skill.name} src={skill.src}/>
            //  </Tilt>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills