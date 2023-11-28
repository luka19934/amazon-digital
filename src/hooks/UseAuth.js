import { useNavigate } from "react-router-dom";
import api from "../api";
import useLocalStorage from "./UseLocalStorage";
import { useState } from "react";

const useAuth = () => {
  const [authData, setAuthData] = useLocalStorage("authData", null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  async function login(data) {
    api
      .post("/auth/login", data)
      .then((res) => {
        setAuthData(res.data);
        navigate("/products");
      })
      .catch((e) => {
        console.error("error", e);
        setError(true);
      });
  }

  function logout() {
    setAuthData(null);
    navigate("/login");
  }

  function isAuthed() {
    return authData && authData.token;
  }

  return {
    authData,
    error,
    login,
    logout,
    isAuthed,
  };
};

export default useAuth;
