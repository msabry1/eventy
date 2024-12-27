import React, { useState } from "react";
import "./userContainer.css";
import logoNoPic from "../../assets/user.png";

const UserContainer = (exampleUser) => {
  const [logo, setLogo] = useState(null);
  const [bio, setBio] = useState(exampleUser.userBio || "");
  const [isEditing, setIsEditing] = useState(false);
  const [tags, setTags] = useState(exampleUser.userTags || []);
  const [selectedTag, setSelectedTag] = useState(""); 

  const availableTags = [
    "Music", 
    "Sports", 
    "Art", 
    "Technology", 
    "Theater", 
    "Food & Drink", 
    "Festivals", 
    "Workshops", 
    "Conferences", 
    "Exhibitions"
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const cancelEdit = () => {
    setBio(exampleUser.userBio || ""); // Reset bio to its original value
    setIsEditing(false); // Close the editing mode
  };

  const addTag = () => {
    if (selectedTag && !tags.includes(selectedTag)) {
      setTags([...tags, selectedTag]);
      setSelectedTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="scrollable-container">
      <div className="profile-image-container">
        {logo ? (
          <img src={logo} alt="profile" className="profile-image" />
        ) : (
          <img src={logoNoPic} alt="profile" className="profile-image" />
        )}
        <div className="upload-button">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }} 
          />
          <label htmlFor="fileInput">+</label>
        </div>
      </div>
      <div className="user-info">
        <h2 className="user-name">{exampleUser.userName}</h2>
        <p className="user-type">{exampleUser.userType}</p>
        {/* Conditionally render either p tag or textarea based on isEditing state */}
        {isEditing ? (
          <textarea
            className="user-bio-editable"
            value={bio}
            onChange={handleBioChange}
            placeholder="Edit your bio here..."
          />
        ) : (
          <p className="user-bio">{bio}</p>
        )}
        <div>
          <button className="edit-button" onClick={toggleEdit}>
            {isEditing ? "Save Bio" : "Edit Bio"}
          </button>
          {isEditing && (
            <button className="cancel-button" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className="stats-container">
        <span className="followers">
          Followers<br />
          {exampleUser.userFollowers}
        </span>
        <span className="following">
          Following<br />
          {exampleUser.userFollowing}
        </span>
      </div>
      <div className="tags-container">
        {/* Render the existing tags and provide a way to remove them */}
        <div className="tag-list">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
              <button className="remove-tag" onClick={() => removeTag(tag)}>X</button>
            </span>
          ))}
        </div>
        {/* Dropdown list for selecting tags */}
        <div className="add-tag">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="new-tag-select"
          >
            <option value="">Select a tag</option>
            {availableTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <button onClick={addTag} className="add-tag-button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
