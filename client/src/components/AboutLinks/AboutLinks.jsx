import { NavLink } from "react-router-dom";
import './AboutLinks.css'

const AboutLinks = () => {
  return (
    <div className="about-div">
      <a href="https://github.com/TyrusHenry0x/OverC/blob/main/README.md">
        {/* <img className="about-links" src={require("../../assets/icons/github.svg").default} /> */}
        <p className="about-links" >Github</p>
      </a>

      <a href="https://www.linkedin.com/in/tyrus-henry-bb409021a/">
        {/* <img className="about-links" src={require('../../assets/icons/linkedin.svg').default} /> */}
        <p className="about-links" >Linkedin</p>
      </a>
    </div>
  )
}

export default AboutLinks;