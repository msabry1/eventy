import { useState, useEffect } from 'react';
import React from 'react';
import EventCard from './EventCard'; // Import EventCard component
import './feedContainer.css'; // CSS for styling

const EventsContainer = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  const searchByName = (data, searchString) => {
    return data.filter(item => 
      item.name.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  useEffect(() => {
    // Update filtered events whenever searchTerm changes
    setFilteredEvents(searchByName(events, searchTerm));
  }, [searchTerm, events]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="events-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsContainer;
