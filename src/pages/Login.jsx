import { ArrowBackRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import useAuth from "../hooks/UseAuth";

const Login = () => {
  const { login, isAuthed } = useAuth();
  const navigate = useNavigate();
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
      label: "Password",
      attributes: {
        name: "password",
        type: "password",
      },
    },
  ];

  const onSubmit = (formData) => {
    login(formData);
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
      <Form onSubmit={onSubmit} configs={configs} />
    </div>
  );
};

export default Login;
