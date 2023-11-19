import React from "react";
import Form from "../components/Form";
import useAuth from "../hooks/UseAuth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { login, isAuthed } = useAuth();
  if (isAuthed()) {
    return <Navigate to="/products" />;
  }

  const configs = [
    {
      label: "მომხმარებლის სახელი",
      attributes: {
        name: "username",
      },
    },
    {
      label: "პაროლი",
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
    <div>
      <Form onSubmit={onSubmit} configs={configs} />
    </div>
  );
};

export default Login;
