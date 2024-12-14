import React from "react";
import Navbar from "../navbar/navbar";
import "./usercontainer.css"

// Scrollable Container Component
const UserContainer = () => {
  return (
    <>
    <div className="scrollable-container">
      <div className="scrollable-content">
        {/* Replace this content with dynamic data */}
        {[...Array(15).keys()].map((item) => (
          <div className="content-item" key={item}>
            Item {item + 1}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default UserContainer