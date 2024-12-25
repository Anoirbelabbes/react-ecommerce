import Banner from "./Banner";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { Link } from "react-router-dom";
import productsData from "../data/products.json"; // Importation du fichier JSON

// Importation dynamique des images à partir du dossier 'assets/images'
const importImage = (imageName) => require(`../assets/images/${imageName}`);

function Landing() {
  // Utilisation des produits du fichier JSON
  const products = productsData;

  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5" style={styles.descriptionText}>
          NearBuy: Bringing you closer to the products you need and the success you deserve
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn" style={styles.browseButton} replace>
            Browse products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3" style={styles.sectionTitle}>
        Recommendation
      </h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card h-100"
                style={styles.card}
              >
                <img
                  src={importImage(product.image)}
                  className="card-img-top"
                  alt={product.name}
                  style={styles.cardImage}
                />
                <div className="card-body" style={styles.cardBody}>
                  <h5 className="card-title" style={styles.cardTitle}>
                    {product.name}
                  </h5>
                  <p className="card-text" style={styles.cardText}>
                    {product.price} DH
                  </p>
                </div>
                <Link
                  to={`/products/detail/${product.id}`}
                  className="btn"
                  style={styles.detailsButton}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  descriptionText: {
    fontSize: "18px",
    color: "#6c757d",
    fontWeight: "500",
  },
  browseButton: {
    background: "linear-gradient(45deg, #1e90ff, #00bfff)",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "50px",
    fontSize: "16px",
    transition: "all 0.4s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: "24px",
  },
  card: {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "20px",
    textAlign: "center",
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#343a40",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "16px",
    color: "#6c757d",
  },
  detailsButton: {
    background: "linear-gradient(45deg, #1e90ff, #00bfff)",
    color: "#fff",
    border: "none",
    padding: "15px 20px",
    borderRadius: "0 0 20px 20px", // Coins arrondis uniquement en bas
    fontSize: "16px",
    width: "100%", // Largeur totale de la carte
    textAlign: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

// Ajout des effets au hover des éléments
styles.card[":hover"] = {
  transform: "translateY(-10px)",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
};
styles.detailsButton[":hover"] = {
  background: "linear-gradient(45deg, #00bfff, #1e90ff)",
  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
};

export default Landing;
