import "./Staffs.css";
import Title from "../Title/Title";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import staffInformation from "../../data/staffInformation";

function StaffCards({ staffImage, staffName, staffTitle, staffDescription }) {
  return (
    <div className="staff-card">
      <div className="staff-image">
        <img src={staffImage} />
      </div>
      <div className="staff-info">
        <h3 className="name">{staffName}</h3>
        <p className="title">{staffTitle}</p>
        <p className="description">{staffDescription}</p>
        <div className="socials">
          <FaInstagram className="social-icon" />
          <MdFacebook className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaWhatsappSquare className="social-icon" />
        </div>
      </div>
    </div>
  );
}

function Staffs() {
  return (
    <div className="container">
      <Title
        mainTitle="Our Staff"
        subtitle="A team of experienced professionals driving innovation and success."
      />
      <div className="staff-container">
        {staffInformation.map((staff, index) => (
                  <StaffCards
                      key={index}
                      staffImage={staff.staffImage}
                      staffName={staff.staffName}
                      staffTitle={staff.staffTitle}
                      staffDescription={staff.description}
                  />
              ))}
      </div>
    </div>
  );
}

export default Staffs;
