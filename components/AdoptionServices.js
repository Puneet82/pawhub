

import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './HomePage.module.css';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';


const AdoptionServices = () => {

  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Mina",
      breed: "Shepherd Mix",
      age: "Adult",
      size: "Medium",
      image: "https://i.pinimg.com/originals/d8/34/82/d83482e99c8d451a6143fefe58af3355.jpg",
      location: "Calgary, AB",
      isFavorite: false,
      description: "Mina is a sweet and gentle Shepherd Mix looking for her forever home. She enjoys long walks and cuddle sessions.",
      adoptionFee: "Free",
      contact: "info@petadoptioncenter.com",
      availability: "Available"
    },
    {
      id: 2,
      name: "Skye",
      breed: "Labrador Retriever",
      age: "Young",
      size: "Large",
      image: "https://th.bing.com/th/id/OIP.7ZF3gcwLLoAHBkeWOdgqLAHaFq?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      location: "Calgary, AB",
      isFavorite: false,
      description: "Skye is a playful Labrador Retriever who loves to fetch and play in the water. She's great with kids and other pets.",
      adoptionFee: "Free",
      contact: "info@petadoptioncenter.com",
      availability: "Available"
    },
    {
      id: 3,
      name: "Tucker",
      breed: "Terrier Mix",
      age: "Senior",
      size: "Small",
      image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52595370/1/?bust=1643964905&width=300",
      location: "Calgary, AB",
      isFavorite: false,
      description: "Tucker is a senior Terrier Mix who loves cozy naps and gentle strolls. He is looking for a quiet home where he can spend his golden years.",
      adoptionFee: "Free",
      contact: "info@petadoptioncenter.com",
      availability: "Available"
    },
    {
      id: 4,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "Adult",
      size: "Large",
      image: "https://th.bing.com/th/id/OIP.gnIhpX2WeGZMPWEsM-2q2wHaFG?w=286&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      location: "Calgary, AB",
      isFavorite: false,
      description: "Buddy is a friendly Golden Retriever who loves playing fetch and being around people. He's great with kids and other pets.",
      adoptionFee: "Free",
      contact: "info@petadoptioncenter.com",
      availability: "Available"
    },
    {
      id: 5,
      name: "Lucy",
      breed: "Poodle Mix",
      age: "Young",
      size: "Medium",
      image: "https://th.bing.com/th/id/OIP.d04uZYltJwTwmlqlOgbrfAHaFj?w=251&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      location: "Calgary, AB",
      isFavorite: false,
      description: "Lucy is a young Poodle Mix with a lot of energy. She loves to run and play, and would be perfect for an active family.",
      adoptionFee: "Free",
      contact: "info@petadoptioncenter.com",
      availability: "Available"
    },
    {
      id: 6,
      name: "Rocky",
      breed: "Boxer",
      age: "Adult",
      size: "Large",
      image: "https://th.bing.com/th/id/OIP.pLWHrRxru1Ap_CPVUy1flgHaEA?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      location: "Calgary, AB",
      isFavorite: false,
      description: "Rocky is a strong and active Boxer who loves to play and needs plenty of exercise. He's looking for an experienced owner.",
      adoptionFee: "Free",
      contact: "info@petadoptioncenter.com",
      availability: "Available"
    },


  ]);

  const [filters, setFilters] = useState({ age: '', size: '', breed: '' });
  const [selectedPet, setSelectedPet] = useState(null);
  const router = useRouter(); // Use useRouter for navigation

  const toggleFavorite = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
    ));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const handleInquire = (pet) => {
    alert(`Inquiring about ${pet.name}`);
  };

  const handleAdopt = (pet) => {
    setSelectedPet(pet); // Set selected pet for adoption
    // Navigate to adoption form page with pet's name in URL
    router.push(`/adoption/form/${encodeURIComponent(pet.name)}`);
  };

  const filteredPets = pets.filter(pet => {
    return (
      (filters.age === '' || pet.age === filters.age) &&
      (filters.size === '' || pet.size === filters.size) &&
      (filters.breed === '' || pet.breed.toLowerCase().includes(filters.breed.toLowerCase()))
    );
  });

  return (
    <section className={styles.adoptionSection}>
      {!selectedPet && <div className="flex flex-col w-full items-center justify-center">
        <h2 className="items-center text-3xl font-bold">Filter Pets</h2>
        <div className="flex items-center justify-around w-full  rounded-2xl">

          <label className='w-1/3 m-2 text-xl flex items-center'>
            <div className="mx-3 ">
              Age:
            </div>
            <div className='w-full'>
              <select name="age" value={filters.age} className='text-center rounded-[2rem]' onChange={handleFilterChange}>
                <option className='p-5 rounded-[2rem]' value="">All</option>
                <option className='p-5 rounded-[2rem]' value="Young">Young</option>
                <option className='p-4 rounded-[2rem]' value="Adult">Adult</option>
                <option className='p-5 rounded-[2rem]' value="Senior">Senior</option>
              </select>
            </div>
          </label>
          <label className='w-1/3 m-2 text-xl flex items-center'>
            <div className="mx-3 ">
              Size:
            </div>
            <div className='w-full'>
              <select name="size" value={filters.size} className='text-center rounded-[2rem]' onChange={handleFilterChange}>
                <option className='p-5 rounded-[2rem]' value="">All</option>
                <option className='p-5 rounded-[2rem]' value="Small">Small</option>
                <option className='p-4 rounded-[2rem]' value="Medium">Medium</option>
                <option className='p-5 rounded-[2rem]' value="Large">Large</option>
              </select>
            </div>
          </label>
          <label className='w-1/3 m-2 text-xl flex items-center'>
            <div className='mx-3'>
              Breed:
            </div>
            {/* <div className='rounded-full overflow-hidden p-4 border-black border-1 bg-white w-full'> */}
            {/* </div> */}
            <div class="relative text-gray-600">
            <input
                type="search"
                name="breed"
                value={filters.breed}
                onChange={handleFilterChange}
                className='w-full bg-white flex h-12 p-6 border-gray-300 border-[1px] text-xl rounded-full text-sm focus:outline-none'
                placeholder="Search by breed"
              />
              {/* <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/> */}
            </div>
          </label>
        </div>

      </div>}

      {selectedPet && (
        <div >
          <button onClick={() => { setSelectedPet(false) }} className='p-2 bg-[#388697] rounded-lg text-white w-[100px] flex items-center text-xl justify-center my-3'><BsArrowLeft className='mx-3' /> Back</button>
          <div className={styles.petDetails}>
            <img src={selectedPet.image} className='w-1/2 rounded-xl' alt={selectedPet.name} />
            <div className="w-1/2 p-3">
              <h2>{selectedPet.name}</h2>
              <p className='text-lg'><strong>Breed:</strong> {selectedPet.breed}</p>
              <p className='text-lg'><strong>Age:</strong> {selectedPet.age}</p>
              <p className='text-lg'><strong>Size:</strong> {selectedPet.size}</p>
              <p className='text-lg'><strong>Location:</strong> {selectedPet.location}</p>
              <p className='text-lg'><strong>Description:</strong> {selectedPet.description}</p>
              <p className='text-lg'><strong>Adoption Fee:</strong> {selectedPet.adoptionFee}</p>
              <p className='text-lg'><strong>Contact:</strong> {selectedPet.contact}</p>
              <p className='text-lg'><strong>Availability:</strong> {selectedPet.availability}</p>
              <div className={styles.actions}>
                <Link href="/bookuspage" className='bg-[#388697] text-white rounded-lg text-lg p-3 m-2 cursor-custom' >Book Me</Link>
                {/* <button className='text-lg p-2 m-2' onClick={() => handleInquire(selectedPet)}>Inquire</button>
              <button className='text-lg p-2 m-2' onClick={() => setSelectedPet(null)}>Back to Gallery</button> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {!selectedPet && (
        <div className={styles.petGallery}>
          {filteredPets.map(pet => (
            <div key={pet.id} className={`flex ${styles.petCard} flex-col relative font-normal w-[300px] h-[450px] hover:scale-[1.01] cursor-custom m-5 rounded-2xl border-[#388697] border-2 bg-[#388697] overflow-hidden`} onClick={() => setSelectedPet(pet)}>
              <img src={pet.image} className='w-full h-full object-cover bg-center' alt={pet.name} />
              <div className={`${styles.favoriteButton}  flex justify-center items-center`}>
                <FontAwesomeIcon color={pet.isFavorite ? 'red' : 'grey'} onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(pet.id);
                }} icon={solidHeart} />
              </div>
              <div className={`${styles.petCardChild} absolute bg-[#388697] text-white flex flex-col items-center justify-center w-full bottom-0 p-2 opacity-90 transition-all duration-300  cursor-custom`}>
                <h2 className='text-3xl'>{pet.name}</h2>
                <p className='text-xl'>{pet.breed}</p>
                <p className='text-xl'>{pet.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* {!selectedPet &&
        <div className={styles.testimonials}>
          <h2>What Our Adopters Say</h2>
          <div className={styles.testimonial}>
            <p>"We adopted Malla and she has brought so much joy to our home. The adoption process was seamless, and the staff at the adoption center were incredibly helpful and supportive. They provided us with all the necessary information and were always available to answer our questions. We couldn't have asked for a better experience. Malla is now a beloved member of our family, and we are grateful to the adoption center for bringing her into our lives."</p>
            <p>- John Doe</p>
          </div>
          <div className={styles.testimonial}>
            <p>"Our experience adopting Max from the adoption center was amazing. The staff genuinely cared about finding the right home for each dog. They took the time to understand our lifestyle and needs, ensuring that Max would be a perfect fit. Since bringing Max home, he has been the light of our lives. We highly recommend this adoption center to anyone looking to add a furry friend to their family."</p>
            <p>- Jane Smith</p>
          </div>
        </div>} */}

      {!selectedPet && <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              {/* <p className="text-lg font-medium text-gray-600 font-pj">2,157 people have said how good Rareblocks</p> */}
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">What Our Adopters Say</h2>
            </div>

            {/* <div className="mt-8 text-center md:mt-16 md:order-3">
              <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all 2,157 reviews </a>
            </div> */}

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“We adopted Malla and she has brought so much joy to our home. The adoption process was seamless, and the staff at the adoption center were incredibly helpful and supportive. They provided us with all the necessary information and were always available to answer our questions. ”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Leslie Alexander</p>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“Our experience adopting Max from the adoption center was amazing. The staff genuinely cared about finding the right home for each dog. They took the time to understand our lifestyle and needs, ensuring that Max would be a perfect fit. Since bringing Max home, he has been the light of our lives. ”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Jacob Jones</p>
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“About three years ago we needed someone caring and professional to give our golden retriever midday walks. We found both qualities when we discovered Angela Pope. She has provided an exceptional experience for our golden retriever with robust walks, and friendly companionship.”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Jenny Wilson</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}

    </section>
  );
};

export default AdoptionServices;