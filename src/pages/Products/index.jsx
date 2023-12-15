import React, { useEffect, useState } from "react";
import api from "../../api";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import usePagination from "../../hooks/UsePagination";
import "./styles.css";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import { Pagination } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const limit = 12;
  const { skip, pageCount, page, setPage } = usePagination(limit, total);

  useEffect(() => {
    if (!isCategorySelected)
      api
        .get(`/products/search?q=${query}&limit=${limit}&skip=${skip}`)
        .then((res) => {
          setProducts(res.data.products);
          setTotal(res.data.total);
          setIsLoaded(true);
        })
        .catch((error) => console.error(error));
  }, [isCategorySelected, query, skip]);

  return (
    <div className="products-page">
      <SearchBar setQuery={setQuery} />
      <CategoryFilter
        setProducts={setProducts}
        setTotal={setTotal}
        skip={skip}
        limit={limit}
        setPage={setPage}
        setIsLoaded={setIsLoaded}
        setIsCategorySelected={setIsCategorySelected}
      />
      {isLoaded ? (
        <>
          <div className="products-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            className="pagination"
            color="primary"
            page={page}
            count={pageCount}
            onChange={(_, value) => setPage(value)}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
