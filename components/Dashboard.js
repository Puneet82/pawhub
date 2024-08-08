// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">User Dashboard</h1>
          {user && (
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-4">
              <div className="p-6 bg-white border-b border-gray-200">
                <p className="text-lg font-semibold text-gray-900">Welcome, {user.username}!</p>
                <p className="text-sm text-gray-600">Email: {user.email}</p>

                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-900">Your Adopted Pets</h2>
                  <ul className="divide-y divide-gray-200">
                    {user.adoptedPets.map((pet) => (
                      <li key={pet.id} className="py-2">
                        <p className="text-gray-900">{pet.name}, {pet.breed}, Age: {pet.age}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-900">Your Favorite Pets</h2>
                  <ul className="divide-y divide-gray-200">
                    {user.favoritePets.map((pet) => (
                      <li key={pet.id} className="py-2">
                        <p className="text-gray-900">{pet.name}, {pet.breed}, Age: {pet.age}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
