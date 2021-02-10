import React, { createContext, useReducer } from 'react';

const initialValue = 'jhonatan';
export const GlobalContext = createContext(initialValue);

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      throw new Error('error in reduce');
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
