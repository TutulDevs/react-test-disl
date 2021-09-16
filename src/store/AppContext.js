import React, { useState } from "react";

// context
export const AppContext = React.createContext({
  counter: 0,
  onIncreaseCounter: () => {},
});

// provider
export const AppProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const counterIncreaseHandler = () => setCounter(counter + 1);

  return (
    <AppContext.Provider
      value={{
        counter,
        onIncreaseCounter: counterIncreaseHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
