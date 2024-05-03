import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="container mt-4">
      <div className="bg-light p-4 rounded">
        <h2 className="text-success">Sales Report - Orders</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>User ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              {/* Add more columns if needed */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.userId}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                {/* Add more columns if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
