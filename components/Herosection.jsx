import React from 'react';
import Image from 'next/image';

function Herosection() {
  return (
    <div className='flex flex-col items-center pt-64 h-fit text-center px-4 lg:px-40 gap-5 relative'>
        <div className='hero-gradient lg:hidden absolute lg:-top-[550px] -top-[380px] left-0 lg:-left-48 h-[100%] w-[50%] opacity-[0.4] z-40'/>
        <div className='hero-gradient lg:hidden absolute lg:-top-[550px] -top-[380px] right-0 lg:-right-0 h-[100%] w-[40%] opacity-[0.4] z-40'/>
      <h1 className='text-[2.2rem] lg:text-[4.5rem] w-[200px] lg:w-full font-medium lg:font-bold text-primaryTextColor '>Get <span className='hero-text'>NEAR</span> Certified!</h1>
       <p className='text-[1.5rem] text-primaryTextColor2 leading-[28px] pb-24 text-lg'>We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem.</p>
       <div className='pt-4'>
        <button onClick={()=>window.location.href='#learn'}>
    <Image src='/assets/downArrow.svg' height={25} width={25} layout='responsive'/>
        </button>
       </div>
    </div>
  )
}

export default Herosection