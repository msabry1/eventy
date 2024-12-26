import React from 'react';
import "./eventcontainer.css"

const ProfileEvent = ({ eventTitle, eventDescription, imageSource }) => {
  return (
    <div className="content-item">
      <div className="content-text">
        <h4>{eventTitle}</h4> {/* Title of the event */}
        <p>{eventDescription}</p> {/* Description of the event */}
      </div>
      <img src={imageSource} alt={eventTitle} className="content-image" />
    </div>
  );
};

export default ProfileEvent;
