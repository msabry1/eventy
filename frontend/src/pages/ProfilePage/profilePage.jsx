import React from "react";
import Navbar from "../../components/navbar/navbar"
import "./profilePage.css"
import Eventcontainer from "../../components/ProfileEvents/attendedEvents"
import CreatedEvents from "../../components/ProfileEvents/createdEvents";
import UserContainer from  "../../components/ProfileEvents/userContainer";


// Scrollable Container Component
const ProfilePage = () => {
  const userAttributes = {
    userName: "John William",
    userType: "User",
    userBio: "SHIIIIIIIIIIIIIIIIIIIIIT",
    userFollowers: 99999,
    userFollowing: 1,
    userTags: ["Sports", "Music", "Art", "Books","kero"]
  };
  return (
    <>
    <Navbar/>
    <div className="container-flex">
    <UserContainer {...userAttributes} />
    <CreatedEvents title="Events Created" />
    <Eventcontainer title="Events Attended" />
    </div>
    </>
  );
};

export default ProfilePage