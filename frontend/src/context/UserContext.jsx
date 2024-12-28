import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import UserService from "../services/UserService";
import { getAuthData } from "../services/authAxios";
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async () => {
    const { cocokieToken } = getAuthData();

    if(token){
      setToken(cocokieToken)
      setIsAuthenticated(true)
    } else {
      const data = await UserService.fetchUserById(0);

    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    setUser,
    token,
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
