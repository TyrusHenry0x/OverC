import { NavLink } from "react-router-dom";
import AboutLinks from "../AboutLinks/AboutLinks";
import './About.css'
const About = () => {
  return (
    <div className="about-background">
      <div className="about-page">
        <img
          src={require('../../assets/images/C-logo-300x300-removebg-preview.png').default}
          className="big-c"
        />
        <p>
          OverC is a task management application that focuses on timing and efficiency in your work day. As of current, this site is a prototype, and will be continously updated in the future.
        </p>
        <AboutLinks />
      </div>
    </div>
  )
}

export default About;