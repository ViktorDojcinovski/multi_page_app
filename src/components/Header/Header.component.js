import { useContext } from "react";
import styled from "styled-components";
import { /* NavLink, */ Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ThemeContext } from "../../contexts/ThemeContext";
import { login, logout } from "../../redux/actions";

import "./Header.styles.css";

const Button = styled.button`
  background-color: "#eee";
  color: "#222";
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 4px;
`;

// Frontend 70

const Header = () => {
  const location = useLocation();
  // const themeContext = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const isActive = (path) => {
    return location.pathname === path; // --> true false
  };

  const onClickLoginButton = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <>
      <div className="header_wrapper bg-primary">
        <div>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
          <Button onClick={onClickLoginButton}>
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default Header;
