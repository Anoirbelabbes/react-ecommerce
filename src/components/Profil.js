import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faHistory, faShoppingCart, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../products/detail/CartContext"; // Si vous utilisez un contexte pour le panier

function Profil() {
  const [userInfo, setUserInfo] = useState({
    name: "Belabbes Anouar",
    email: "anouar.belabbes@gamil.com",
    address: "Berkane",
    phone: "+212 654 13 53 04",
    orders: [
      { id: 1, date: "2024-11-01", total: "$100", status: "Shipped" },
      { id: 2, date: "2024-10-21", total: "$50", status: "Delivered" },
    ],
  });
  const { cartItems } = useCart(); // Exemple de gestion du panier

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Hello, {userInfo.name}</h4>
              <p className="card-text">{userInfo.email}</p>
              <Link to="/settings" className="btn btn-primary w-100">
                <FontAwesomeIcon icon={faCog} /> Account Settings
              </Link>
              <hr />
              <ul className="list-unstyled">
                <li>
                  <Link to="/orders" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faHistory} className="me-2" /> Order History
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> My Cart
                    <span className="badge rounded-pill bg-danger ms-2">{cartItems.length}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/messages" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Messages
                  </Link>
                </li>
                <li>
                  <Link to="/address" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Address
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Overview</h5>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h6 className="fw-bold">Personal Information</h6>
                  <p><strong>Name:</strong> {userInfo.name}</p>
                  <p><strong>Email:</strong> {userInfo.email}</p>
                  <p><strong>Phone:</strong> {userInfo.phone}</p>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold">Shipping Address</h6>
                  <p>{userInfo.address}</p>
                </div>
              </div>

              <hr />
              <h5>Order History</h5>
              <div className="list-group">
                {userInfo.orders.map((order) => (
                  <div key={order.id} className="list-group-item d-flex justify-content-between">
                    <div>
                      <strong>Order #{order.id}</strong>
                      <p className="mb-0">Date: {order.date}</p>
                    </div>
                    <div>
                      <span className="badge bg-info">{order.status}</span>
                      <p className="mb-0">Total: {order.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <h6>Change Password</h6>
              <button className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#changePasswordModal">
                Change Password
              </button>
            </div>
            <div>
              <h6>Log out</h6>
              <button className="btn btn-danger">Log Out</button>
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
