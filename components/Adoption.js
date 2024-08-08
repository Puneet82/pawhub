import React from 'react';
import Image from 'next/image';

import Img1 from '../public/img/adoption/img1.png';
import Link from 'next/link';

const Adoption = () => {
  return (
    <section className='bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16'>
        {/* image */}
        <div className='flex-1 mb-6 lg:mb-0'>
          <div className='relative w-[542px] h-[560px]'>
            <Image src={Img1} layout='fill' objectFit='cover' alt='Adopted Pet' />
          </div>
        </div>
        {/* text */}
        <div className='flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none'>
          <h2 className='h2 mb-6'>Adopt a Loving Companion</h2>
          <p className='mb-6'>Welcome a new member to your family by adopting a pet from Pawsitivity Hub. Our pets are looking for a forever home where they can be loved and cared for. Our adoption process is designed to ensure a perfect match for both you and your new pet.</p>
          <ul className='mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4'>
            <li>Wide variety of pets available for adoption</li>
            <li>Comprehensive adoption support</li>
            <li>Health checks and vaccinations included</li>
          </ul>
        <Link href={'/adoption'}  className='bg-cream cursor-pointer text-[#388697] p-3 rounded-2xl'>Adopt Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Adoption;

