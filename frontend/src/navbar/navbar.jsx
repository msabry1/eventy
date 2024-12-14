import React from "react";
import "./Navbar.css"; // Include this CSS file for styling
import { FaTicketAlt, FaHome, FaUser } from "react-icons/fa";
import logo from '../assets/zzz.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Eventy Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <button className="navbar-button">
          <FaTicketAlt className="icon" />
          <span>My Tickets</span>
        </button>
        <button className="navbar-button">
          <FaHome className="icon" />
          <span>My Feed</span>
        </button>
        <button className="navbar-button">
          <FaUser className="icon" />
          <span>My Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
