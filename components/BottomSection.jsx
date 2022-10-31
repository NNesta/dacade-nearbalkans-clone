import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Header from './Header';

function BottomSection() {
  return (
    <div className='bg-white w-full  lg:mt-0 z-50 '>
    <div className='my-16 items-center px-4 lg:px-32 w-full relative'>
        <div className='bottom-development w-[1067px] h-[240px] top-[5%] -left-[15%] absolute hidden lg:block'/>
      <div className='flex flex-col items-center lg:flex-row w-full  mx-auto gap-4 lg:justify-between'>
     <div className='col-span-2 flex flex-col justify-center items-center lg:items-start gap-8 order-2 lg:order-1'>
        <Header text="NEAR Development 101"/>
       <h1 className='text-4xl font-semibold'></h1>
       <Button identifier='Start the course' outline className="border-gray-300"/>
     </div>
     
        <div className='order-1 lg:order-2'>
   <Image src='/assets/logo-11.png' width={400} height={400} alt='logo' />
        </div>
      </div>
    </div></div>
  )
}

export default BottomSection