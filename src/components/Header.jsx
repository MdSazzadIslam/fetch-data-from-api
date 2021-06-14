import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
