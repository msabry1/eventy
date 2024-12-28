import React, { useState } from 'react';
import './eventCard.css';
import logo from '../../assets/lll.png';
import Comments from '../ToolBarForEventCard/comments';
import Toolbar from '../ToolBarForEventCard/toolBarForEventCard';

const EventCard = ({ eventData }) => {
  const [showComments, setShowComments] = useState(false);
  const [event, setEvent] = useState(eventData); // Store event state

  // Toggle visibility of comments
  const toggleComments = () => setShowComments(!showComments);

  // Handle vote updates (upvotes/downvotes)
  const handleVote = (voteType) => {
    setEvent((prevEvent) => {
      const updatedEvent = { ...prevEvent };
      if (voteType === 'upvote') {
        updatedEvent.upvotes += 1;
        if (updatedEvent.downvotes > 0) updatedEvent.downvotes -= 1; // Remove a downvote if there is one
      } else if (voteType === 'downvote') {
        updatedEvent.downvotes += 1;
        if (updatedEvent.upvotes > 0) updatedEvent.upvotes -= 1; // Remove an upvote if there is one
      } else if (voteType === 'remove') {
        // Remove any existing vote
        if (updatedEvent.upvotes > 0) updatedEvent.upvotes -= 1;
        if (updatedEvent.downvotes > 0) updatedEvent.downvotes -= 1;
      }
      return updatedEvent;
    });
  };

  return (
    <div className="event-card">
      <div className="event-info">
        <h3>{event.name}</h3>
        <p>{event.description.join(' ')}</p>
        <p>{event.date} at {event.time} | {event.location}</p>
        <p>Ticket Price: {event.price}</p>
        <div className="toolBarCard">
          <Toolbar
            onToggleComments={toggleComments}
            showComments={showComments}
            event={event}
            handleVote={handleVote} // Pass handleVote function
          />
        </div>
      </div>

      <div className="image-crop">
        <img src={logo} alt={event.name} className="event-image" />
      </div>

      {/* Comments Section */}
      {showComments && <Comments onClose={toggleComments} comments={event.comments} />}
    </div>
  );
};

export default EventCard;
