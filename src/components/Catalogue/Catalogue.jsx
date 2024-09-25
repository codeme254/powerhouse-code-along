import "./catalogue.css";
import Title from "../Title/Title";
import products from "../../data/products";
import CatalogueCard from "../CatalogueItem/CatalogueCard";
import { Link } from "react-router-dom";

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

      <Link to="/products" className="catalogue-more-btn">
        more items
      </Link>
    </section>
  );
}

export default Catalogue;
