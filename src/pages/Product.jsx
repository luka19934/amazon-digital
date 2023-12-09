// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import AlertContext from "../contexts/AlertContext";
import { Button, ImageList, ImageListItem, Rating } from "@mui/material";
import Loader from "../components/Loader";
import useCart from "../hooks/UseCart";

const Product = () => {
  const { add } = useCart();
  const { alertError } = useContext(AlertContext);
  const [data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    api
      .get(`/products/${params.id}`)
      .then((res) => setData(res.data))
      .catch(() => alertError("System Error!"));
  }, [alertError, params.id]);
  if (!data) return <Loader />;

  return (
    <div
      style={{
        display: "flex",
        gap: 30,
      }}
    >
      <ImageList sx={{ width: 400, height: 350 }} cols={3} rowHeight={164}>
        {data.images.map((imgUrl) => (
          <ImageListItem key={imgUrl}>
            <img src={imgUrl} alt={imgUrl} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        <h2>{data.title}</h2>
        <h4>{data.category}</h4>
        <p>Description: {data.description}</p>
        <span>Brand: {data.brand}</span>
        <br />
        <br />
        <span>
          Price: <b style={{ color: "green" }}>${data.price}</b>
        </span>
        <br />
        <br />
        <span style={{ color: "red" }}>
          <b style={{ color: "black" }}>Discount:</b> -{data.discountPercentage}
          %
        </span>
        <br />
        <br />
        <span>Stock:{data.stock}</span>
        <br />
        <br />
        Rating: <Rating name="Rating" value={data.rating} precision={0.1} />
        <br />
        <br />
        <Button onClick={() => add(params.id)}>Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
