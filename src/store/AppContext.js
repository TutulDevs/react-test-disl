import React, { useEffect, useState } from "react";

// context
export const AppContext = React.createContext({
  counter: 0,
  onIncreaseCounter: () => {},
  userList: [],
  onAddUser: () => {},
});

// provider
export const AppProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const [userList, setUserList] = useState([]);

  // fetch users
  useEffect(() => {
    const url = `https://randomuser.me/api/?results=20`;
    const users = async () => {
      try {
        const result = await fetch(url);
        const fullData = await result.json();
        const data = await fullData.results;

        // our array
        let fetchedUser = [];

        for (const el of data) {
          const name = await `${el.name.first} ${el.name.last}`;
          const gender = await el.gender;
          const email = await el.email;
          const phone = await el.phone;

          let obj = {
            name,
            email,
            gender,
            phone,
          };

          // push
          fetchedUser.push(obj);
        }

        setUserList(fetchedUser);
      } catch (err) {
        console.log(err);
      }
    };
    users();
  }, []);

  // counter handler
  const counterIncreaseHandler = () => setCounter(counter + 1);

  // adding users
  const addUserHandler = (userData) => setUserList(userList.concat(userData));

  return (
    <AppContext.Provider
      value={{
        counter,
        onIncreaseCounter: counterIncreaseHandler,
        userList,
        onAddUser: addUserHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

/*

   {
      name: "Scarlet Johansson",
      email: "test@test.dev",
      gender: "female",
      phone: 123456789,
    },

*/
