import Title from "../Title/Title";
import "./testimonies.css";
import customer1 from "../../assets/customer-1.jpg";

function TestimonyCard({ customerAvatar, customerName, title, text }) {
  return (
    <div className="testimony-card">
      <div className="testimony-card-customer-details">
        <img src={customerAvatar} alt={customerName} />
        <h4 className="testimony-card-customer-name">{customerName}</h4>
      </div>
      <h4 className="testimony-title">{title}</h4>
      <p className="testimony-text">{text}</p>
    </div>
  );
}

function Testimonies() {
  return (
    <section>
      <Title mainTitle="our customers love us" subtitle="social proof" />

      <div className="testimonies-container">
        <TestimonyCard
          customerAvatar={customer1}
          customerName="john santos"
          title="best legit tech products ever"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta, nulla obcaecati doloremque dolores a porro error itaque, tempore, unde eveniet cumque dolorem pariatur sed sapiente velit molestiae maiores repellendus."
        />
      </div>
    </section>
  );
}

export default Testimonies;
