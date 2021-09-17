import React, { useState } from "react";

// context
export const AppContext = React.createContext({
  counter: 0,
  onIncreaseCounter: () => {},
  userList: [],
});

// provider
export const AppProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const [userList, setUserList] = useState([
    {
      name: "abc",
      email: "test@test.dev",
      gender: "male",
      phone: 12345,
    },
  ]);

  const counterIncreaseHandler = () => setCounter(counter + 1);

  return (
    <AppContext.Provider
      value={{
        counter,
        onIncreaseCounter: counterIncreaseHandler,
        userList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
