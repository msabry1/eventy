import React from 'react';
import './eventPage.css'; // Ensure to create and import the corresponding CSS
import logo from '../../assets/lll.png';
import Navbar from '../../components/navbar/navbar';

const EventPage = () => {
    const event = {
        name: 'Community Festival',
        description: 'Join us for a day of fun, food, and festivities!',
        imageUrl: 'url_to_event_image.jpg',
        organizers: 'Local Community Group',
        photos: ['url_to_photo1.jpg', 'url_to_photo2.jpg'],
        details: 'This event is free and open to the public. Activities start at noon.'
      };

  return (
    <>
    <Navbar/>
    <div className="event-page">
      <div className="image-container">
        <img src={logo} alt={event.name} className="ev-image" />
      </div>
      <div className="event-infoo">
        <div className='top-cont'>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        </div>
        <button className="book-button">Book Now</button>
      </div>
      <div className="event-additional-info">
        <div className="event-organizers">
          <h2>Event Organizers</h2>
          <p>{event.organizers}</p>
        </div>
        <div className="event-photos">
          <h2>Event Photos</h2>
          {/* Map through photos if they are in an array */}
          {event.photos.map((photo, index) => (
            <img key={index} src={logo} alt={`Event ${index}`} className="event-photo" />
          ))}
        </div>
        <div className="event-details">
          <h2>Event Details</h2>
          <p>{event.details}</p>
        </div>
      </div>




      





    </div>
    </>
  );
};

export default EventPage;
