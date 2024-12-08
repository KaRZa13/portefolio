import './styles/Card.css'

interface CardProps {
  src: string,
  name: string
}

const Card = (props: CardProps) => {

  return (
    <>
      <div className="card">
          <div className="card-content">

            <div className="img-container">
              <img className="card-img" src={props.src}/>
            </div>

            <div className="card-txt">
              <span>{props.name}</span>
            </div>

          </div>
      </div>
    </>
  )
}

export default Card
