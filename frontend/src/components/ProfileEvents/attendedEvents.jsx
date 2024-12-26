import React from 'react';
import "./eventcontainer.css";
import logo from '../../assets/lll.png';
import ProfileEvent from './profileEvent'; // Import the new component


const EventContainer = ({ title }) => {
  return (
    <>
      <div className="scrollable-container">
        <h3 className="container-title">{title}</h3>
        <div className="scrollable-content">
          {/* Dynamic data replaced by ProfileEvent components */}
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

export default EventContainer;
