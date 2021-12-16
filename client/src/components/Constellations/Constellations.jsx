import { NavLink } from "react-router-dom";
import './Constellations.css'
const Constellations = (constellations) => {
  return (
    <div className="background-image">
      <div className="constellations-box">
        <h1>Constellations</h1>
        {constellations.constellations.map((constellation) => (
          <NavLink className='link' to={`/constellations/${constellation.id}`}>
            <div className="link-box">
              <p key={constellation.id}>{constellation.name}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div >
  )
}


export default Constellations;