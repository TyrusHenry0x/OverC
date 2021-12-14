import { NavLink } from "react-router-dom";
import './Constellations.css'
const Constellations = (constellations) => {
  return (
    <div className="background-image">
      <div className="constellations-box">
        <h1>Constellations</h1>
        {constellations.constellations.map((constellation) => (
          <div className="link-box">
            <NavLink className='link' to={`/constellations/${constellation.id}`}>
              <p key={constellation.id}>{constellation.name}
              </p>
            </NavLink>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Constellations;