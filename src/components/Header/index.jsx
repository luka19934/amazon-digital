import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
import "./styles.css";

const Header = () => {
  const getNavLinkClassName = ({ isActive }) =>
    "navLink" + (isActive ? " active" : "");

  return (
    <div className="header">
      <div className="logo">
        <img src="./src/images/logo.svg" alt="logo" />
      </div>
      <div className="navigation">
        <NavLink to="/products" className={getNavLinkClassName}>
          Products
        </NavLink>
        <NavLink to="/cart" className={getNavLinkClassName}>
          <ShoppingCart className="cartIcon" />
        </NavLink>
      </div>
      <ProfileMenu />
    </div>
  );
};

export default Header;
