import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // using useLocation from react-router-dom to be able to know in which location in the app the user at and change in the style of the footer accordingly
  return (
    <div className="header">
      <Link to="/" className="title">
        Words Practice Game
      </Link>

      <hr className="divider" />
    </div>
  );
};

export default Header;
