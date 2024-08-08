import React, { useState } from "react";
import Image from "next/image";
import Pet1Img from "../public/img/pets/dog_1.png";
import Pet2Img from "../public/img/pets/dog_2.png";
import Pet3Img from "../public/img/pets/dog_3.png";
import Pet4Img from "../public/img/pets/dog_4.png";
import Pet5Img from "../public/img/pets/dog_5.png";
import Pet6Img from "../public/img/pets/dog_6.png";
import Pet7Img from "../public/img/pets/dog_7.png";
import Pet8Img from "../public/img/pets/dog_8.png";
import Pet9Img from "../public/img/pets/dog_9.png";
import Pet10Img from "../public/img/pets/dog_10.png";
import Pet11Img from "../public/img/pets/11.png";
import Pet12Img from "../public/img/pets/dog_11.png";
import Badge from "../public/img/pets/badge.svg";

const pets = [
  { id: 1, category: "dog", name: "Labrador Retriever", image: Pet1Img },
  { id: 2, category: "dog", name: "Golden Retriever", image: Pet2Img },
  { id: 3, category: "dog", name: "German Shepherd", image: Pet3Img },
  { id: 4, category: "dog", name: "Beagle", image: Pet4Img },
  { id: 5, category: "dog", name: "Siberian Husky", image: Pet5Img },
  { id: 6, category: "dog", name: "Bulldog", image: Pet6Img },
  { id: 7, category: "dog", name: "Rottweiler", image: Pet7Img },
  { id: 8, category: "dog", name: "Boxer", image: Pet8Img },
  { id: 9, category: "dog", name: "Dachshund", image: Pet9Img },
  { id: 10, category: "dog", name: "Chihuahua", image: Pet10Img },
  { id: 11, category: "dog", name: "Pug", image: Pet11Img },
  { id: 12, category: "dog", name: "Poodle", image: Pet12Img },
];

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[10]);
  const [petIndex, setPetIndex] = useState(10);

  const getPetDetails = (id) => {
    const pet = pets.find((pet) => pet.id === id);
    setPetDetails(pet);
    setPetIndex(id - 1);
  };

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* badge */}
        <div className="bg-[#388697] hidden xl:flex xl:w-[30%] xl:pl-[160px]">
          <Image src={Badge} width={230} height={227} alt="Badge" />
        </div>
        {/* pets */}
        <div className="bg-[#F79D5C] flex-1 flex flex-col lg:flex-row">
          {/* pets detail */}
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              {/* category */}
              {/* <div className="text-[32px] capitalize">{petDetails.category}</div> */}
              {/* name */}
              <div className="uppercase text-[17px] mb-1">{petDetails.name}</div>
              {/* image */}
              <div className="w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full">
                <Image src={petDetails.image} width={150} height={150} alt={petDetails.name} />
              </div>
            </div>
          </div>
          {/* pet list */}
          <div className="relative lg:w-[60%] bg-[#F79D5C]/40 flex-1 flex items-center">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:mr-6">
              {pets.map((pet, index) => (
                <div onClick={() => getPetDetails(pet.id)} className="cursor-custom relative" key={index}>
                  {/* overlay */}
                  <div
                    className={`bg-black/40 w-full h-full absolute rounded-full ${
                      petIndex === index ? "border-2 border-white" : ""
                    }`}
                  ></div>
                  <Image src={pet.image} width={95} height={95} alt={pet.name} draggable="false" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
