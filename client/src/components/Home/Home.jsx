import './Home.css'
import { NavLink } from "react-router-dom"
import Fonts from '../../assets/fonts/Fonts'


const Home = () => {
  return (
    <div className="home-background-image">
      <Fonts />
      <div className="home-content">
        <div className="welcome-text">
          <h1>Oversee your Future</h1>
          <NavLink to="/constellations" className="const-link">
            See Constellations
          </NavLink>
        </div>
        <div className="welcome-message">
          <p className="welcome-message-text">
            OverC allows you to observe your
            workflow and improve efficiency,
            see constellations to begin a session.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;