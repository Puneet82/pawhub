import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DogWalking from '../components/DogWalking';

const DogWalkingPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <DogWalking />
      </div>
      <Footer />
    </div>
  );
};

export default DogWalkingPage;
