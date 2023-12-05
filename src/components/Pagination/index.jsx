import { Button } from "@mui/material";
import React from "react";
import "./styles.css";

const Pagination = ({ page, setPage, pageCount }) => {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((pageNum) => (
        <Button
          variant={pageNum == page ? "contained" : "outlined"}
          onClick={() => setPage(pageNum)}
          key={pageNum}
        >
          {pageNum}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
