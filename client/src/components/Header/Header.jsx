import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink to="/">
          <img
            className="header-logo"
            src='client/src/assets/images/logo.png'
            alt="logo"
          />
        </NavLink>
        <div className="header-btns">
          <NavLink to="/constellations">
            Constellation
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;