import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import api from "../../api";
import "./styles.css";

const CategoryFilter = ({
  setProducts,
  setTotal,
  setPage,
  setIsLoaded,
  skip,
  limit,
  setIsCategorySelected,
}) => {
  const ALL_CATEGORIES = "All categories";
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  useEffect(() => {
    api
      .get("/products/categories")
      .then((response) => setCategories([ALL_CATEGORIES, ...response.data]))
      .catch((err) => console.error(err));
  }, [setCategories]);

  useEffect(() => {
    if (selectedCategory !== ALL_CATEGORIES) {
      setIsLoaded(false);
      api
        .get(
          `/products/category/${selectedCategory}?skip=${skip}&limit=${limit}`
        )
        .then((response) => {
          setProducts(response.data.products);
          setTotal(response.data.total);
          setPage(1);
          setIsLoaded(true);
          setIsCategorySelected(true);
        })
        .catch((err) => console.error(err));
    } else {
      setIsCategorySelected(false);
    }
  }, [
    limit,
    selectedCategory,
    setIsCategorySelected,
    setIsLoaded,
    setPage,
    setProducts,
    setTotal,
    skip,
  ]);

  const handleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="select-container">
      <FormControl fullWidth>
        <InputLabel id="select-label">Category</InputLabel>
        <Select
          labelId="select-label"
          value={selectedCategory}
          label="Category"
          onChange={handleSelect}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoryFilter;
