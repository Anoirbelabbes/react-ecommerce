import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product({ product, onAddToCart }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        {/* Redirection vers ProductDetail avec le chemin spécifique */}
        <Link to={`/products/detail/${product.id}`} replace className="text-decoration-none text-dark">
          {product.promotion && (
            <div
              className="badge bg-danger text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              PROMO
            </div>
          )}
          <img
            className="card-img-top bg-dark cover"
            height="200"
            alt={product.name}
            src={require(`../assets/images/${product.image}`)}
          />
          <div className="card-body">
            <h5 className="card-title text-center text-dark text-truncate">
              {product.name}
            </h5>
            <p className="card-text text-center text-muted mb-0">
              ${product.price}
            </p>
          </div>
        </Link>
        <div className="d-grid d-block">
          {/* Bouton Add to Cart reste fonctionnel */}
          <button
            className="btn btn-outline-dark mt-3"
            onClick={() => onAddToCart(product)}
          >
            <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
