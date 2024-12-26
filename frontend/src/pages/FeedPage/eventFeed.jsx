import React from 'react';
import Navbar from "../../components/navbar/navbar"
import EventsContainer from '../../components/FeedEvents/feedContainer';

const EventFeed = () => {
  const events = [
    {
      id: 1,
      name: 'Event Name',
      description: ['Event Description', 'More details about the event'],
      date: 'DD/MM/YYYY',
      time: '07:00 PM EST',
      location: 'Location',
      price: '99$',
      imageUrl: 'path_to_event_image.jpg'
    },
    {
        id: 1,
        name: 'Event Name',
        description: ['Event Description', 'More details about the event'],
        date: 'DD/MM/YYYY',
        time: '07:00 PM EST',
        location: 'Location',
        price: '99$',
        imageUrl: 'path_to_event_image.jpg'
      },
      {
        id: 1,
        name: 'Event Name',
        description: ['Event Description', 'More details about the event'],
        date: 'DD/MM/YYYY',
        time: '07:00 PM EST',
        location: 'Location',
        price: '99$',
        imageUrl: 'path_to_event_image.jpg'
      },
    // More events here
  ];

  return (
    <>
      <Navbar />
      <EventsContainer events={events} />
    </>
  );
};

export default EventFeed;
