import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

import "./Header.css";
import { useAuth } from "../context/GlobalState";

import { auth } from "../firebase";

const Header = () => {
  const { user } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to={!user && "/login"}>
        <img className="header-logo" src={Logo} alt="logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type={"text"} />
        <BsSearch className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={"/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-optionLineOne">
              Hello {user ? user.email : "Guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? "sign out" : "sign In"}
            </div>
          </div>
        </Link>

        <Link to={"/orders"}>
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
        <Link to={"/checkout"}>
          <div className="header-optionBasket">
            <FiShoppingCart />
            <span className="header-optionLineTwo header-basketCount">5</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
