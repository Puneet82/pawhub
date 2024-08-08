import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import DayCareImg from "../public/img/services/daycare.png";
import PlayTimeImg from "../public/img/services/day care 2.jpeg"; // Add actual image path
import NapTimeImg from "../public/img/services/day care3.jpeg"; // Add actual image path
import MealTimeImg from "../public/img/services/day care1.jpeg"; // Add actual image path
import SocialTimeImg from "../public/img/services/daycare1.jpeg"; // Add actual image path
import img2 from "../public/img/services/pxfuel.jpg";

const DayCare = () => {
  useEffect(() => {
    AOS.init({
      duration:  200, // Duration of animation in milliseconds
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
      `}</style>
      <div className="container mx-auto text-center bg-white opacity-85 p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-[#388697]" data-aos="fade-up">Dog daycare in Calgary</h1>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
          <Image src={DayCareImg} layout="fill" objectFit="cover" alt="Day Care" className="rounded-lg shadow-lg" />
        </div>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="200">
          As Calgary’s #1 doggy daycare, we welcome pooches of all shapes and sizes as family, providing opportunities
          for socialization, exercise, and active engagement while you take care of business during the day!
        </p>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="300">
          <Image src={PlayTimeImg} layout="fill" objectFit="cover" alt="Play Time" className="rounded-lg shadow-lg" />
        </div>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="300">
          Ever come home to a mess because your dog was bored? Interested in helping your pup find a furry best friend?
          Pawsitively Pooched’s Posh Daycare is for you!
        </p>
        <h2 className="text-3xl font-bold mb-4 text-gray-600" data-aos="fade-up" data-aos-delay="400">
          Big, Small, We Love Them All!
        </h2>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
          <Image src={NapTimeImg} layout="fill" objectFit="cover" alt="Nap Time" className="rounded-lg shadow-lg" />
        </div>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="500">
          If you have a shy dog, a dog that doesn’t play well with others, or an older dog with mobility issues,
          Pawsitively Pooched’s doggie daycare is still for you! We personalize all schedules to accommodate their
          needs, ensuring the happiness of the whole pack. Our friendly, experienced, and highly-trained specialists
          work hard every day to make sure your pooch feels welcomed, comfortable, and excited to come back again soon!
        </p>
        <h2 className="text-3xl font-bold mb-4 text-gray-600" data-aos="fade-up" data-aos-delay="600">
          How Pawsitively Pooched Does Dog Daycare
        </h2>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="600">
          <Image src={MealTimeImg} layout="fill" objectFit="cover" alt="Meal Time" className="rounded-lg shadow-lg" />
        </div>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="700">
          Since opening our doors in 2005, we’ve refined our approach to ensure all pups stay safe, healthy, and go home
          happy and tired. Here's what you can expect when your dog comes to stay with us during the day:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-6 bg-yellow-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="800">
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Personalized Schedules</h3>
            <p className="text-lg text-center text-gray-600">
              We tailor schedules to each dog's needs, ensuring comfort and happiness.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-green-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="900">
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Engaging Activities</h3>
            <p className="text-lg text-center text-gray-600">
              Our activities engage both body and mind, keeping your dog active and happy.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-red-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1000">
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Weekly Activities</h3>
            <p className="text-lg text-center text-gray-600">
              From agility and themed parties to pool parties and one-on-one time, we have it all!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-purple-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1100">
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Play Groups</h3>
            <p className="text-lg text-center text-gray-600">
              Dogs are grouped by interests, size, and energy levels for positive interactions.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-blue-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1200">
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Daily Obedience Practice</h3>
            <p className="text-lg text-center text-gray-600">
              Our trainers reinforce good manners and obedience throughout the day.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-pink-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1" data-aos="fade-up" data-aos-delay="1300">
            <h3 className="text-2xl font-bold mb-2 text-gray-700">Structured Meal Times</h3>
            <p className="text-lg text-center text-gray-600">
              Structured meal, nap, and play times teach good manners and communication skills.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="1400">
          Safety is Our #1 Priority
        </h2>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="1400">
          <Image
            src={SocialTimeImg}
            layout="fill"
            objectFit="cover"
            alt="Social Time"
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1500">
          We require all dogs to be up-to-date on vaccinations, and our facility is maintained with a rigorous cleaning
          routine. Our team is trained in pet first aid and behavior management.
        </p>
        <p className="text-xl mt-4 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1600">
          If your pup has any medications, we'll keep those on-site and administer them at appropriate times. Every pup
          is evaluated for group play to ensure a safe and happy experience.
        </p>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="1600">
          Our Pricing and Packages
        </h2>
        <p className="text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1700">
          We offer packages to suit your needs, including single-day and multi-day packages. Special discounts are
          available for additional services.
        </p>
        <Link href="/pricing">
          <div className="inline-block mt-6 px-8 py-3 rounded-md bg-[#388697] text-white text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 cursor-custom" data-aos="fade-up" data-aos-delay="1800">
            View Full Prices
          </div>
        </Link>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="1900">
          Your Pups Paws are in Good Hands
        </h2>
        <p className="text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="2000">
          We have worked for over 17 years to build a team of specialists to ensure that each and every pup that comes
          into our daycare is well taken care of and has a great time. Our team members maintain a calm and positive
          atmosphere, ensuring your pet’s environment is clean and safe.
        </p>
      </div>
    </section>
  );
};

export default DayCare;
