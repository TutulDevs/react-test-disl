import React, { useEffect } from "react";

// classes
const classes = {
  btn: `m-1 p-0 w-8 h-8 rounded-full bg-green-100`,
  btnActive: `m-1 p-0 w-8 h-8 rounded-full bg-green-200 ring-2 ring-green-400`,
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const newCurPage = currentPage - 1;

  return (
    <nav>
      <ul className="flex">
        {pageNumbers.map((number, idx) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              href="!#"
              className={idx === newCurPage ? classes.btnActive : classes.btn}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
