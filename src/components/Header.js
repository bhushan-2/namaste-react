import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <img src={LOGO_URL} />
    </div>
    <div className="menu-container">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;