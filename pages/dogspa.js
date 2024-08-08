import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DogSpa from '../components/DogSpa';

const DogSpaPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <DogSpa />
      </div>
      <Footer />
    </div>
  );
};

export default DogSpaPage;

