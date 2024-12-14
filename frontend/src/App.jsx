import './App.css'
import EventTicket from './components/ticket/EventTicket'

function App() {
  return (
    <>
      <h1 className='bg-slate-400'> COOL</h1>
      <EventTicket
        eventName="Cairokeee Concert"
        dateTime="2nd Dec 2024"
        location="Baylor University, Bend Sewell"
        ticketStatus="Ticket Not Activated"
      />
    </>
  )
}

export default App
