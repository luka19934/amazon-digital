import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import "./styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  if (auth.isAuthed()) {
    null;
  }

  const getNavLinkClassName = ({ isActive }) =>
    "navLink" + (isActive ? " active" : "");

  return (
    <div className="header">
      <img className="logo" src="./src/components/images/logo.svg" alt="logo" />
      <div className="navigation">
        <NavLink to="/register" className={getNavLinkClassName}>
          Sign Up
        </NavLink>
        <NavLink to="/login" className={getNavLinkClassName}>
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
