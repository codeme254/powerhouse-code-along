import "./catalogue.css";
import Title from "../Title/Title";
import products from "../../data/products";

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
        <a href="#" className="catalogue-card-cta">
          place order
        </a>
      </div>
    </div>
  );
}

function Catalogue() {
  return (
    <section className="catalogue-section">
      <Title
        subtitle="our catalogue"
        mainTitle="some of the products we sell"
      />

      <div className="catalogue-cards-container">
        {products.map(
          (product, i) =>
            i <= 5 && (
              <CatalogueCard
                thumbnail={product.thumbnail}
                title={product.title}
                description={product.description}
                price={product.price}
                key={i}
              />
            ),
        )}
      </div>

      <a href="#" className="catalogue-more-btn">
        more items
      </a>
    </section>
  );
}

export default Catalogue;
