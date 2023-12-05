import { ArrowBackRounded } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../api";
import Form from "../components/Form/Form";
import useAuth from "../hooks/UseAuth";

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
        setSuccessMessage("Registration successful!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setSuccessMessage("");
        setErrorMessage("System error");
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
      <Form configs={configs} onSubmit={onSubmit} buttonLabel="Sign up" />
      {successMessage && (
        <Alert
          severity="success"
          onClose={() => setSuccessMessage("")}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => navigate("/login")}
            >
              Click here to sign in
            </Button>
          }
        >
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert severity="error" onClose={() => setErrorMessage("")}>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default Register;
