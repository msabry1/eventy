import React from 'react';
import Navbar from "../../components/navbar/navbar"
import EventsContainer from '../../components/FeedEvents/feedContainer';

const EventFeed = () => {
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
      organizers: "hamada",
      photos: [],
      comments: [
        { username: 'JohnDoe', comment: 'Great event! Looking forward to it.' },
        { username: 'JaneDoe', comment: 'Can’t wait to attend this event!' }
      ],
      upvotes: 0,
      downvotes: 0,
      showComments: false,
    },
    {
      id: 2,
      name: 'zena',
      description: ['Event Description', 'More details about the event'],
      details: "eventttt ooffff bomm ta555",
      date: 'DD/MM/YYYY',
      time: '07:00 PM EST',
      location: 'siko',
      price: '99$',
      image: 'path_to_event_image.jpg',
      organizers: "hamada",
      photos: [],
      comments: [
        { username: 'Alice', comment: 'Excited for this event!' },
        { username: 'Bob', comment: 'Looking forward to seeing the guests!' }
      ],
      upvotes: 2,
      downvotes: 1,
      showComments: false,
    },
    {
      id: 3,
      name: 'Event Name',
      description: ['Event Description', 'More details about the event'],
      details: "eventttt ooffff bomm ta555",
      date: 'DD/MM/YYYY',
      time: '07:00 PM EST',
      location: 'Location',
      price: '99$',
      image: 'path_to_event_image.jpg',
      organizers: "hamada",
      photos: [],
      comments: [
        { username: 'Charlie', comment: 'This event looks promising!' }
      ],
      upvotes: 1,
      downvotes: 0,
      showComments: false,
    },
  ];




  
  return (
    <>
      <Navbar />
      <EventsContainer events={events} />
    </>
  );
};

export default EventFeed;
