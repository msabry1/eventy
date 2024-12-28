import { useState } from 'react'
import SignUp from "./pages/sign-up/sign-up"
import SignIn from "./pages/sign-in/sign-in"
import ProfilePage from './pages/ProfilePage/profilePage'
import TicketsPage from './pages/TicketsPage/TicketsPage'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EventFeed from './pages/FeedPage/eventFeed'
import EventPage from './pages/EventPage/eventPage'
import CreateEventPage from './pages/CreateEvent/createEventPage'


function App() {


  return (
    <>

      <Router>
      <Routes>
      <Route path="" element={<ProfilePage/>} />

      <Route path="/signIn" element={<SignIn/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/myProfile" element={<ProfilePage/>} />
      <Route path="/myTickets" element={<TicketsPage/>} />
      <Route path="/myFeed" element={<EventFeed/>} />
      <Route path="/myProfile/createEvent" element={<CreateEventPage/>} />
      <Route path="/eventPage" element={<EventPage/>} />
    


      </Routes>
    </Router>

    </>
  )
}

export default App
