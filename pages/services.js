import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceSlider from '../components/ServiceSlider';


const Services = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <ServiceSlider/>
            </div>
            <Footer />
        </div>
    );
};

export default Services;