import logo2 from "./logo2.png";

function Footer() {
  return (
    <footer className="bg-dark text-light py-1 pt-4 mt-5"> {/* Réduction du padding vertical pour réduire la hauteur du footer */}
      <div className="container">
        <div className="row">
          {/* Logo et description */}
          <div className="col-md-4 mb-4 d-flex align-items-center">
            <img
              src={logo2}
              alt="NearBuy Logo"
              style={{ width: "70px", marginRight: "10px" }}
            />
            <p className="mt-3 mb-0">
              NearBuy: Une plateforme e-commerce innovante connectant vendeurs et acheteurs.
              Trouvez ce dont vous avez besoin, près de chez vous.
            </p>
          </div>

          {/* Liens utiles */}
          <div className="col-md-4 mb-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-muted text-decoration-none">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted text-decoration-none">
                  Contactez-nous
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted text-decoration-none">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted text-decoration-none">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Restez connecté */}
          <div className="col-md-4 mb-4">
            <h5>Restez connecté</h5>
            <form className="mb-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre email"
                  aria-label="Votre email"
                />
                <button className="btn btn-primary" type="submit">
                  S'abonner
                </button>
              </div>
            </form>
            <h6>Suivez-nous</h6>
            <div>
              <a href="https://facebook.com" className="text-light me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://linkedin.com" className="text-light">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
