// Orders.js
import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = () => {
      const fetchedOrders = [
        { id: 1, product: 'Product 1', status: 'Shipped', date: '2024-12-01' },
        { id: 2, product: 'Product 2', status: 'Processing', date: '2024-12-05' },
        { id: 3, product: 'Product 3', status: 'Delivered', date: '2024-12-08' },
      ];
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">My Orders</h2>
      {orders.length === 0 ? (
        <p className="lead text-center">You have no orders yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Product</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.status}</td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
