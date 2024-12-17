import './Skills.css'
import skills from '../../json/skills.json'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  const maxAngle = 10

  return (
    <>
      <div className="skills">
        <div className="screen-title"><h1>Mes compétences</h1></div>
        <div className="cards">
          {skills.map((skill, index) => (

            <Tilt key={index} tiltMaxAngleX={maxAngle} tiltMaxAngleY={maxAngle}>

              <div className="card">
                <div className="card-content">

                  <div className="img-container">
                    <img className="card-img" src={skill.src} />
                  </div>

                  <div className="card-txt">
                    <span>{skill.name}</span>
                  </div>

                </div>
              </div>

            </Tilt>

          ))}
        </div>
      </div>
    </>
  )
}

export default Skills