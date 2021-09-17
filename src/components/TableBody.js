import useSortableData from "../hooks/useSortTable";

const TableBody = ({ users }) => {
  // using
  const { items, requestSort } = useSortableData(users);

  // classes
  const classes = {
    table: `border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative`,
    th: `border border-green-500 bg-green-500 text-white p-1 py-2 cursor-pointer`,
    td: `border border-gray-200 py-1 px-2 text-sm sm:text-md`,
  };

  // th data
  const thItems = [
    { id: "name", title: "Name" },
    { id: "email", title: "Email" },
    { id: "gender", title: "Gender" },
    { id: "phone", title: "Phone" },
  ];

  return (
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

      <tbody>
        {items.map((el) => (
          <tr key={el.email}>
            <td className={`${classes.td} sm:pl-4 text-left`}>{el.name}</td>
            <td className={classes.td}>{el.email}</td>
            <td className={classes.td}>{el.gender}</td>
            <td className={classes.td}>{el.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBody;
