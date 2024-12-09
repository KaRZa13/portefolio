import './styles/title.css'

const Title = () => {
  const name = 'Rafael MURO'

  return (
    <>
      <div className="title">
        <div className="green-rect">
          <div><h1>{ name }</h1></div>
        </div>
      </div>
    </>
  )
}


export default Title