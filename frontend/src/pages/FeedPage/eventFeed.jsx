import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/navbar";
import EventsContainer from '../../components/FeedEvents/feedContainer';
import axios from 'axios';

const EventFeed = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImVtYWlsIjoieHl5eXpAZ21haWwuY29tIiwiaWF0IjoxNzM1MzUzOTc1LCJleHAiOjE3MzU0NDAzNzV9.ZhVBU6iLH8r9XR34O98sQyQCEmsjpC4iyEeNLI-EKfA";

  useEffect(() => {
    axios
      .get("https://31f4-197-48-148-54.ngrok-free.app/api/events/feed", {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token in the Authorization header
        },
      })
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
      <EventsContainer events={events} token={token} />
    </>
  );
};

export default EventFeed;
