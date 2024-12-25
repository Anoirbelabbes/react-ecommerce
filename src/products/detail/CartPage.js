import React, { useState } from 'react';
import { useCart } from './CartContext'; // Importer le hook useCart
import { Link } from 'react-router-dom';

function CheckoutPage({ cartItems, totalPrice, shippingCost, finalTotal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez gérer la soumission du formulaire ici (par exemple, passer à une page de confirmation ou soumettre les données au backend)
    alert('Checkout Successful!');
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="mt-4 p-4 bg-light rounded shadow-sm">
          <h4>Total Price: <span className="text-primary">${totalPrice}</span></h4>
          <p>Shipping: ${shippingCost}</p>
          <h5 className="text-success">Final Total: ${finalTotal}</h5>
        </div>

        <button type="submit" className="btn btn-success mt-4">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart(); // Utiliser la fonction pour vider le panier
  const [isCheckout, setIsCheckout] = useState(false); // Gérer l'affichage de la page de checkout

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5">
        <h2 className="text-center">Your cart is empty</h2>
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
  ).toFixed(2); // Arrondi à deux décimales

  // Calculer les frais de livraison en fonction du nombre d'articles dans le panier
  let shippingCost = 0;
  const productCount = cartItems.reduce((count, item) => count + item.quantity, 0); // Nombre total de produits

  // Ajuster les frais de livraison en fonction du nombre de produits
  if (productCount > 10) {
    shippingCost = 15.99; // Frais de livraison élevés si plus de 10 produits
  } else if (productCount > 5) {
    shippingCost = 9.99; // Frais de livraison modérés si entre 6 et 10 produits
  } else {
    shippingCost = 5.99; // Frais de livraison standards
  }

  const finalTotal = (parseFloat(totalPrice) + shippingCost).toFixed(2); // Calcul final avec frais de livraison

  // Si l'utilisateur a cliqué sur "Proceed to Checkout", afficher la page de checkout
  if (isCheckout) {
    return <CheckoutPage cartItems={cartItems} totalPrice={totalPrice} shippingCost={shippingCost} finalTotal={finalTotal} />;
  }

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {/* Liste des articles dans le panier */}
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={require(`../../assets/images/product${item.id}.jpg`)}
                alt={item.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: {item.price} DH</p>
                <p className="card-text">Quantity: {item.quantity}</p>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="bi bi-trash"></i> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section du total et des frais de livraison */}
      <div className="mt-4 p-4 bg-light rounded shadow-sm">
        <h4>Total Price: <span className="text-primary">{totalPrice} DH</span></h4>
        <p>Shipping: {shippingCost} DH</p>
        <h5 className="text-success">Final Total: {finalTotal} DH</h5>

        {/* Bouton Clear Cart */}
        <button
          className="btn btn-warning mt-3"
          onClick={clearCart} // Fonction de vider le panier
        >
          Clear Cart
        </button>
      </div>

      {/* Bouton pour procéder à la commande */}
      <div className="mt-4 d-flex justify-content-between">
        <Link to="/products" className="btn btn-secondary">
          Back to Products
        </Link>
        <button
          className="btn btn-success"
          onClick={() => setIsCheckout(true)} // Affiche la page de checkout
        >
          <i className="bi bi-check-circle"></i> Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
