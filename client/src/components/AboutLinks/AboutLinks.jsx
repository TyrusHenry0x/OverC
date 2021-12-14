import { NavLink } from "react-router-dom";

const AboutLinks = () => {
  return (
    <div className="about-links">
      <a href="https://github.com/TyrusHenry0x/OverC/blob/main/README.md">
        <img src={require("../../assets/icons/github.svg").default} />
      </a>

      <a href="https://www.linkedin.com/in/tyrus-henry-bb409021a/">
        <img src={require('../../assets/icons/linkedin.svg').default} />
      </a>
    </div>
  )
}

export default AboutLinks;