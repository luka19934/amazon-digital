import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>

          <Route element={<AuthRoute />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="product/:id" element={<Product />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Route>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
