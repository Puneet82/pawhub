import React from 'react';
import Image from 'next/image';
import Owner1Img from '../public/img/team/puneet-rani.png';
import Owner2Img from '../public/img/team/pawanpreet-kaur.png';
import Owner3Img from '../public/img/team/harpreet-kaur.png';
import AboutFlip from './AboutFlip';

const AboutUs = () => {
  const owners = [
    {
      name: 'Puneet Rani',
      role: 'Co-Owner & Pet Enthusiast',
      image: Owner1Img,
      bio: 'Puneet is a dedicated pet lover who has a special connection with dogs. She believes in creating a welcoming environment for pets and their owners, ensuring that everyone feels like part of the family at Pawsitivity Hub.',
    },
    {
      name: 'Pawanpreet Kaur',
      role: 'Co-Owner & Chief Bark Officer',
      image: Owner2Img,
      bio: 'Pawanpreet is passionate about providing the best care for pets. As the Chief Bark Officer, she ensures that every pet\'s needs are met with love and attention, making Pawsitivity Hub a safe and enjoyable place for all furry friends.',
    },
    {
      name: 'Harpreet Kaur',
      role: 'Co-Owner & Head of Wagging Tails',
      image: Owner3Img,
      bio: 'Harpreet is dedicated to ensuring that every pet at Pawsitivity Hub is happy and healthy. With her expertise in pet care, she oversees the well-being of all animals, making sure they receive the love and attention they deserve.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-#F79D5C to-purple-500 p-10 text-#F79D5C">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Pawsitivity Hub</h1>
        <p className="mb-8">At Pawsitivity Hub, we believe that pets are family. Our store in the heart of Calgary, Alberta, is more than just a pet store; it's a community hub for pet lovers.</p>
          {/* {owners.map((owner, index) => (
            <div key={index} className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                <Image src={owner.image} layout="fill" alt={owner.name} />
              </div>
              <h3 className="text-xl font-bold mb-2">{owner.name}</h3>
              <p className="mb-4">{owner.role}</p>
              <p className="text-sm">{owner.bio}</p>
            </div>
          ))} */}
          <div className='flex flex-wrap justify-center items-center'>
          {owners.map((owner,index)=>{
            return <AboutFlip owner={owner}/>
          })}
          </div>
      </div>
    </section>
  );
};

export default AboutUs;
