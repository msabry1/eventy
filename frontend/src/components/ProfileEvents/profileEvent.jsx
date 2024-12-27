import React from 'react';
import "./eventcontainer.css";
import { Link } from "react-router-dom";
import logo from '../../assets/lll.png';  // Ensure correct path

const ProfileEvent = ({ event }) => {

  return (
    <div className="content-item">
      <div className="content-text">
        <Link to="/eventPage" state={{event}}>
        <h4>{event.name}</h4> {/* Title of the event, extracted from event object */}
        </Link>
        <p>{event.description}</p> {/* Description of the event, extracted from event object */}
      </div>
      <img src={logo} alt={event.name} className="content-image" />
    </div>
  );
};

export default ProfileEvent;
