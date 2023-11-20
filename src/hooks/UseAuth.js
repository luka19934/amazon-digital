import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api/requestUrls";
import useLocalStorage from "./UseLocalStorage";

const useAuth = () => {
  const [authData, setAuthData] = useLocalStorage("authData", null);
  const navigate = useNavigate();

  async function login(data) {
    axios
      .post(api.auth.login, data)
      .then((res) => {
        setAuthData(res.data);
        navigate("/products");
      })
      .catch((e) => {
        console.error("error", e);
        alert("Authentication failed. Try again.");
      });
  }

  function logout() {
    setAuthData(null);
  }

  function isAuthed() {
    return authData && authData.token;
  }

  return {
    authData,
    login,
    logout,
    isAuthed,
  };
};

export default useAuth;
