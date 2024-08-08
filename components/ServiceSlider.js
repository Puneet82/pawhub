import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import DayCareIcon from "../public/img/services/daycare_circle.png";
import DogWalkingIcon from "../public/img/services/dogwalking_circle.png";
import DogWalkIcon from "../public/img/services/dogwalk_circle.png";
import DogSpaIcon from "../public/img/services/dogspa_circle.png";
import DogSpa2Icon from "../public/img/services/dogspa_circle2.png";

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const services = [
  {
    image: DayCareIcon,
    name: "Day Care",
    description: "Our Day Care service provides a safe and fun environment for your pets.",
    btnText: "Explore",
    link: "/daycare",
  },
  {
    image: DogWalkIcon,
    name: "Dog Walking",
    description: "Our Dog Walking service ensures your furry friend gets the exercise they need.",
    btnText: "Explore",
    link: "/dogwalking",
  },
  {
    image: DogSpa2Icon,
    name: "Dog Spa",
    description: "Our Dog Spa service pampers your pet with luxurious grooming treatments.",
    btnText: "Explore",
    link: "/dogspa",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={40}
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="serviceSlider min-h-[680px] bg-[#ebe3cc] p-8"
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {services.map((service, index) => (
        <SwiperSlide className="border-primary-20 p-6 flex flex-col items-center text-center" key={index}>
          <div className="relative w-[300px] h-[300px] border-4 border-white rounded-full">
            <Image src={service.image} alt={service.name} className="rounded-full w-full h-full object-cover" />
          </div>
          <div className="w-full">
            <div className="text-center text-[#062d3e] mt-4 font-bold">{service.name}</div>
            <div className="text-center text-[#062d3e] mt-2 mb-4">{service.description}</div>
            <div className="text-center">
              <Link href={service.link}>
                <button className="btn bg-[#388697] text-white text-lg border-0 rounded-2xl hover:bg-[#F79D5C] mt-4">{service.btnText}</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;