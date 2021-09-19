import { useContext } from "react";
import PageHeader from "../components/UI/PageHeader";
import AppContext from "../store/AppContext";
import TableData from "../components/TableData";

// classes
const classes = {
  tableContainer: `text-center mr-4 sm:mr-0 p-4 py-6 overflow-x-auto`,
  h1: `text-3xl mt-12 font-semibold text-green-500 animate-pulse`,
};

const List = () => {
  const { userList } = useContext(AppContext);

  // list found or not
  const listNotFound = userList.length === 0 ? true : false;

  return (
    <>
      <PageHeader title="Users List" />

      {/* Table */}
      <div className={classes.tableContainer}>
        {/* if there's no items */}
        {listNotFound && <h1 className={classes.h1}>No user data is found!</h1>}

        {/* if theres items */}
        {!listNotFound && <TableData users={userList} />}
      </div>
    </>
  );
};

export default List;
