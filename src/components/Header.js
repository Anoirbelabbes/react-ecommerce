import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../products/detail/CartContext";
import logo from "./logo.png";
import Profil from "./Profil"; // Assurez-vous que Profil.js est bien importé

function Header() {
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [userType, setUserType] = useState(""); // Type d'utilisateur (acheteur/vendeur)
  const { cartItems } = useCart();

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav() {
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  }

  function openLoginModal() {
    setShowLoginModal(true);
  }

  function closeLoginModal() {
    setShowLoginModal(false);
  }

  function openSignUpModal() {
    setShowSignUpModal(true);
  }

  function closeSignUpModal() {
    setShowSignUpModal(false);
  }

  function handleUserTypeSelection(type) {
    setUserType(type);
  }

  return (
    <header style={{ paddingTop: "60px" }}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={changeNav}>
            <img
              src={logo}
              alt="Logo"
              className="logo ms-1"
              style={{ height: "50px" }}
            />
            <span className="ms-2 h5 fw-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>NearBuy</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? "open" : "")}>
            <ul className="navbar-nav mx-auto mb-lg-0 d-flex justify-content-center">
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link text-dark fw-semibold"
                  replace
                  onClick={changeNav}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Explore
                </Link>
              </li>

              {/* Section pour les liens supplémentaires */}
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link text-dark fw-semibold"
                  replace
                  onClick={changeNav}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link text-dark fw-semibold"
                  replace
                  onClick={changeNav}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Dropdown Menu "Account" */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link text-dark"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={["fas", "user-circle"]} /> Account
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow-sm border-0"
                  aria-labelledby="accountDropdown"
                >
                  <li>
                    <button className="dropdown-item" onClick={openLoginModal}>
                      Login
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={openSignUpModal}>
                      Sign Up
                    </button>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profil">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/orders">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Panier */}
            <Link
              to="/cart"
              className="btn btn-outline-dark me-3 d-none d-lg-inline position-relative"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-2 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
              </span>
            </Link>
          </div>

          {/* Drawer Toggle pour mobile */}
          <div className="d-inline-block d-lg-none">
            <button
              className="navbar-toggler p-0 border-0 ms-3"
              type="button"
              onClick={toggleDrawer}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Login */}
      {showLoginModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          aria-labelledby="loginModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModal">
                  Login to Your Account
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeLoginModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Sign Up */}
      {showSignUpModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" aria-labelledby="signUpModal" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signUpModal">Sign Up</h5>
                <button type="button" className="btn-close" onClick={closeSignUpModal}></button>
              </div>
              <div className="modal-body">
                <h5>Choose Your User Type</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card" style={{ cursor: 'pointer' }} onClick={() => handleUserTypeSelection('buyer')}>
                      <div className="card-body text-center">
                        <FontAwesomeIcon icon={["fas", "user"]} size="3x" />
                        <h6 className="mt-2">Buyer</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card" style={{ cursor: 'pointer' }} onClick={() => handleUserTypeSelection('seller')}>
                      <div className="card-body text-center">
                        <FontAwesomeIcon icon={["fas", "store"]} size="3x" />
                        <h6 className="mt-2">Seller</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {userType && (
                  <div className="mt-4">
                    {userType === 'buyer' ? (
                      <form>
                        <div className="mb-3">
                          <label htmlFor="buyerEmail" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="buyerEmail" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="buyerPassword" className="form-label">Password</label>
                          <input type="password" className="form-control" id="buyerPassword" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="buyerConfirmPassword" className="form-label">Confirm Password</label>
                          <input type="password" className="form-control" id="buyerConfirmPassword" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                      </form>
                    ) : (
                      <form>
                        <div className="mb-3">
                          <label htmlFor="storeName" className="form-label">Store Name</label>
                          <input type="text" className="form-control" id="storeName" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="storePhone" className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" id="storePhone" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="storeDescription" className="form-label">Store Description</label>
                          <textarea className="form-control" id="storeDescription"></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="storeEmail" className="form-label">Store Email</label>
                          <input type="email" className="form-control" id="storeEmail" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="storePassword" className="form-label">Password</label>
                          <input type="password" className="form-control" id="storePassword" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
