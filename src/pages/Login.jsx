import { ArrowBackRounded } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import useAuth from "../hooks/UseAuth";

const Login = () => {
  const { login, error, isAuthed } = useAuth();
  const [close, setClose] = useState(false);

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
      {error && !close && (
        <Alert severity="error" onClose={() => setClose(true)}>
          Authentication failed
        </Alert>
      )}
    </div>
  );
};

export default Login;
