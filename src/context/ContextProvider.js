import React, { useState } from 'react';
import AppContext from '../context/Context';

const AppProvider = ({ children }) => {
  const [add, setAdd] = useState(10);
  const sum = () => {
    setAdd(add + 1);
  };

  const subtract = () => {
    setAdd(add - 1);
  };

  return (
    <AppContext.Provider value={{ add,sum, subtract }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
