import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./header.css";

function SocialContact({ children }) {
  return <div className="header-social-contact">{children}</div>;
}

function HeaderSocialContacts() {
  return (
    <div className="header-social-contacts-wrapper">
      <SocialContact>
        <FaFacebookSquare />
        <p>PowerHouse</p>
      </SocialContact>
      <SocialContact>
        <FaXTwitter />
        <p>@PowerHouse</p>
      </SocialContact>
      <SocialContact>
        <FaInstagramSquare />
        <p>PowerHouse._tech</p>
      </SocialContact>
      <SocialContact>
        <AiFillTikTok />
        <p>@PowerHouse.</p>
      </SocialContact>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <h1 className="logo-text">PowerHouse</h1>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              Home
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              about
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              products
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              staff
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <HeaderSocialContacts />
      <HeaderNavigation />
    </header>
  );
}
export default Header;
