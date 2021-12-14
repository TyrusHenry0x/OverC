import { NavLink } from "react-router-dom";
import './Constellations.css'
const Constellations = (constellations) => {
  return (
    <div className="background-image">
      <div className="Constellations">
        <h1>Constellations</h1>
        {constellations.constellations.map((constellation) => (
          <NavLink to={`/constellations/${constellation.id}`}>
            <p key={constellation.id}>{constellation.name}
            </p>
          </NavLink>
        ))}
      </div>
    </div >
  )
}

export default Constellations;