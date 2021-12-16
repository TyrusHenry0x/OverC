import { NavLink } from "react-router-dom";
import './Constellations.css'
import Fonts from '../../assets/fonts/Fonts';

const Constellations = (constellations) => {
  return (
    <div className="background-image">
      <Fonts />
      <div className="constellations-box">
        <h1>Constellations</h1>
        {constellations.constellations.map((constellation) => (
          <NavLink className='link' to={`/constellations/${constellation.id}`}>
            <div key={"constellation.name"} className="link-box">
              <p key={"constellation.id"}>{constellation.name}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div >
  )
}


export default Constellations;