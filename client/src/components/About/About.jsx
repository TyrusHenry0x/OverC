import { NavLink } from "react-router-dom";
import AboutLinks from "../AboutLinks/AboutLinks";

const About = () => {
  return (
    <div className="about-background">
      <div className="about-page">
        <img
          src='client/src/assets/images/C-logo-300x300-removebg-preview.png'
        />
        <p>
          OverC is a task management application that focuses on timing and efficiency in your work day. As of current, this site is a prototype, and will be continously updated in the future.
        </p>
        <AboutLinks />
      </div>
    </div>
  )
}