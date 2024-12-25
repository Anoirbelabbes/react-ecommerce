import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faHistory, faShoppingCart, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../products/detail/CartContext";

function Profil() {
  const [userInfo, setUserInfo] = useState({
    name: "Belabbes Anouar",
    email: "anouar.belabbes@gmail.com",
    address: "Berkane",
    phone: "+212 654 13 53 04",
    orders: [
      { id: 1, date: "2024-11-01", total: "$100", status: "Shipped" },
      { id: 2, date: "2024-10-21", total: "$50", status: "Delivered" },
    ],
  });
  const { cartItems } = useCart();

  return (
    <div className="container mt-5 profile-page">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card profile-card">
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faUser} className="profile-icon" />
              <h4 className="profile-name">{userInfo.name}</h4>
              <p className="profile-email">{userInfo.email}</p>
              <Link to="/settings" className="btn btn-primary btn-rounded profile-btn">
                <FontAwesomeIcon icon={faCog} /> Settings
              </Link>
              <hr />
              <ul className="list-unstyled profile-links">
                <li>
                  <Link to="/orders" className="profile-link">
                    <FontAwesomeIcon icon={faHistory} className="me-2" /> Order History
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="profile-link">
                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> My Cart
                    <span className="badge bg-danger ms-2">{cartItems.length}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/messages" className="profile-link">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Messages
                  </Link>
                </li>
                <li>
                  <Link to="/address" className="profile-link">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Address
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card profile-main-card">
            <div className="card-body">
              <h5 className="profile-header">Profile Overview</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="profile-section">
                    <h6 className="profile-section-title">Personal Information</h6>
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Phone:</strong> {userInfo.phone}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-section">
                    <h6 className="profile-section-title">Shipping Address</h6>
                    <p>{userInfo.address}</p>
                  </div>
                </div>
              </div>

              <hr />
              <h5 className="profile-header">Order History</h5>
              <div className="list-group">
                {userInfo.orders.map((order) => (
                  <div key={order.id} className="list-group-item order-item">
                    <div>
                      <strong>Order #{order.id}</strong>
                      <p className="order-date">Date: {order.date}</p>
                    </div>
                    <div className="order-info">
                      <span className={`badge ${order.status === "Shipped" ? "bg-info" : "bg-success"}`}>{order.status}</span>
                      <p className="order-total">Total: {order.total}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="profile-footer">
                <button className="btn btn-outline-secondary btn-rounded transition" data-bs-toggle="modal" data-bs-target="#changePasswordModal">
                  Change Password
                </button>
                <button className="btn btn-danger btn-rounded transition">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Change Password */}
      <div className="modal fade" id="changePasswordModal" tabIndex="-1" aria-labelledby="changePasswordModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="changePasswordModalLabel">Change Password</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">Current Password</label>
                  <input type="password" className="form-control" id="currentPassword" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="newPassword" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" id="confirmPassword" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Update Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
