import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../api";
import Form from "../components/Form/Form";
import useAuth from "../hooks/UseAuth";
import { Button } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";

const Register = () => {
  const navigate = useNavigate();

  const { isAuthed } = useAuth();
  if (isAuthed()) {
    return <Navigate to="/products" />;
  }

  const configs = [
    {
      label: "Username",
      attributes: {
        name: "username",
      },
    },
    {
      label: "Email",
      attributes: {
        name: "email",
        type: "email",
      },
    },
    {
      label: "Password",
      attributes: {
        name: "password",
        type: "password",
      },
    },
  ];

  const onSubmit = (formData) => {
    api
      .post("/users/add", formData)
      .then(() => {
        alert("Registration successful!");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("System error");
      });
  };

  return (
    <div style={{ padding: 5 }}>
      <Button
        startIcon={<ArrowBackRounded />}
        variant="outlined"
        onClick={() => navigate("/")}
      >
        Home page
      </Button>
      <Form configs={configs} onSubmit={onSubmit} />
    </div>
  );
};

export default Register;
