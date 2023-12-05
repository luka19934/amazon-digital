import { Search } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../api";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import "./styles.css";
import usePagination from "../../hooks/UsePagination";
import Pagination from "../../components/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);

  const limit = 12;
  const { skip, pageCount, page, setPage } = usePagination(limit, total);

  useEffect(() => {
    api
      .get(`/products/search?q=${query}&limit=${limit}&skip=${skip}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotal(res.data.total);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [query, skip]);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className="product-page">
      <div className="search-bar">
        <TextField
          fullWidth
          label="Search"
          onChange={(e) => {
            if (!e.target.value) setQuery("");
            setSearch(e.target.value);
          }}
        />
        <Button
          style={{ boxShadow: "none" }}
          variant="contained"
          onClick={() => setQuery(search)}
        >
          <Search />
        </Button>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination pageCount={pageCount} page={page} setPage={setPage} />
    </div>
  );
};

export default Products;
