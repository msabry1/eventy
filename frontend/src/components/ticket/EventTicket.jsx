import React from 'react';
import styles from "./EventTicket.module.css"
import QR from "../../assets/QR.png"


const EventTicket = ({ eventName, dateTime, location, ticketStatus }) => {
  return (
    <div className={styles.eventTicket}>
      <div className={styles.eventDetails}>
        <h3>{eventName}</h3>
        <p>{dateTime}</p>
        <p>{location}</p>
        <p className={styles.ticketStatus}>{ticketStatus}</p>
      </div>
      <div className={styles.qrCode}>
        <img
          src={QR}
          alt="Event QR Code"
        />
      </div>
    </div>
  );
};

export default EventTicket;
