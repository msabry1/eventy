import React from "react";
import "./eventcontainer.css"
import logo from '../../assets/lll.png';
import ProfileEvent from './profileEvent'; // Import the new component
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



// Scrollable Container Component
const CreatedEvents = ({ title }) => {
  const nav = useNavigate()
  const handleAddEevent = ()=>{
     nav("/myProfile/createEvent")
  }
  return (
    <>
    <div className="scrollable-container">
      <div className="container-title">{title}
      <button className="addEventButton" onClick={handleAddEevent}>+</button>
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