import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header-container flex justify-between p-4 bg-sky-50 items-center shadow-sm">
      <div className="logo">
        <img src={LOGO_URL} className="w-24 rounded-full border-cyan-200 border"/>
      </div>
      <div className="menu-container">
        <ul className="flex">
          <li className="p-4"><Link to="/">Home</Link></li>
          <li className="p-4"><Link to="/about">About Us</Link></li>
          <li className="p-4"><Link to="/contact">Contact Us</Link></li>
          <li className="p-4"><Link to="/grocery">Grocery</Link></li>
          <li className="p-4">Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
