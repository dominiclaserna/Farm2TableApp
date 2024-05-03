import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import AdminNavbar from '../Navigation/NavbarAdmin';

const SalesReport = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getOrders');
      setOrders(response.data);
    } catch (error) {
      console.error('Fetch orders error:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []); 

  return (
    <div class="main-panel">
    <div class="sales-report-container">
  
      <table class="table report-table">
        <thead class="thead-light">
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
      
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.userId}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default SalesReport;
