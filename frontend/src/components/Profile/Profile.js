import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Authorization/AuthContext';

const ProfileDashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async (email) => {
      try {
        const response = await axios.get('http://localhost:3001/getOrders', {
          params: { email},
        });

        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    getOrders();
  }, [user?.userId]);

  return (
        <div className="col-md-6">
          <div className="card p-4" style={{ backgroundColor: '#D4A373', boxShadow: '0px 10px 20px gray', color: 'white', fontSize: '2rem' }}>
            <h2 className="card-title mb-2">Orders</h2>
            <table className="table table-bordered table-hover">
    <thead className="thead-light">
      <tr>
        <th>Product Name</th>
        <th>Product Type</th>
        <th>Order Status</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.orderId} >
          <td>{order.productName}</td>
          <td>{order.productType}</td>
          <td>{order.orderStatus === 1 ? 'Processing' : 'On Delivery'}</td>
        </tr>
      ))}
    </tbody>
  </table>
          </div>
        </div>
 
  );
};

export default ProfileDashboard;
