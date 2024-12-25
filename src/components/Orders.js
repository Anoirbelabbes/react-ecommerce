import React, { useState, useEffect } from 'react';
import ordersData from './ordersData.json'; 
import './css_order/Orders1.css'; 
import './css_order/Orders2.css'; 
import './css_order/barre_de_recherche.css'; 
import './css_order/title.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(6); // Number of orders per page


  useEffect(() => {
    setOrders(ordersData);
  }, []);


  const filteredOrders = orders.filter((order) => {
    const term = searchTerm.toLowerCase();
    return (
      order.username.toLowerCase().includes(term) ||
      order.status.toLowerCase().includes(term) ||
      order.address.toLowerCase().includes(term) ||
      order.order_id.toString().includes(term)
    );
  });


  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      
      <div className="page-title">
        <h1 className="text-center">My Orders</h1>
        <p className="text-center">Review and manage your recent orders</p>
      </div>

      
      <div className="search-bar-modern mb-4">
        <input
          type="text"
          placeholder="Search by ID, username, status, or address..."
          className="form-control modern-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {currentOrders.length === 0 ? (
        <p className="lead text-center">No orders found.</p>
      ) : (
        <div className="orders-grid">
          {currentOrders.map((order) => (
            <div key={order.order_id} className="order-card">
              <h5 className="order-id">Order #{order.order_id}</h5>
              <p><strong>Customer:</strong> {order.username}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Order Date:</strong> {order.date_de_commande}</p>
              <p><strong>Delivery Date:</strong> {order.date_de_livraison}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> {order.total.toFixed(2)} €</p>
            </div>
          ))}
        </div>
      )}

     
      <div className="pagination mt-4">
        {Array.from({ length: Math.ceil(filteredOrders.length / ordersPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Orders;

