// Importation des images
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";

function BannerIndicator(props) {
  return (
    <button
      type="button"
      data-bs-target="#bannerIndicators"
      data-bs-slide-to={props.index}
      className={props.active ? "active" : ""}
      aria-current={props.active}
      aria-label={`Slide ${props.index + 1}`}
    />
  );
}

function BannerImage(props) {
  return (
    <div
      className={"carousel-item " + (props.active ? "active" : "")}
      data-bs-interval="5000"
    >
      <div
        className="ratio"
        style={{ "--bs-aspect-ratio": "50%", maxHeight: "460px" }}
      >
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt={`Slide ${props.index + 1}`}
          src={props.image} // Référence dynamique des images
        />
      </div>
      <div className="carousel-caption d-none d-lg-block">
        <h3 style={{ color: "white" }}>Find What You Need Nearby with NearBuy</h3>
        <p>An ecosystem designed for thriving sellers and satisfied buyers.</p>
      </div>
    </div>
  );
}

function Banner() {
  // Liste des images sous forme d'import
  const images = [product1, product2, product3, product4];

  return (
    <div
      id="bannerIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginTop: "56px" }}
    >
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <BannerIndicator key={index} index={index} active={index === 0} />
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <BannerImage
            key={index}
            image={image}
            index={index}
            active={index === 0} // Active pour la première image
          />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
