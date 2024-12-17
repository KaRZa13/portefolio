import navTitles from '../../json/navTitles.json'
import './Nav.css'

const Nav = () => {

  return (
    <>
      <div className="nav">
        <ul className="cat">
          {navTitles.map((navTitle, index) => (
            <li className="items" key={index}>{navTitle.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Nav