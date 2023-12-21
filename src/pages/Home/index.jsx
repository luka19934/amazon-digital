import { Button } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProductCarousel from "../../components/ProductCarousel";
import "./styles.css";
import useAuth from "../../hooks/UseAuth";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthed } = useAuth();

  if (isAuthed()) {
    return <Navigate to="./products" />;
  }

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <Button
        className="leftButton"
        variant="outlined"
        onClick={() => navigate("./register")}
      >
        Sign Up
      </Button>
      <Button variant="outlined" onClick={() => navigate("./login")}>
        Log In
      </Button>
      <ProductCarousel />
    </div>
  );
};

export default Home;
