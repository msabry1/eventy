import React from "react";
import "./Navbar.css"; // Include this CSS file for styling
import { FaTicketAlt, FaHome, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import logo from '../../assets/zzz.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Eventy Logo" className="logo" />
      </div>
      <div className="navbar-links">
      <Link to="/myTickets">
        <button className="navbar-button">
          <FaTicketAlt className="icon" />
          <span>My Tickets</span>
        </button>
        </Link>
        <Link to="/myFeed">
        <button className="navbar-button">
          <FaHome className="icon" />
          <span>My Feed</span>
        </button>
        </Link>

        <Link to="/myProfile">

        <button className="navbar-button">
          <FaUser className="icon" />
          <span>My Profile</span>
          </button>
          </Link> 

          <Link to="/signIn">
          <button className="navbar-button">
          <FiLogOut className="icon" />
          <span>Log out</span>
          </button>
          </Link> 
                 

      </div>
    </nav>
  );
};

export default Navbar;
