import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
import "./styles.css";
import useCart from "../../hooks/UseCart";
import { Badge } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const getNavLinkClassName = ({ isActive }) =>
    "navLink" + (isActive ? " active" : "");

  const { numProducts } = useCart();

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/products")}>
        <img src="/src/images/logo.svg" alt="logo" />
      </div>
      <div className="navigation">
        <NavLink to="/products" className={getNavLinkClassName}>
          Products
        </NavLink>
        <NavLink to="/cart" className={getNavLinkClassName}>
          <Badge badgeContent={numProducts} color="primary">
            <ShoppingCart className="cartIcon" />
          </Badge>
        </NavLink>
      </div>
      <ProfileMenu />
    </div>
  );
};

export default Header;
