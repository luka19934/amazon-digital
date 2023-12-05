import { Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div
        className="card-img"
        style={{ backgroundImage: `url(${product.thumbnail})` }}
      />
      <div className="card-content">
        <h4>{product.title}</h4>
        <div className="price">${product.price}</div>
        <div>Stock: {product.stock}</div>
        <Rating name="Rating" value={product.rating} precision={0.1} />
      </div>
    </div>
  );
};

export default ProductCard;
