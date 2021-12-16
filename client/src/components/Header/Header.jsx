import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink to="/">
          <img
            className="header-logo"
            src={require('../../assets/images/logo.png').default}
            alt="logo"
          />
        </NavLink>
        <div className="header-btns">
          <NavLink to="/constellations" className="header-btns">
            Constellation
          </NavLink>
          <NavLink to="/about" className="header-btns">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;