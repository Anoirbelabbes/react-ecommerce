import React from 'react';
import { useCart } from './CartContext'; // Importer le hook useCart
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart } = useCart(); // Récupérer les items du panier et la fonction de suppression

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4">
              {/* Utilisez require pour charger les images dynamiquement si elles sont dans src */}
              <img 
                src={require(`../../assets/images/product${item.id}.jpg`)} 
                alt={item.name} 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p> {/* Affichage de la quantité spécifique */}
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link to="/checkout" className="btn btn-primary">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
