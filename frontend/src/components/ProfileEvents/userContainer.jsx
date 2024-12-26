import React from "react";
import "./userContainer.css"
import logo from '../../assets/lll.png';


const UserContainer = ({ userName, userType, userBio, userFollowers, userFollowing, userTags}) => {

  return (
    <div className="scrollable-container">
      <div className="profile-image-container">
        <img src={logo} alt="profile" className="profile-image" />
      </div>
      <div className="user-info">
        <h2 className="user-name">{userName}</h2>
        <p className="user-type">{userType}</p>
        <p className="user-bio">{userBio}</p>
      </div>
      <div className="stats-container">
          <span className="followers">followers<br/>{userFollowers} </span>
          <span className="following"> following<br/>{userFollowing}</span>
      </div>
      <div className="tags-container">
        {userTags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserContainer;