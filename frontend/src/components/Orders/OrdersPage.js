import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './OrdersPage.css'; 

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getOrders'); 
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Handle error fetching orders
      }
    };

    fetchOrders();
  }, []); 

  const handleOrder = async (orderId) => {
    try {
      console.log(orderId)
      const response = await axios.post('http://localhost:3001/confirmOrder', {   objectId:orderId });
      console.log("Server Response from Order Completion", response);
      setOrders(prevOrders => [...prevOrders]); // Create a new reference
    } catch (error) {
      console.error("Error handling order command", error);
    }
  };
  
  const handleOrderProcessed = async (orderId) => {
    try {
      const response = await axios.post('http://localhost:3001/changeOrderStatus', {    objectId:orderId });
      console.log("Server Response from Order Status Change", response);
      setOrders(prevOrders => [...prevOrders]); // Create a new reference
    } catch (error) {
      console.error("Error handling order status change", error);
    }
  };
  
  return (
    <div class="container">
    <div class="orders-page-container">
     
      <table class="table orders-table">
        <thead class="thead-light">
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
       
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.userId}</td>
              <td>{order.OrderStatus === 1 ? 'Process Order' : 'Order Not Processed'}</td>
              <td>
                {order.orderStatus === 1 ? (
                  <button class="btn btn-primary" onClick={() => handleOrder(order._id)}>Process Order</button>
                ) : (
                  <button class="btn btn-success" onClick={() => handleOrderProcessed(order._id)}>Order Processed</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default OrdersPage;
