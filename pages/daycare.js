import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DogCare from '../components/DogCare';
const DogCarePage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <DogCare />
      </div>
      <Footer />
    </div>
  );
};

export default DogCarePage;




