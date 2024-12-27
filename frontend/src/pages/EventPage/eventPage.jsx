import React from 'react';
import './eventPage.css'; // Ensure to create and import the corresponding CSS
import logo from '../../assets/lll.png';
import Navbar from '../../components/navbar/navbar';
import { useLocation } from "react-router-dom";


const EventPage = () => {
  const location = useLocation(); 
  const {event} = location.state || {}; 


  return (
    <>
    <Navbar/>
    <div className="event-page">
      <div className="image-container">
        <img src={logo} alt={event.name} className="ev-image" />
      </div>
      <div className="event-infoo">
        <div className='top-cont'>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        </div>
        <button className="book-button">Book Now</button>
      </div>
      <div className="event-additional-info">
        <div className="event-organizers">
          <h2>Event Organizers</h2>
          <p>{event.organizers}</p>
        </div>
        <div className="event-photos">
          <h2>Event Photos</h2>
          {/* Map through photos if they are in an array */}
          {event.photos.map((photo, index) => (
            <img key={index} src={logo} alt={`Event ${index}`} className="event-photo" />
          ))}
        </div>
        <div className="event-details">
          <h2>Event Details</h2>
          <p>{event.details}</p>
        </div>
      </div>




      





    </div>
    </>
  );
};

export default EventPage;
