// context/AdminContext.js

import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState([
    {
      name: 'Admin One',
      image: 'https://th.bing.com/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&w=267&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
   
  ]);
  const [currentAdminIndex, setCurrentAdminIndex] = useState(0);

  const updateAdmin = (index, updatedAdmin) => {
    const updatedAdmins = [...admins];
    updatedAdmins[index] = updatedAdmin;
    setAdmins(updatedAdmins);
  };

  return (
    <AdminContext.Provider
      value={{
        admins,
        currentAdminIndex,
        setCurrentAdminIndex,
        updateAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
