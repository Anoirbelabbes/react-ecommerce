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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={imageSrc}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-muted">Category: {product.category}</p>
          <p className="text-muted">Price: ${product.price}</p>

          {/* Quantité */}
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="form-control w-25"
            />
          </div>

          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <Link to="/products" className="btn btn-secondary ms-3 mt-3">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
