const TableBody = ({ users }) => {
  // classes
  const classes = {
    table: `border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative`,
    th: `border border-green-500 bg-green-500 text-white p-1 py-2`,
    td: `border border-gray-200 py-1 px-2 text-sm sm:text-md`,
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.th}>Name</th>
          <th className={classes.th}>Email</th>
          <th className={classes.th}>Gender</th>
          <th className={classes.th}>Phone</th>
        </tr>
      </thead>

      <tbody>
        {users.map((el) => (
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
