import heroImage from "../../assets/hero-img.jpg";
import "./hero.css";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-textbox">
        <h2 className="hero__title">
          PowerHouse electricals and electronics shop
        </h2>
        <p className="hero__tagline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          expedita maxime hic, velit officia minus.
        </p>
        <a href="#" className="hero-more-catalogue-link">
          view catalogue
        </a>
      </div>
      <img
        src={heroImage}
        alt="a customer enjoying AR simulation"
        className="hero-img"
      />
    </section>
  );
}
export default Hero;
