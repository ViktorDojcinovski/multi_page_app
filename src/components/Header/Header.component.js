import { Link } from "react-router-dom";

import "./Header.styles.css";

const Header = () => {
  return (
    <>
      <div className="header_wrapper">
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </>
  );
};

export default Header;
