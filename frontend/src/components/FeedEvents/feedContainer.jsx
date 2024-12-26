import React from 'react';
import EventCard from './EventCard'; // Import EventCard component
import './feedContainer.css'; // CSS for styling

const EventsContainer = ({ events }) => {
  return (
    <div className="events-container">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsContainer;
