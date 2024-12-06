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
        <p className="text-center px-5">
          NearBuy: Bringing you closer to the products you need and the success you deserve
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            Browse products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">Recommendation</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm">
                {/* Utilisation d'importation dynamique pour les images */}
                <img
                  src={importImage(product.image)} // Utilisation de l'import dynamique pour l'image
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">${product.price}</p>
                  {/* Lien vers ProductDetail avec l'ID du produit */}
                  <Link to={`/products/detail/${product.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
