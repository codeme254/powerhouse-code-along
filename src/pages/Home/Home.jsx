import React from "react";
import Hero from "../../components/Hero/Hero";
import Catalogue from "../../components/Catalogue/Catalogue";
import Testimonies from "../../components/Testimonies/Testimonies";

function Home() {
  return (
    <div>
      <Hero />
      <Catalogue />
      <Testimonies />
    </div>
  );
}

export default Home;
