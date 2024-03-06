import { useContext } from "react";
import { /* NavLink, */ Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Header.styles.css";

// Frontend 70

const Header = () => {
  const location = useLocation();
  // const themeContext = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  console.log("location", location);

  const isActive = (path) => {
    return location.pathname === path; // --> true false
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="header_wrapper bg-primary">
        {/* Frontend 70 */}
        <Link to="about" className={isActive("/about") ? "active" : ""}>
          About
        </Link>
        <Link to="contact" className={isActive("/contact") ? "active" : ""}>
          Contact
        </Link>
        {/* <NavLink to="about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="contact" activeClassName="active">
          Contact
        </NavLink> */}
      </div>
    </>
  );
};

export default Header;
