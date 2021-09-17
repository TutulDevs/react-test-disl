import { useState } from "react";
import useSortableData from "../hooks/useSortTable";
import Pagination from "./Pagination";
import TableBody from "./TableBody";

// classes
const classes = {
  table: `border-collapse table-auto w-full max-w-screen-md mx-auto whitespace-no-wrap bg-white table-striped relative`,
  th: `border border-green-500 bg-green-500 text-white p-1 py-2 cursor-pointer`,
  paginationContainer: `w-full max-w-screen-md mx-auto p-1 mt-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center`,
};

const TableData = ({ users }) => {
  // pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // handle per page
  const handleItemsPerPage = (e) => setItemsPerPage(e.target.value);

  // sorting data
  const { items, requestSort } = useSortableData(users);

  // pagination
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // th data list
  const thItems = [
    { id: "name", title: "Name" },
    { id: "email", title: "Email" },
    { id: "gender", title: "Gender" },
    { id: "phone", title: "Phone" },
  ];

  return (
    <>
      {/* Table */}
      <table className={classes.table}>
        <thead>
          <tr>
            {thItems.map((el) => (
              <th
                key={el.id}
                className={classes.th}
                onClick={() => requestSort(el.id)}
              >
                {el.title}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <TableBody userList={currentItems} />
      </table>

      {/* Pagination */}
      <div className={classes.paginationContainer}>
        <div className="mb-3 sm:mb-0">
          <label htmlFor="paginationSelect" className="pr-2">
            Per Page
          </label>

          <select
            name="paginationSelect"
            id="paginationSelect"
            className="bg-white border w-12 pl-1"
            onChange={handleItemsPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default TableData;
