import React from "react";
import "./eventcontainer.css"

// Scrollable Container Component
const EventContainer = ({ title }) => {
  return (
    <>
    <div className="scrollable-container">
      <h3 className="container-title">{title}</h3>
      <div className="scrollable-content">
        {/* Replace this content with dynamic data */}
        {[...Array(15).keys()].map((item) => (
          <div className="content-item" key={item}>
            Event {item + 1} <br/>
            Event Description<br/>
            Event Details
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default EventContainer