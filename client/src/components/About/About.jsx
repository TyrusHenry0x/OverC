import { NavLink } from "react-router-dom";
import Fonts from "../../assets/fonts/Fonts";
import AboutLinks from "../AboutLinks/AboutLinks";
import './About.css'
const About = () => {
  return (

    <div className="about-background">
      <Fonts />
      <div className="about-page">
        <img
          src={require('../../assets/images/C-logo-300x300-removebg-preview.png').default}
          className="big-c"
        />
        <p className="about-text">
          OverC is a task management application that focuses on timing and efficiency in your work day. As of current, this site is a prototype, and will be continously updated in the future.
        </p>
        <div className="about-div">
          <a href="https://github.com/TyrusHenry0x/OverC/blob/main/README.md">
            <p className="about-links" >Github</p>
          </a>
          <a href="https://www.linkedin.com/in/tyrus-henry-bb409021a/">
            <p className="about-links" >Linkedin</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;