import { useState } from "react";

const usePagination = (limit, total) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(total / limit);
  const skip = (page - 1) * limit;
  return { skip, pageCount, page, setPage };
};
export default usePagination;
