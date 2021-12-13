import './Home.css'
import { NavLink } from "react-router-dom"
import Layout from '../Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home-background-image">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro&family=Pacifico&family=Roboto:wght@300&display=swap" rel="stylesheet" />
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
    </Layout>
  )
}

export default Home;