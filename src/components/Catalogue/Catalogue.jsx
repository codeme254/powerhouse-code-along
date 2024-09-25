import "./catalogue.css";
import Title from "../Title/Title";
import products from "../../data/products";
import CatalogueCard from "../CatalogueItem/CatalogueCard";

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
