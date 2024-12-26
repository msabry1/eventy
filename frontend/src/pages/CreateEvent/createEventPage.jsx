import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Navbar from '../../components/navbar/navbar';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS
import './createEventPage.css'

const CreateEventForm = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDescription: '',
    eventTime: new Date(), // Initialize with the current date
    eventLocation: '',
    eventPrice: '',
    eventImage: '' // New state for storing the image file

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setEventData(prevState => ({
      ...prevState,
      eventTime: date
    }));
  };

  const handleImageChange = (e) => {
    setEventData(prevState => ({
      ...prevState,
      eventImage: e.target.files[0] // Store the selected file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(eventData).every(field => {
      if (typeof field === 'string') return field.trim() !== '';
      return true;
    });
    if (!allFieldsFilled) {
      alert('Please fill all the fields.');
      return;
    }
    console.log(JSON.stringify(eventData)); // Replace with your API call
    setEventData({
        eventName: '',
        eventDescription: '',
        eventTime: new Date(), // Initialize with the current date
        eventLocation: '',
        eventPrice: '',
        eventImage: null // New state for storing the image file
      })
  };

  return (
    <>
<Navbar />
<form onSubmit={handleSubmit} className="event-form">
  <div className="form-group">
    <label htmlFor="eventName">Event Name</label>
    <input
      type="text"
      id="eventName"
      name="eventName"
      placeholder="Enter the event name"
      value={eventData.eventName}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="eventDescription">Event Description</label>
    <textarea
      id="eventDescription"
      name="eventDescription"
      placeholder="Describe the event"
      value={eventData.eventDescription}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="eventTime">Event Time</label>
    <DatePicker
      selected={eventData.eventTime}
      onChange={handleDateChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className="date-picker"
    />
  </div>

  <div className="form-group">
    <label htmlFor="eventLocation">Event Location</label>
    <input
      type="text"
      id="eventLocation"
      name="eventLocation"
      placeholder="Location of the event"
      value={eventData.eventLocation}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="eventPrice">Event Price</label>
    <input
      type="text"
      id="eventPrice"
      name="eventPrice"
      placeholder="Price of the ticket"
      value={eventData.eventPrice}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="eventImage">Event Image</label>
    <input
      type="file"
      id="eventImage"
      name="eventImage"
      onChange={handleImageChange}
      required
    />
  </div>

  <button type="submit" className="submit-button">Add Event</button>
</form>
</>

  );
};

export default CreateEventForm;
