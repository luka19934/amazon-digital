import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import Layout from "./Layout";

const AuthRoute = () => {
  const { isAuthed } = useAuth();
  if (!isAuthed()) {
    return <Navigate to="/login" />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AuthRoute;
