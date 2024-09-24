import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import SocialContact from "./SocialContact";
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
export default HeaderSocialContacts;
