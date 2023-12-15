// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import AlertContext from "../../contexts/AlertContext";
import { Button, ImageList, ImageListItem, Rating } from "@mui/material";
import Loader from "../../components/Loader";
import useCart from "../../hooks/UseCart";
import "./styles.css";

const Product = () => {
  const { add } = useCart();
  const { alertError } = useContext(AlertContext);
  const [productData, setProductData] = useState();
  const params = useParams();
  useEffect(() => {
    api
      .get(`/products/${params.id}`)
      .then((res) => setProductData(res.data))
      .catch(() => alertError("System Error!"));
  }, [alertError, params.id]);
  if (!productData) return <Loader />;

  return (
    <div className="product-page">
      <ImageList sx={{ width: 400, height: 350 }} cols={3} rowHeight={164}>
        {productData.images.map((imgUrl) => (
          <ImageListItem key={imgUrl}>
            <img src={imgUrl} alt={imgUrl} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        <h2>{productData.title}</h2>
        <h4>{productData.category}</h4>
        <p>Description: {productData.description}</p>
        <span>Brand: {productData.brand}</span>
        <br />
        <br />
        <span>
          Price: <b className="colorGreen">${productData.price}</b>
        </span>
        <br />
        <br />
        <span className="colorRed">
          <b className="colorRed">Discount:</b> -
          {productData.discountPercentage}%
        </span>
        <br />
        <br />
        <span>Stock: {productData.stock}</span>
        <br />
        <br />
        <div>
          <span className="verticallyAligned">Rating: </span>
          <Rating
            className="verticallyAligned"
            name="Rating"
            value={productData.rating}
            precision={0.1}
          />
        </div>
        <br />
        <br />
        <Button onClick={() => add(productData)}>Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
