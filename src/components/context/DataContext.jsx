import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setFetchedData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <DataContext.Provider value={fetchedData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};