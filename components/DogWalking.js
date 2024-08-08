import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DogWalkingImg from "../public/img/services/dogwalking.png"; // Update with actual image path
import ParkImg from "../public/img/services/dogwalk1.jpeg";
import CityImg from "../public/img/services/dogwalk2.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const DogWalking = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  return (
    <section className="p-10 min-h-screen flex items-center justify-center">
      <style jsx global>{`
        html,
        body,
        #__next {
          background: url('/img/services/pxfuel1.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          margin: 0;
          height: 100%;
          width: 100%;
          color: white;
        }

        .min-h-screen {
          min-height: 100vh;
        }

        .image-effect {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }

        .image-effect:hover {
          transform: scale(1.05);
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
        }

        .image-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 2rem auto; /* Add margin to create space around the images */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
        }

        th,
        td {
          border: 1px solid #333;
          padding: 12px;
          text-align: center;
        }

        th {
          background-color: #f2f2f2;
          color: #333;
        }

        td {
          background-color: #fff;
          color: #333;
        }
      `}</style>
      <div className="container mx-auto text-center bg-white bg-opacity-85 p-10 rounded-lg shadow-lg" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-6 text-[#388697]" data-aos="fade-up" data-aos-delay="100">
          Calgary’s Premier Dog Walking Services
        </h1>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-600" data-aos="fade-up" data-aos-delay="200">
          Engaging Experiences for Your Pup
        </h2>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="300">
          Our dog walking services offer more than just exercise—they provide a fun, engaging experience for your pup!
          Whether you need a quick walk or an extended adventure, our team is here to keep your dog active and happy.
        </p>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
          <Image
            src={DogWalkingImg}
            layout="fill"
            objectFit="cover"
            alt="Dog Walking"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-600" data-aos="fade-up" data-aos-delay="500">
          Personalized Attention and Care
        </h2>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="600">
          Our experienced walkers ensure your dog receives personalized attention and care. We cater to all breeds and
          sizes, ensuring your pup’s safety and enjoyment on every walk.
        </p>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-600" data-aos="fade-up" data-aos-delay="700">Services We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-6 bg-[#F79D5C] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="800">
            <h3 className="text-2xl font-bold mb-2 text-gray-600">Daily Walks</h3>
            <p className="text-lg text-center text-gray-600 text-justify">
              Regular walks to keep your dog healthy and happy.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#F79D5C] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="900">
            <h3 className="text-2xl font-bold mb-2 text-gray-600">Adventure Walks</h3>
            <p className="text-lg text-center text-gray-600 text-justify">
              Extended walks for extra exercise and exploration.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#F79D5C] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1000">
            <h3 className="text-2xl font-bold mb-2 text-gray-600">Group Walks</h3>
            <p className="text-lg text-center text-gray-600 text-justify">
              Socialize your dog with other friendly pups.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#F79D5C] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1100">
            <h3 className="text-2xl font-bold mb-2 text-gray-600">Private Walks</h3>
            <p className="text-lg text-center text-gray-600 text-justify">
              One-on-one attention for your dog's specific needs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#F79D5C] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1200">
            <h3 className="text-2xl font-bold mb-2 text-gray-600">Flexible Scheduling</h3>
            <p className="text-lg text-center text-gray-600 text-justify">
              Walks available at various times to fit your schedule.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#F79D5C] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1300">
            <h3 className="text-2xl font-bold mb-2 text-gray-600">Experienced Walkers</h3>
            <p className="text-lg text-center text-gray-600 text-justify">
              Trained professionals to ensure your dog’s safety and enjoyment.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="1400">
          Benefits of Regular Walks
        </h2>
        <p className="text-lg mt-10 mb-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1500">
          Regular walks are crucial for your dog’s health and well-being. Our services provide not just exercise, but
          also mental stimulation and socialization for your furry friend.
        </p>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="1600">
          <Image src={ParkImg} alt="Dog Walking in Park" className="rounded-lg" width={400} height={400} />
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="1700">
          Comprehensive Walking Plans
        </h2>
        <p className="text-lg mt-8 mb-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1800">
          From quick bathroom breaks to long hikes, we’ve got your dog’s walking needs covered. Let us handle the walks
          while you enjoy the extra time to yourself.
        </p>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="1900">
          <Image src={CityImg} alt="Dog Walking in City" className="rounded-lg" width={400} height={400} />
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="2000">Dedicated Care</h2>
        <p className="text-lg mt-8 mb-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="2100">
          Our team is dedicated to providing the best care for your pup. We ensure every walk is enjoyable and
          beneficial for your dog’s physical and emotional health.
        </p>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="2200">Pricing</h2>
        <p className="text-lg mt-8 mb-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="2300">
          We offer a variety of pricing options to fit your needs. Whether you need a quick 30-minute walk or a
          90-minute adventure, our competitive prices ensure your dog gets the best care at an affordable rate.
        </p>
        <table className="w-full border-collapse border border-gray-900 mb-8" data-aos="fade-up" data-aos-delay="2400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 text-xl text-gray-700">Type</th>
              <th className="border border-gray-400 px-4 py-2 text-xl text-gray-700">30 Minutes</th>
              <th className="border border-gray-400 px-4 py-2 text-xl text-gray-700">60 Minutes</th>
              <th className="border border-gray-400 px-4 py-2 text-xl text-gray-700">90 Minutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">Single Walk</td>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">$25</td>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">$40</td>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">$55</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">Group Walk</td>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">$20</td>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">$35</td>
              <td className="border border-gray-400 px-4 py-2 text-lg text-gray-600">$50</td>
            </tr>
          </tbody>
        </table>
        <Link href="/pricing">
          <div className="inline-block mt-6 px-8 py-3 rounded-md bg-[#388697] text-white text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 cursor-custom" data-aos="fade-up" data-aos-delay="2500">
            View Full Prices
          </div>
        </Link>
      </div>
    </section>
  );
};

export default DogWalking;
