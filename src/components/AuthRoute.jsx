import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const AuthRoute = () => {
  const navigate = useNavigate();
  const { isAuthed } = useAuth();
  if (!isAuthed()) {
    navigate("/login");
  }
  return <Outlet />;
};

export default AuthRoute;
