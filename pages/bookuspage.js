import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookUs from '../components/BookUs';

const BookUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <BookUs />
            </div>
            <Footer />
        </div>
    );
};

export default BookUsPage;





