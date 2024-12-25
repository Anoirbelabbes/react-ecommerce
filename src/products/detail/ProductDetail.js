import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/products.json";
import { Link } from "react-router-dom";
import { useCart } from "../detail/CartContext";

function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart(); // Utilisez le hook useCart pour ajouter au panier
  const [quantity, setQuantity] = useState(1); // Ajoutez un état pour la quantité

  const product = productsData.find((prod) => prod.id === parseInt(slug));

  if (!product) {
    return <h2 className="text-center mt-5">Product not found!</h2>;
  }

  // Utiliser `require` pour charger l'image en fonction de l'ID du produit
  const imageSrc = require(`../../assets/images/product${product.id}.jpg`);

  const handleAddToCart = () => {
    // Ajouter le produit avec la quantité spécifiée au panier
    addToCart({ ...product, quantity });
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div style={styles.imageWrapper}>
            <img
              src={imageSrc}
              alt={product.name}
              className="img-fluid"
              style={styles.image}
            />
          </div>
        </div>
        <div className="col-md-6" style={styles.productInfo}>
          <h1 style={styles.productTitle}>{product.name}</h1>
          <p style={styles.productDescription}>{product.description}</p>
          <p style={styles.category}>Category: <span>{product.category}</span></p>
          <p style={styles.price}>Price: <strong>{product.price} DH</strong></p>

          {/* Quantité */}
          <div className="mt-3">
            <label htmlFor="quantity" style={styles.quantityLabel}>
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="form-control w-50 mt-2"
              style={styles.quantityInput}
            />
          </div>

          <button
            className="btn mt-4"
            style={styles.addToCartButton}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <Link
            to="/products"
            className="btn mt-4 ms-3"
            style={styles.backButton}
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  imageWrapper: {
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  image: {
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "15px",
  },
  productInfo: {
    padding: "20px",
    textAlign: "left",
  },
  productTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: "15px",
  },
  productDescription: {
    fontSize: "16px",
    color: "#6c757d",
    marginBottom: "15px",
  },
  category: {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "10px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1e90ff",
    marginBottom: "20px",
  },
  quantityLabel: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#343a40",
  },
  quantityInput: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "5px 10px",
    marginTop: "5px",
  },
  addToCartButton: {
    background: "linear-gradient(45deg, #1e90ff, #00bfff)",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "30px",
    fontSize: "16px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  backButton: {
    background: "#6c757d",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "30px",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
};

// Ajout d'effets au hover
styles.addToCartButton[":hover"] = {
  background: "linear-gradient(45deg, #00bfff, #1e90ff)",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
};
styles.backButton[":hover"] = {
  background: "#5a6268",
};

export default ProductDetail;
