import { NavLink } from "react-router-dom";

const Constellations = (constellations) => {
  return (
    <div className="background-image">
      <div className="Constellations">
        <h1>Constellations</h1>
        {constellations.constellations.map((constellation) => (
          <NavLink to={`/constellations/${constellation.id}/tasks`}>
            <p key={constellation.id}>{constellation.name}
            </p>
          </NavLink>
        ))}
      </div>
    </div >
  )
}

export default Constellations;