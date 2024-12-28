import React, { useState } from 'react';
import './comments.css';

const Comments = ({ comments, onClose, handleNewComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      handleNewComment(newComment);
      setNewComment(''); // Reset the textarea after submission
    }
  };

  return (
    <div className="comments-modal">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>&times;</button>
        <h3>Comments</h3>

        {/* Displaying the existing comments */}
        <div className="comments-list">
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <strong>{comment.username}</strong>
                <p>{comment.comment}</p>
              </div>
            ))
          )}
        </div>

        {/* Textarea to write a new comment */}
        <div className="add-comment">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            rows="4"
          ></textarea>
          <button onClick={handleCommentSubmit}>Post Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
