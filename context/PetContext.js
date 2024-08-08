import React, { createContext, useState, useContext } from 'react';

const PetContext = createContext();

export const usePets = () => useContext(PetContext);

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([
    { id: 1, name: 'Buddy', age: 3, breed: 'Golden Retriever', status: 'Available', picture: 'https://images.unsplash.com/photo-1592194996308-7d95e07c3f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fEdlcm1hbiUyMFNoZXBoZXJkfGVufDB8fHx8MTYyODI5ODUzMw&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 2, name: 'Max', age: 2, breed: 'Labrador', status: 'Adopted', picture: 'https://images.unsplash.com/photo-1583511656205-6c5294ff10f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxMYWJyYWRvcnxlbnwwfHx8fDE2MjgyOTg1MzM&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 3, name: 'Bella', age: 4, breed: 'German Shepherd', status: 'Available', picture: 'https://images.unsplash.com/photo-1592194996308-7d95e07c3f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fEdlcm1hbiUyMFNoZXBoZXJkfGVufDB8fHx8MTYyODI5ODUzMw&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 4, name: 'Lucy', age: 1, breed: 'Poodle', status: 'Adopted', picture: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fFBvb2RsZXxlbnwwfHx8fDE2MjgyOTg1MzM&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 5, name: 'Charlie', age: 3, breed: 'Bulldog', status: 'Available', picture: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fEJ1bGxkb2d8ZW58MHx8fHwxNjI4Mjk4NTMz&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 6, name: 'Molly', age: 5, breed: 'Beagle', status: 'Available', picture: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fEJlYWdsZXxlbnwwfHx8fDE2MjgyOTg1MzM&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 7, name: 'Rocky', age: 2, breed: 'Boxer', status: 'Adopted', picture: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fEJveGVyfGVufDB8fHx8MTYyODI5ODUzMw&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 8, name: 'Daisy', age: 3, breed: 'Shih Tzu', status: 'Available', picture: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fFNoaWglMjBUenV8ZW58MHx8fHwxNjI4Mjk4NTMz&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 9, name: 'Jake', age: 4, breed: 'Husky', status: 'Available', picture: 'https://images.unsplash.com/photo-1577979749836-5d9c9805c2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fEh1c2t5fGVufDB8fHx8MTYyODI5ODUzMw&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 10, name: 'Toby', age: 2, breed: 'Corgi', status: 'Adopted', picture: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fENvcmdpfGVufDB8fHx8MTYyODI5ODUzMw&ixlib=rb-1.2.1&q=80&w=400' },
  ]);

  return (
    <PetContext.Provider value={{ pets, setPets }}>
      {children}
    </PetContext.Provider>
  );
};
