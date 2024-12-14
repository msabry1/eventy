import React from "react";
import Navbar from "../navbar/navbar";
import "./profile.css"
import Eventcontainer from "./eventcontainer";
import UserContainer from  "./usercontainer"


// Scrollable Container Component
const Profile = () => {
  const userAttributes = {
    userName: "John William",
    userType: "User",
    userBio: "Life is Hard, but I always smile",
    userFollowers: 99999,
    userFollowing: 1,
    userTags: ["Sports", "Music", "Art", "Books"]
  };
  return (
    <>
    <Navbar/>
    <div className="container-flex">
    <UserContainer {...userAttributes} />
    <Eventcontainer title="Events Created" />
    <Eventcontainer title="Events Attended" />
    </div>
    </>
  );
};

export default Profile