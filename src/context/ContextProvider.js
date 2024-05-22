import React, { useState, useCallback } from 'react';
import axios from 'axios';
import AppContext from '../context/Context';
import config from '../axios/config';

const AppProvider = ({ children }) => {
  const [data, setData] = useState(10);

  const token = localStorage.getItem('access_token');
  console.log("token")
  const getData = useCallback(async () => {
    try {
          const response = await axios.get(`${config.BASE_URL}/collection`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setData(response.data.findRecord); 
      return response.data.findRecord;
    } catch (error) {
      console.log("error", error);
    }
  },[]); 

  return (
    <AppContext.Provider value={{ 
      getData,
      data
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
