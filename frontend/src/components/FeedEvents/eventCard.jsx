import React, { useState, useEffect } from 'react';
import './eventCard.css';
import logo from '../../assets/lll.png';
import Comments from '../ToolBarForEventCard/comments';
import Toolbar from '../ToolBarForEventCard/toolBarForEventCard';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../services/authService';

const EventCard = ({ eventData }) => {
  const [showComments, setShowComments] = useState(false);
  const [event, setEvent] = useState(eventData); // Store event state
  const [comments, setComments] = useState([]); // Store comments state
  const [loading, setLoading] = useState(false); // Loading state for comments
  const [error, setError] = useState(null); // Error state for comments

  // Toggle visibility of comments
  const toggleComments = () => setShowComments(!showComments);

  // Format event date to Egypt local time
  const formatEventDate = (eventDate) => {
    const date = new Date(eventDate);
    return date.toLocaleString('en-GB', { // 'en-GB' for a more universal date format
      weekday: 'long', // e.g., Monday
      year: 'numeric',
      month: 'long', // e.g., November
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // 12-hour format
      timeZone: 'Africa/Cairo', // Set the time zone to Cairo
    });
  };


  // Fetch comments when the component mounts or the event changes
  useEffect(() => {
    async function fetchComments() {
        const response = await axiosInstance.get("/comments/"+event.id)
        if (response.ok) {
          const data = await response.json();
          setComments(data); // Set fetched comments in state
        } else {
          throw new Error('Failed to fetch comments');
        }
      
    }
    fetchComments()
  }, [event.id]);


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
        
        <Link to="/eventPage" state={{event}}>
         <h4>{event.name}</h4> 
        </Link>
        <p>{event.description}</p>
        <p>{formatEventDate(event.date)} | {event.location}</p>
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
      {loading && <p>Loading comments...</p>}
      {error && <p>Error: {error}</p>}
      {showComments && !loading && !error && (
        <Comments onClose={toggleComments} comments={comments} handleNewComment={(newComment)=> setComments([...comments, newComment])} />
      )}
    </div>
  );
};

export default EventCard;
