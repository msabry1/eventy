import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComments } from 'react-icons/fa';
import './toolBar.css';

const Toolbar = ({ onToggleComments, showComments, event, handleVote }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const toggleUpvote = () => {
    if (!upvoted) {
      handleVote('upvote');
      setUpvoted(true);
      setDownvoted(false); // Reset downvote when upvoted
    } else {
      setUpvoted(false);
    }
  };

  const toggleDownvote = () => {
    if (!downvoted) {
      handleVote('downvote');
      setDownvoted(true);
      setUpvoted(false); // Reset upvote when downvoted
    } else {
      setDownvoted(false);
    }
  };

  return (
    <div className="toolbar">
      <button className="book-button">Book Event</button>

      <div className="icon-container">
        <FaComments
          className="icon"
          onClick={onToggleComments}
          style={{ color: showComments ? '#007bff' : 'grey' }}
        />
        <span className="icon-count">{event.comments.length}</span>
      </div>

      <div className="icon-container">
        <FaThumbsUp
          className="icon"
          onClick={toggleUpvote}
          style={{ color: upvoted ? 'green' : 'grey' }}
        />
        <span className="icon-count">{event.upvotes}</span>
      </div>

      <div className="icon-container">
        <FaThumbsDown
          className="icon"
          onClick={toggleDownvote}
          style={{ color: downvoted ? 'red' : 'grey' }}
        />
        <span className="icon-count">{event.downvotes}</span>
      </div>
    </div>
  );
};

export default Toolbar;
