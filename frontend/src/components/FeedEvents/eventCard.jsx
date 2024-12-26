import React from 'react';
import './eventCard.css'; // CSS for styling
import logo from '../../assets/lll.png';
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-info">
        <Link to="/eventPage">
        <h3>{event.name}</h3>
        </Link>
        <p>{event.description.join(' ')}</p>
        <p>{event.date} at {event.time} | {event.location}</p>
        <p>Ticket Price: {event.price}</p>
        <button className="book-button">Book Now</button>
      </div>
      <div className='image-crop'>
        <img src={logo} alt={event.name} className="event-image" />
      </div>
    </div>
  );
};

export default EventCard;
