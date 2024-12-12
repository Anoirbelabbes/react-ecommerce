import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./CartContext"; // Importer useCart

function ProductH({ product, percentOff }) {
  const { addToCart } = useCart(); // Utiliser le hook useCart pour ajouter au panier
  const [quantity, setQuantity] = useState(1); // Ajouter un état pour la quantité

  let offPrice = `${product.price} Ks`;

  if (percentOff && percentOff > 0) {
    offPrice = (
      <>
        <del>{product.price} Ks</del> {product.price - (percentOff * product.price) / 100} Ks
      </>
    );
  }

  const handleAddToCart = () => {
    // Ajouter le produit avec la quantité spécifiée au panier
    addToCart({ ...product, quantity });
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-4">
            <Link to={`/products/${product.id}`} replace>
              {percentOff && (
                <div
                  className="badge bg-dim py-2 text-white position-absolute"
                  style={{ top: "0.5rem", left: "0.5rem" }}
                >
                  {percentOff}% OFF
                </div>
              )}
              <img
                className="rounded-start bg-dark cover w-100 h-100"
                alt={product.name}
                src={`/images/${product.image}`}
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="card-body h-100">
              <div className="d-flex flex-column h-100">
                <h5 className="card-title text-dark text-truncate mb-1">
                  {product.name}
                </h5>
                <span className="card-text text-muted mb-2 flex-shrink-0">
                  {offPrice}
                </span>

                {/* Quantité */}
                <div className="d-flex align-items-center mb-2">
                  <label htmlFor={`quantity-${product.id}`} className="me-2">Quantity:</label>
                  <input
                    id={`quantity-${product.id}`}
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="form-control w-25"
                  />
                </div>

                <div className="mt-auto d-flex">
                  <button
                    className="btn btn-outline-dark ms-auto"
                    onClick={handleAddToCart} // Appel de la fonction pour ajouter au panier
                  >
                    <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductH;
