import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import AdminNavbar from '../Navigation/NavbarAdmin';
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(response => {
        setUsers(response.data);
        console.log('Fetched users:', response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const containerStyle = {
    backgroundImage: "url('https://t3.ftcdn.net/jpg/06/25/24/06/360_F_625240658_fjbLBYSUd4q2kC96iItS3GBXAJJBcxgq.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 57.05px)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const listItemStyle = {
    backgroundColor: 'rgba(240, 248, 255, 0.8)', // Light cyan background for list items
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between', // Align items horizontally
    width: '300px', // Example width; adjust as needed
  };

  const headingStyle = {
    color: '#c9ff9c', // Lighter shade of yellow-green for the heading
    marginBottom: '15px', // Add spacing below the heading
  };

  return (
    <div className="main-panel container-fluid">
      {/* <AdminNavbar /> */}
      <div className="container" style={containerStyle}>
        <h2 className="mt-3 mb-4" style={headingStyle}>Users</h2>
        <ul className="list-unstyled">
          {users.map(user => (
            <li key={user.userId} className="mb-3" style={listItemStyle}>
              <span>{user.firstName} {user.lastName}</span>
              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};


export default UserList;
