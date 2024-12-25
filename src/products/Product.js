import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../products/detail/CartContext";

function Product({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="col">
      <div
        className="card shadow-sm border-0 h-100 position-relative"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Link
          to={`/products/detail/${product.id}`}
          replace
          className="text-decoration-none text-dark"
          style={{
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
        >
          {product.promotion && (
            <div
              className="badge bg-danger text-white position-absolute"
              style={{
                top: "0.5rem",
                right: "0.5rem",
                zIndex: "1",
                borderRadius: "10px",
              }}
            >
              PROMO
            </div>
          )}
          <div
            className="card-img-top"
            style={{
              height: "200px",
              backgroundImage: `url(${require(`../assets/images/${product.image}`)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px 20px 0 0",
              transition: "transform 0.3s ease",
            }}
          ></div>
          <div className="card-body d-flex flex-column align-items-center">
            <h5
              className="card-title text-center text-dark text-truncate mb-2"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#343a40",
              }}
            >
              {product.name}
            </h5>
            <p
              className="card-text text-center fw-bold mb-0"
              style={{
                color: "#6c757d",
                fontSize: "1rem",
              }}
            >
              {product.price} DH
            </p>
          </div>
        </Link>
        <div
          className="card-footer bg-light border-top-0 mt-auto"
          style={{
            borderRadius: "0 0 20px 20px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {/* Gestion de la quantité */}
          <div className="d-flex align-items-center justify-content-between">
            <label
              htmlFor={`quantity-${product.id}`}
              className="me-2 mb-0"
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#6c757d",
              }}
            >
              Quantity:
            </label>
            <input
              id={`quantity-${product.id}`}
              type="number"
              value={quantity}
              min="1"
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value)))
              }
              className="form-control form-control-sm text-center"
              style={{
                borderRadius: "10px",
                width: "60px",
                fontSize: "0.9rem",
              }}
            />
          </div>
          {/* Bouton Add to Cart */}
          <button
            className="btn w-100 fw-bold"
            style={{
              borderRadius: "20px",
              fontSize: "0.9rem",
              background: "linear-gradient(to right, #007bff, #0056b3)",
              color: "white",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 123, 255, 0.3)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onClick={handleAddToCart}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0px 6px 10px rgba(0, 123, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0px 4px 6px rgba(0, 123, 255, 0.3)";
            }}
          >
            <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
