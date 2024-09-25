import Title from "../../components/Title/Title";
import CatalogueCard from "../../components/CatalogueItem/CatalogueCard";
import products from "../../data/products";
import "./products.css";

function Products() {
  return (
    <div className="products-page">
      <Title
        mainTitle="browse our wide range of products"
        subtitle="our catalogue"
      />

      <div className="products-container">
        {products.map((item, i) => (
          <CatalogueCard
            thumbnail={item.thumbnail}
            price={item.price}
            title={item.title}
            description={item.description}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
