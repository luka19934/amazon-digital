import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./styles.css";

const SearchBar = ({ setQuery }) => {
  const [search, setSearch] = useState("");
  return (
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
        className="searchButton"
        variant="contained"
        onClick={() => setQuery(search)}
      >
        <Search />
      </Button>
    </div>
  );
};

export default SearchBar;
