import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  // using useLocation from react-router-dom to be able to know in which location in the app the user at and change in the style of the footer accordingly
  const location = useLocation();
  return (
    <div className={location.pathname === "/" ? "footer" : "specialFooter"}>
      Made with 💙 by
      <a href="https://www.linkedin.com/in/mohamed-abd-el-samie-620b6ba0/">
        {" "}
        Mohamed Abd El-Samie
      </a>
    </div>
  );
};

export default Footer;
