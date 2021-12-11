import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p className="footer-copyright">Copyright © 2021</p>

      <div className="small-logo-div">
        <img
          className="small-logo"
          src="client/src/assets/images/C-logo-300x300-removebg-preview.png"
          alt="overc logo" />

      </div>
    </footer>
  )
}

export default Footer;