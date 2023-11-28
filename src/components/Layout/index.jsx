import React, { useCallback, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.css";
import AlertContext from "../../contexts/AlertContext";
import { Alert } from "@mui/material";

const Layout = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const alertSuccess = useCallback((message) => {
    setSuccessMessage(message);
    setErrorMessage(undefined);
  }, []);

  const alertError = useCallback((message) => {
    setSuccessMessage(undefined);
    setErrorMessage(message);
  }, []);

  return (
    <AlertContext.Provider
      value={{
        alertSuccess,
        alertError,
      }}
    >
      <div className="layout">
        <Header />
        <div className="content">
          {children}
          {successMessage && (
            <Alert
              severity="success"
              onClose={() => setSuccessMessage(undefined)}
            >
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert severity="error" onClose={() => setErrorMessage(undefined)}>
              {errorMessage}
            </Alert>
          )}
        </div>
        <Footer />
      </div>
    </AlertContext.Provider>
  );
};

export default Layout;
