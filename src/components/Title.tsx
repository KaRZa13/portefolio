import './styles/title.css'

const Title = () => {
  const name = 'Rafael MURO'

  return (
    <>
      <div className="container">
        <div className="green-rect">
          <div className="title">
            <h1>{ name }</h1>
          </div>
        </div>
      </div>
    </>
  )
}


export default Title