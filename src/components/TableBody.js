import React from "react";

// classes
const classes = {
  td: `border border-gray-200 py-1 px-2 text-sm sm:text-md`,
};

const TableBody = ({ userList }) => {
  return (
    <tbody>
      {userList.map((el) => (
        <tr key={el.email}>
          <td className={`${classes.td} sm:pl-4 text-left`}>{el.name}</td>
          <td className={classes.td}>{el.email}</td>
          <td className={classes.td}>{el.gender}</td>
          <td className={classes.td}>{el.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
