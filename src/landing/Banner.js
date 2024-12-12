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
        className="ratio position-relative"
        style={{ "--bs-aspect-ratio": "50%", maxHeight: "460px" }}
      >
        {/* Image */}
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt={`Slide ${props.index + 1}`}
          src={props.image}
          style={{ opacity: "0.8", objectFit: "cover" }}
        />
        {/* Overlay pour texte */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
          }}
        ></div>
      </div>
      {/* Texte du carousel */}
      <div className="carousel-caption d-none d-lg-block">
        <h3
          style={{
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Find What You Need Nearby with NearBuy
        </h3>
        <p
          style={{
            color: "#e0e0e0",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.2rem",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
          }}
        >
          An ecosystem designed for thriving sellers and satisfied buyers.
        </p>
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
