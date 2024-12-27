import React from 'react';
import "./eventcontainer.css";
import logo from '../../assets/lll.png';
import ProfileEvent from './profileEvent'; // Import the new component


const EventContainer = ({ title }) => {
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
  
  return (
    <>
      <div className="scrollable-container">
        <h3 className="container-title">{title}</h3>
        <div className="scrollable-content">
          {/* Dynamic data replaced by ProfileEvent components */}
          {events.map((event, index) => {
  console.log("zzzzzzzz", event); // Check what each 'event' contains
  return <ProfileEvent key={index} event={event} />;
})}
        </div>
      </div>
    </>
  );
};

export default EventContainer;
