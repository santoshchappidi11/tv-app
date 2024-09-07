import React from "react";
import "./Navbar.css";
import logo from "./../../Images/Screenshot 2024-09-07 115020.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        {" "}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>SHOWS</li>
            <li>LIVE TV</li>
            <li>SCHEDULE</li>
            <li>TV PROVIDER</li>
          </ul>
        </div>
        <div>
          <p>
            <i class="fa-solid fa-magnifying-glass"></i>search
          </p>
        </div>
      </div>

      <div className="nav-right">
        <p>SIGN IN</p>
        <button className="sign-in">
          TRY PARAMOUNT <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
