import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../api";
import Form from "../components/Form/Form";
import Loader from "../components/Loader";
import useAuth from "../hooks/UseAuth";

const Profile = () => {
  const [userData, setUserData] = useState();
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const { authData } = useAuth();
  useEffect(() => {
    api
      .get(`/users/${authData.id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => {
        setDisplayError(true);
        setDisplaySuccess(false);
      });
  }, [authData.id]);

  const configs = [
    {
      label: "First Name",
      attributes: {
        name: "firstName",
      },
    },
    {
      label: "Last Name",
      attributes: {
        name: "lastName",
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
      label: "Phone",
      attributes: {
        name: "phone",
      },
    },
    {
      label: "Age",
      attributes: {
        name: "age",
        type: "number",
      },
    },
  ];

  const getFormData = () => {
    const formData = {};
    if (userData) {
      for (const config of configs) {
        const key = config.attributes.name;
        formData[key] = userData[key];
      }
    }
    return formData;
  };

  const handleSubmit = (formData) => {
    api
      .put(`/users/${authData.id}`, formData)
      .then(() => setDisplaySuccess(true))
      .catch(() => {
        setDisplayError(true);
        setDisplaySuccess(false);
      });
  };

  if (!userData) return <Loader />;

  return (
    <>
      <Form
        configs={configs}
        onSubmit={handleSubmit}
        initialData={getFormData()}
      />
      {displaySuccess && (
        <Alert severity="success" onClose={() => setDisplaySuccess(false)}>
          User information was successfully updated.
        </Alert>
      )}
      {displayError && (
        <Alert severity="error" onClose={() => setDisplayError(false)}>
          Error! Please try again...
        </Alert>
      )}
    </>
  );
};

export default Profile;
