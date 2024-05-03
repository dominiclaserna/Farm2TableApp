import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Load user data from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Stored User:', storedUser);
  
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setLoggedIn(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
      }
    }
  }, []);
  

  const login = async (email, password) => {
    try {
      console.log('Logging in with:', email, password);
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('LOGGGED IN!');
        const userResponse = await axios.get('http://localhost:3001/get-user', {
          params: { email, password },
        });

        const userData = userResponse.data.user;
        setUser(userResponse);
        setUser(userData);
        setLoggedIn(true);
        

        // Save user data to local storage
        localStorage.setItem('user', JSON.stringify(userData));

        console.log(userData.firstName);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    // Redirect to the root path
window.location.href = '/';

    // Remove user data from local storage on logout
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
