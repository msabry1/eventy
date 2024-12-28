import React from "react";
import "./eventcontainer.css";
import logo from '../../assets/lll.png';  // Ensure correct path
import ProfileEvent from './profileEvent'; // Ensure the name matches the exported component exactly
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Scrollable Container Component
const CreatedEvents = ({ title }) => {

  const nav = useNavigate()
  const handleAddEevent = ()=>{
     nav("/myProfile/createEvent")
  }


  // Arbitrary array of event objects
  const events = [
    {
      id: 1,
      name: 'hamada',
      description: ['Event Description', 'More details about the event'],
      date: 'DD/MM/YYYY',
      time: '07:00 PM EST',
      location: 'Location',
      price: '99$',
      image: 'path_to_event_image.jpg',
      organizers:"hamada",
      photos:[]
    },
    {
        id: 2,
        name: 'zena',
        description: ['Event Description', 'More details about the event'],
        details:"eventttt ooffff bomm ta555",
        date: 'DD/MM/YYYY',
        time: '07:00 PM EST',
        location: 'siko',
        price: '99$',
        image: 'path_to_event_image.jpg',
        organizers:"hamada",
        photos:[]
      },
      {
        id: 3,
        name: 'Event Name',
        description: ['Event Description', 'More details about the event'],
        details:"eventttt ooffff bomm ta555",
        date: 'DD/MM/YYYY',
        time: '07:00 PM EST',
        location: 'Location',
        price: '99$',
        image: 'path_to_event_image.jpg',
        organizers:"hamada",
        photos:[]
      },
  ];
  console.log(events);

  return (
    <>
      <div className="scrollable-container">
        <div className="container-title">
          {title}
            <button className="addEventButton" onClick={handleAddEevent}>+</button>
        </div>
        <div className="scrollable-content">
          {/* Map over the events array to create a ProfileEvent for each event */}
          {events.map((event, index) => {
  return <ProfileEvent key={index} event={event} />;
})}

        </div>
      </div>
    </>
  );
};

export default CreatedEvents;
