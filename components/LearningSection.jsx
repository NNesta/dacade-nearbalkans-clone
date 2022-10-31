import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Header from './Header';

function LearningSection() {
  return (
    <div className='container mx-auto w-full'>
    <div id='learn' className='flex flex-col gap-16 my-16 items-center px-4 lg:px-40 relative'>
       <p className='max-w-lg text-[3rem] leading-[3rem] tracking-tight font-semibold text-center text-primaryTextColor2'>Making your NEAR learning easy.</p>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div className='flex flex-col items-center lg:items-start gap-2 lg:order-1 order-2 '>
          <Header text="Open NEAR wallet"/>
          <p className='text-xl text-primaryTextColor2 mb-8 max-w-[68%] text-center lg:text-left'>Opening a NEAR wallet is the first step and
essential part of joining the NEAR community
as well as starting this course.</p>
   <Button identifier="Create wallet" outline/>
        </div>
        <div className='mx-auto order-1 lg:order-2 relative'>
          <div className='absolute h-[480px] w-full max-w-[480px] -top-2/3 -z-10 left-[20%] hidden lg:block near-logo'/>
          <div className=' w-[292px] bg-white '>
          <Image src='/assets/logo-22.png' height={592} width={592} layout='responsive' alt='logo'/>
          </div>
        </div>
        
      </div>
      <div className='hidden lg:block -mt-8'>
        <Image src='/assets/arrow-1.svg' width={164} height={132} layout='responsive' alt='arrow'/>
      </div>
    </div></div>
  )
}

export default LearningSection