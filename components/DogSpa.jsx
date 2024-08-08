import React,{ useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DogSpaImg from "../public/img/services/dogspa.png";
import BathImg from "../public/img/services/dogspa1.jpeg"; // Add actual image path
import HaircutImg from "../public/img/services/dog spa 2.jpeg"; // Add actual image path
import NailTrimImg from "../public/img/services/dogspa2.jpeg"; // Add actual image path
import EarCleaningImg from "../public/img/services/dogspa3.jpeg"; // Add actual image path
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ title, description, bgColor, delay }) => (
  <div
    className={`flex flex-col items-center justify-center p-6 ${bgColor} rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1`}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <h2 className="text-2xl font-bold mb-2 text-gray-700">{title}</h2>
    <p className="text-lg text-center text-gray-600">{description}</p>
  </div>
);

const DogSpa = () => {
  useEffect(() => {
    AOS.init({
      duration: 200, // Duration of animation in milliseconds
    });
  }, []);

  return (
    <section className="p-10 min-h-screen flex items-center justify-center">
      <style jsx global>{`
        html,
        body,
        #__next {
          background: url("/img/services/pxfuel1.jpg");
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
          margin: 0;
          height: 100%;
          width: 100%;
          color: white;
        }
      `}</style>
      <div className="container mx-auto text-center bg-white bg-opacity-85 p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-[#388697]" data-aos="fade-up">
          Calgary’s Best Dog Grooming & Pampering
        </h1>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="100">
          Please note as of February 2022 our Grooming department has moved to #206 3400 14st NW (30 seconds away from
          our Daycare). Free Daycare is still offered for all of our Grooming Customers.
        </p>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
          <Image src={DogSpaImg} layout="fill" objectFit="cover" alt="Dog Spa" className="rounded-lg shadow-lg" />
        </div>
        <p className="mb-8 text-xl text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="300">
          Pamper your posh pup with Pawsitively Pooched! We provide stress-free, professional dog grooming in a safe,
          clean environment for any age, any size, and any breed of canine in Calgary.
        </p>
        <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
          <Image src={BathImg} layout="fill" objectFit="cover" alt="Bath" className="rounded-lg shadow-lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Baths & Haircuts"
            description="Professional grooming services to keep your dog looking fresh and clean."
            bgColor="bg-[#F79D5C]"
            delay="400"
          />
          <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
            <Image src={HaircutImg} layout="fill" objectFit="cover" alt="Haircut" className="rounded-lg shadow-lg" />
          </div>
          <ServiceCard
            title="Nail Trims & Ear Cleaning"
            description="Gentle care for your dog's nails and ears to maintain their health and hygiene."
            bgColor="bg-[#F79D5C]"
            delay="500"
          />
          <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="500">
            <Image src={NailTrimImg} layout="fill" objectFit="cover" alt="Nail Trim" className="rounded-lg shadow-lg" />
          </div>
          <ServiceCard
            title="Relaxing Environment"
            description="A calming atmosphere for your dog to unwind and enjoy their spa experience."
            bgColor="bg-[#F79D5C]"
            delay="600"
          />
          <div className="image-container relative w-64 h-64 mx-auto mb-8" data-aos="fade-up" data-aos-delay="600">
            <Image src={EarCleaningImg} layout="fill" objectFit="cover" alt="Ear Cleaning" className="rounded-lg shadow-lg" />
          </div>
          <ServiceCard
            title="High-Quality Products"
            description="We use only the best products to ensure your dog's coat is healthy and shiny."
            bgColor="bg-[#F79D5C]"
            delay="700"
          />
          <ServiceCard
            title="Experienced Groomers"
            description="Our groomers are trained to handle all breeds and temperaments with care."
            bgColor="bg-[#F79D5C]"
            delay="800"
          />
          <ServiceCard
            title="Spa Packages"
            description="Choose from a variety of packages to suit your dog's specific needs."
            bgColor="bg-[#F79D5C]"
            delay="900"
          />
        </div>
        <p className="text-lg mt-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1000">
          When we think about keeping our pups happy and healthy, most of our minds wander towards vet appointments and
          great pet food, but don’t forget grooming! Keeping your dog well groomed is so important to caring for your
          posh pooch! When your pup is clean, looking good, and smelling good, you have one happy pooch on your hands.
        </p>
        <p className="text-lg mt-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1100">
          While it may be fun giving your pup a bath at home sometimes, it can also be frustrating, stressful, and
          you’ll probably find yourself cleaning up a huge mess afterwards! Take the stress out of keeping your dog
          looking, smelling, and feeling good and leave it to the professionals. All of our groomers are well-trained
          and certified, with years of experience catering to the canines of Calgary.
        </p>
        <p className="text-lg mt-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1200">
          We treat every one of our canine clients like family. Our spa facilities are designed to cater to your canine,
          always placing their comfort and safety as priority. The Pawsitively Pooched dog grooming and spa experience
          is personalized to each pup who paws their way into our salon. If your pup gets nervous around loud noises, or
          simply doesn’t like getting a bath, we can handle it! We’ll meet your pup where they are; we want them to be
          excited to come see us for dog grooming!
        </p>
        <p className="text-lg mt-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1300">
          What’s Included in Pawsitively Pooched Pampering & Grooming? We offer a variety of services, including full
          grooms, in-between grooms, and all-inclusive pup-grades for the ultimate spa day! Our prices are based on the
          size of your pup, coat condition, and desired services. All grooms include a bath, brushing, nail clipping,
          and ear cleaning. We also offer customized shampooing and conditioning, depending on what would most benefit
          your dog’s fur and skin. Our professional dog styling is included in Full Grooms. Need in-between services
          like nail clipping and ear cleaning? We’ve got you covered with our à la carte dog grooming services!
        </p>
        <p className="text-lg mt-8 text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="1400">
          Whether you’re looking for a creative hairstyle for your fashionable pooch, or a standard cut to keep your
          hound cool for summer, our experienced stylists will get your pup looking like a million bones! They’ll be the
          most pup-ular dog at the park! Give us a call for a free quote on dog grooming for your furry, four-legged
          companion.
        </p>
        <div className="text-lg mt-8 text-gray-700" data-aos="fade-up" data-aos-delay="1500">
          <h3 className="text-3xl font-bold mb-6">Prices</h3>
          <table className="w-full border-collapse border border-gray-900">
            <thead>
              <tr>
                <th className="border border-gray-900 px-4 py-2">Size</th>
                <th className="border border-gray-900 px-4 py-2">Small Dog</th>
                <th className="border border-gray-900 px-4 py-2">Medium Dog</th>
                <th className="border border-gray-900 px-4 py-2">Large Dog</th>
                <th className="border border-gray-900 px-4 py-2">Extra Large Dog</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-900 px-4 py-2">Full Groom</td>
                <td className="border border-gray-900 px-4 py-2">$80+</td>
                <td className="border border-gray-900 px-4 py-2">$100+</td>
                <td className="border border-gray-900 px-4 py-2">$125+</td>
                <td className="border border-gray-900 px-4 py-2">$70/Hour</td>
              </tr>
              <tr>
                <td className="border border-gray-900 px-4 py-2">Bath & Tidy</td>
                <td className="border border-gray-900 px-4 py-2">$65+</td>
                <td className="border border-gray-900 px-4 py-2">$85+</td>
                <td className="border border-gray-900 px-4 py-2">$100+</td>
                <td className="border border-gray-900 px-4 py-2">$70/Hour</td>
              </tr>
              <tr>
                <td className="border border-gray-900 px-4 py-2">Doodles</td>
                <td className="border border-gray-900 px-4 py-2">$90+</td>
                <td className="border border-gray-900 px-4 py-2">$110+</td>
                <td className="border border-gray-900 px-4 py-2">$130+</td>
                <td className="border border-gray-900 px-4 py-2">$150+</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2 text-left text-gray-500">
            **All listed prices are subject to change based on dog size, coat condition, and desired service. Grooms can
            take a range of 1 to 4 hours, we will contact you when your dog is completed. Please show up on or before
            your dog’s scheduled time, we do not want to issue late charges but will if needed although a polite first
            warning is given.
          </p>
          <p className="text-sm mt-2 text-left text-gray-600">
            Please note as of February 2022 our Grooming department has moved to #206 3400 14st NW (30 seconds away from
            our Daycare).
          </p>
        </div>
        <Link href="/pricing">
          <div
            className="inline-block mt-6 px-8 py-3 rounded-md bg-[#388697] text-white text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            View Full Prices
          </div>
        </Link>
        <h3 className="text-3xl font-bold mt-10 mb-6" data-aos="fade-up" data-aos-delay="1700">
          Meet Some of Our Pawsitively Pampered Pooches!
        </h3>
      </div>
    </section>
  );
};

export default DogSpa;
