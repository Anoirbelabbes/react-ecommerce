import React, { useState } from 'react';
import { useCart } from '../CartContext'; // Importer le hook useCart
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const { cartItems } = useCart(); // Obtenez les produits dans le panier
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    paymentMethod: 'creditCard', // Par défaut, méthode de paiement par carte de crédit
  });

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  // Calculer le prix total du panier
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  // Calculer les frais de livraison (en fonction du nombre de produits)
  let shippingCost = 0;
  const productCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  if (productCount > 10) {
    shippingCost = 15.99;
  } else if (productCount > 5) {
    shippingCost = 9.99;
  } else {
    shippingCost = 5.99;
  }

  const finalTotal = (parseFloat(totalPrice) + shippingCost).toFixed(2);

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter la commande, comme l'envoi des informations à un serveur
    console.log('Order submitted', formData);
    alert('Your order has been successfully placed!');
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      {/* Détails du panier */}
      <div className="row">
        <div className="col-md-8">
          <h4>Items in your cart</h4>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <span className="badge bg-primary">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section du total et des frais de livraison */}
        <div className="col-md-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <h4>Total Price: <span className="text-primary">${totalPrice}</span></h4>
            <p>Shipping: ${shippingCost}</p>
            <h5 className="text-success">Final Total: ${finalTotal}</h5>
          </div>
        </div>
      </div>

      {/* Formulaire de commande */}
      <form onSubmit={handleSubmit} className="mt-4">
        <h4>Delivery Information</h4>

        {/* Nom */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Adresse */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Shipping Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Méthode de paiement */}
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>

        {/* Bouton de soumission */}
        <button type="submit" className="btn btn-success mt-3">Place Order</button>
      </form>

      {/* Bouton retour vers les produits */}
      <Link to="/products" className="btn btn-secondary mt-3">
        Back to Products
      </Link>
    </div>
  );
}

export default CheckoutPage;
