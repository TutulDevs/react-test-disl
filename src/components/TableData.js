import { useContext, useState } from "react";
import useSortableData from "../hooks/useSortTable";
import AppContext from "../store/AppContext";
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

  // search filter
  const [searchItem, setSearchItem] = useState("");

  // context
  const { paginationItemsPerPage, onPaginationItemsPerPage } =
    useContext(AppContext);

  // search val
  const searchHelper = (item) =>
    item.toLowerCase().includes(searchItem.toLowerCase());

  const handleSearchArr = (arr) => {
    return arr.filter((item) => {
      if (searchItem === "") return item;
      if (
        searchHelper(item.name) ||
        searchHelper(item.email) ||
        searchHelper(item.gender) ||
        searchHelper(item.phone)
      )
        return item;
    });
  };

  // sorting data with searching fn
  const { items, requestSort } = useSortableData(handleSearchArr(users));

  // handle items per page
  const handleItemsPerPage = (e) => onPaginationItemsPerPage(e.target.value);

  // pagination
  const indexOfLastPost = currentPage * paginationItemsPerPage;
  const indexOfFirstPost = indexOfLastPost - paginationItemsPerPage;
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
      {/* Search */}
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="mb-4 px-2 pt-1.5 pb-1.5 float-left outline-none rounded-md border border-green-200 focus:border-green-400 focus:ring-4 focus:ring-green-200"
        onKeyUp={(e) => setSearchItem(e.target.value)}
      />

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
            value={paginationItemsPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>

        <Pagination
          itemsPerPage={paginationItemsPerPage}
          totalItems={items.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default TableData;
