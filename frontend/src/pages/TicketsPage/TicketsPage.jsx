import { useState } from "react"
import EventTicket from "../../components/ticket/EventTicket"
import Navbar from "../../navbar/navbar"
import styles from "./TicketsPage.module.css"
const TicketsPage = () => {
    const [tickets, setTickets] = useState([
        {
            eventName:"Cairokeee Concert",
            dateTime:"2nd Dec 2024",
            location:"Baylor University, Bend Sewell",
            ticketStatus:"Ticket Not Activated"
        },
        {
            eventName:"Cairokeee Concert",
            dateTime:"2nd Dec 2024",
            location:"Baylor University, Bend Sewell",
            ticketStatus:"Ticket Not Activated"
        },
        {
            eventName:"Cairokeee Concert",
            dateTime:"2nd Dec 2024",
            location:"Baylor University, Bend Sewell",
            ticketStatus:"Ticket Not Activated"
        },
        {
            eventName:"Cairokeee Concert",
            dateTime:"2nd Dec 2024",
            location:"Baylor University, Bend Sewell",
            ticketStatus:"Ticket Not Activated"
        },
        {
            eventName:"Cairokeee Concert",
            dateTime:"2nd Dec 2024",
            location:"Baylor University, Bend Sewell",
            ticketStatus:"Ticket Not Activated"
        }
    ]);
    
    return (


        <>
            <Navbar />
            <div className={styles.container}>
            
                {
                    tickets.map((ticket, index)=>
                        <EventTicket key={index}
                            eventName={ticket.eventName}
                            dateTime={ticket.dateTime}
                            location={ticket.location}
                            ticketStatus={ticket.ticketStatus}
                        />
                    )
                }
            </div>
        </>
    )
}
export default TicketsPage