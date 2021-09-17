import { useContext } from "react";
import TableBody from "../components/TableBody";
import PageHeader from "../components/UI/PageHeader";
import AppContext from "../store/AppContext";

const List = () => {
  const { userList } = useContext(AppContext);

  return (
    <>
      <PageHeader title="Users List" />

      {/* Table */}
      <div className="text-center mr-4 sm:mr-0 p-4 py-6 overflow-x-auto">
        {/* if there's no items */}
        {!userList.length && (
          <h1 className="text-2xl">No user data is found!</h1>
        )}

        {/* if theres items */}
        {userList.length && <TableBody users={userList} />}
      </div>
    </>
  );
};

export default List;
