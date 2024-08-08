import React from 'react';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
// import img from '../public/img/signup/signup.png';
import img from '../public/img/signup/signupleft.png';

const signuppage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-around ">
      <div className="flex flex-1">
      <div
      className="w-[50%] bg-center bg-cover hidden md:block m-10"
      style={{ backgroundImage: `url(${img.src})`,backgroundPosition:'end center',backgroundSize:'contain',backgroundRepeat:'no-repeat' }}
      // style={{ backgroundImage: `url('https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg')` }}
    >
      {/* <img className='w-full h-full' src={img} alt="" /> */}
    </div>
        <div className="w-full md:w-[50%] flex items-center justify-evenly">
          <div className="w-full max-w-md px-4 py-8 shadow hover:shadow-lg m-8 rounded-2xl">
            <SignUp />
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default signuppage;
