import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-background-image">
      <div className="home-content">
        <div className="welcome-text">
          <h1>Oversee your future</h1>
          <NavLink to="/constellations">
            Create a Constellation
          </NavLink>
        </div>
        <div className="welcome-message">
          <p>
            OverC allows you to observe your
            workflow and improve efficiency,
            create a constellation to begin a session.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;