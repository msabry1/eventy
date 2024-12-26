import React from "react";
import "./eventcontainer.css"
import logo from '../../assets/lll.png';
import ProfileEvent from './profileEvent'; // Import the new component
import { Link } from "react-router-dom";



// Scrollable Container Component
const CreatedEvents = ({ title }) => {
  return (
    <>
    <div className="scrollable-container">
      <div className="container-title">{title}
        <Link to="createEvent">
      <button className="addEventButton">+</button>
      </Link>
      </div>
      <div className="scrollable-content">
        {/* Replace this content with dynamic data */}
        {[...Array(15).keys()].map((item) => (
            <ProfileEvent
              key={item}
              eventTitle={`Event ${item + 1}`}
              eventDescription="Event Description"
              imageSource={logo} // Adjust the image source as necessary
            />
          ))}
      </div>
    </div>
    </>
  );
};

export default CreatedEvents