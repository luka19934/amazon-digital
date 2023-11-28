import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import Form from "../components/Form/Form";
import Loader from "../components/Loader";
import useAuth from "../hooks/UseAuth";
import AlertContext from "../contexts/AlertContext";

const Profile = () => {
  const [userData, setUserData] = useState();
  const { alertSuccess, alertError } = useContext(AlertContext);

  const { authData } = useAuth();
  useEffect(() => {
    api
      .get(`/users/${authData.id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => {
        alertError("System Error! Please try again...");
      });
  }, [alertError, authData.id]);

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
      .then(() => {
        alertSuccess("User data was successfully updated!");
      })
      .catch(() => {
        alertError("System Error! Please try again...");
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
    </>
  );
};

export default Profile;
