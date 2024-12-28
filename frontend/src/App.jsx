import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import SignUp from "./pages/sign-up/sign-up";
import SignIn from "./pages/sign-in/sign-in";
import ProfilePage from "./pages/ProfilePage/profilePage";
import TicketsPage from "./pages/TicketsPage/TicketsPage";
import EventFeed from "./pages/FeedPage/eventFeed";
import EventPage from "./pages/EventPage/eventPage";
import CreateEventPage from "./pages/CreateEvent/createEventPage";

function App() {
  const { isAuthenticated } = useUser(UserProvider); // Access authentication status

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            isAuthenticated ? <ProfilePage /> : <Navigate to="/signIn" />
          }
        />
        <Route
          path="/myProfile"
          element={
            isAuthenticated ? <ProfilePage /> : <Navigate to="/signIn" />
          }
        />
        <Route
          path="/myTickets"
          element={
            isAuthenticated ? <TicketsPage /> : <Navigate to="/signIn" />
          }
        />
        <Route
          path="/myFeed"
          element={isAuthenticated ? <EventFeed /> : <Navigate to="/signIn" />}
        />
        <Route
          path="/myProfile/createEvent"
          element={
            isAuthenticated ? <CreateEventPage /> : <Navigate to="/signIn" />
          }
        />
        <Route
          path="/eventPage"
          element={isAuthenticated ? <EventPage /> : <Navigate to="/signIn" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
