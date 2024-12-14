import React from "react";
import Navbar from "../navbar/navbar";
import "./profile.css"
import Eventcontainer from "./eventcontainer";
import UserContainer from "./usercontainer";

// Scrollable Container Component
const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="container-flex">
    <Eventcontainer title="Events Created" />
    <Eventcontainer title="Events Attended" />
    </div>
    </>
  );
};

export default Profile