import React, { useState } from 'react';
import './eventCard.css'; // CSS for styling
import logo from '../../assets/lll.png';
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa'; // Import the FaHeart icon from react-icons

const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false); // State to manage if the event is liked

  const toggleLike = () => {
    const newLikedStatus = !liked; 
    setLiked(newLikedStatus);
    console.log(`Event ID: ${event.id}, Liked: ${newLikedStatus}`);
  };
  return (
    <div className="event-card">
      <div className="event-info">
        <Link to="/eventPage" state={{event}}>
          <h3>{event.name}</h3>
        </Link>
        <p>{event.description.join(' ')}</p>
        <p>{event.date} at {event.time} | {event.location}</p>
        <p>Ticket Price: {event.price}</p>
        <button className="book-button">Book Now</button>

        <FaHeart 
          className={`heart-icon ${liked ? 'liked' : ''}`} 
          onClick={toggleLike}
          style={{ color: liked ? 'red' : 'grey', marginLeft: '10px', cursor: 'pointer' }}
        />
      </div>
      <div className='image-crop'>
        <img src={logo} alt={event.name} className="event-image" />
      </div>
    </div>
  );
};

export default EventCard;
