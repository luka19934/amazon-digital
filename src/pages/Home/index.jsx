import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCarousel from "../../components/ProductCarousel";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
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
