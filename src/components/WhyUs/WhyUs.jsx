import React from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import "./whyus.css";

function Why({ icon, title, description }) {
  return (
    <div className="why">
      {icon}
      <h3 className="why-title">{title}</h3>
      <p className="why-description">{description}</p>
    </div>
  );
}

function WhyUs() {
  return (
    <div className="why-cards-container">
      <Why
        icon={<FaClockRotateLeft />}
        title="24 hours support"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consequuntur tempora at quos a quo."
      />
      <Why
        icon={<FaLaptop />}
        title="legit tech gadgets"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consequuntur tempora at quos a quo."
      />
      <Why
        icon={<MdOutlineContactSupport />}
        title="best customer support"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consequuntur tempora at quos a quo."
      />
      <Why
        icon={<FaLocationDot />}
        title="branches countrywide"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consequuntur tempora at quos a quo."
      />
      <Why
        icon={<FaPeopleGroup />}
        title="growing online community"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consequuntur tempora at quos a quo."
      />
      <Why
        icon={<FaList />}
        title="friendly terms and conditions"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consequuntur tempora at quos a quo."
      />
    </div>
  );
}

export default WhyUs;
