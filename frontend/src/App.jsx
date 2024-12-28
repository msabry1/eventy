import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import CreateEventPage from "./pages/CreateEvent/createEventPage";
import EventPage from "./pages/EventPage/eventPage";
import EventFeed from "./pages/FeedPage/eventFeed";
import ProfilePage from "./pages/ProfilePage/profilePage";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import TicketsPage from "./pages/TicketsPage/TicketsPage";
import { isAuthenticated } from "./services/authService";


// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/signIn" replace />;
  }
  return children;
};

function App() {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={ <ProtectedRoute><ProfilePage /></ProtectedRoute>}
        />
        <Route
          path="/myProfile"
          element={ <ProtectedRoute><ProfilePage /></ProtectedRoute>}
        />
        <Route
          path="/myTickets"
          element={<ProtectedRoute><TicketsPage /></ProtectedRoute>}
        />
        <Route
          path="/myFeed"
          element={<ProtectedRoute><EventFeed /></ProtectedRoute>}
        />
        <Route
          path="/myProfile/createEvent"
          element={<ProtectedRoute><CreateEventPage /></ProtectedRoute>}
        />
        <Route
          path="/eventPage"
          element={<ProtectedRoute><EventPage /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
