import { Link } from "react-router-dom";
function CatalogueCard({ thumbnail, price, title, description }) {
  return (
    <div className="catalogue-card">
      <div className="catalogue-image-and-price-wrapper">
        <img src={thumbnail} alt={title} />
        <p className="catalogue-card-price">KSH. {price}</p>
      </div>
      <div className="catalogue-card-body">
        <h3 className="catalogue-card-title">{title}</h3>
        <p className="catalogue-card-description">{description}</p>
        <Link to="/order" className="catalogue-card-cta">
          place order
        </Link>
      </div>
    </div>
  );
}
export default CatalogueCard;
