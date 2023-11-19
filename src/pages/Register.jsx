import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import api from "../api/requestUrls";
import useAuth from "../hooks/UseAuth";

const Register = () => {
  const navigate = useNavigate();

  const { isAuthed } = useAuth();
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
      label: "იმეილი",
      attributes: {
        name: "email",
        type: "email",
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
    axios
      .post(api.users.add, formData)
      .then(() => {
        alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია.");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("დაფიქსირდა შეცდომა.");
      });
  };

  return (
    <div>
      <Form configs={configs} onSubmit={onSubmit} />
    </div>
  );
};

export default Register;
