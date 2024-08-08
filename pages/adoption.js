import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdoptionServices from '../components/AdoptionServices'; // Correct import path and component name

const Adoption = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <AdoptionServices /> {/* Render the AdoptionServices component */}
      </div>
      <Footer />
    </div>
  );
};

export default Adoption;
