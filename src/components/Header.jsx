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

      {/*    <form className="form-inline my-2 my-lg-0">
        <div className="input-group input-group-sm">
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search..."
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-secondary btn-number">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </form> */}

      <div className="header_container">
        <ul className="header_nav">
          <li>
            <Link to="/product">Product</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
