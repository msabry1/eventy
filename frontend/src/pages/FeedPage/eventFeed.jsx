import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/navbar";
import EventsContainer from '../../components/FeedEvents/feedContainer';
import axios from 'axios';
import { axiosInstance } from '../../services/authService';

const EventFeed = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axiosInstance.get('api/events/feed')
      .then((response) => {
        setEvents(response.data); // Set the fetched events
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load events');
        setLoading(false);
      });
  }, []);
  console.log(events)
  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <EventsContainer events={events} />
    </>
  );
};

export default EventFeed;
