import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <Button
        style={{ marginRight: 5 }}
        variant="outlined"
        onClick={() => navigate("./register")}
      >
        Sign Up
      </Button>
      <Button variant="outlined" onClick={() => navigate("./login")}>
        Log In
      </Button>
    </div>
  );
};

export default Home;
