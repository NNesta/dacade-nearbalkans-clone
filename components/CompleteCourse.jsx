import React from 'react';
import Image from 'next/image';
import Header from './Header';

function CompleteCourse() {
  return (
    <div className='flex flex-col  my-16 items-center px-4 lg:px-24 w-full'>
   <div className='flex flex-col gap-4 lg:flex-row w-full justify-between'>
     <div className='mx-auto relative'>
     <div class="target-logo top-[38%] right-[70%] absolute h-[480px] w-[480px] z-0 hidden lg:block"></div>
     <div className=' z-10 relative lg:w-[296px] lg:h-[296px] w-[180px] h-[180px]'>

       <Image src='/assets/complete.svg' height={380} width={380} layout='responsive' alt='complete'/>
     </div>
     </div>
     <div className='flex flex-col gap-4 mx-auto items-center lg:items-start'>
       <Header text="Complete the course" />
       <p className='text-center'>In three simple modules, learn:</p>
       <div className='flex flex-col lg:flex-row items-center gap-4'>
        
        <Image src='/assets/concept.png' width={25} height={25} alt='concept' />
        <p className='text-center'>Essential NEAR concepts</p>
       </div>
       <div className='flex flex-col lg:flex-row items-center gap-4'>
        <Image src='/assets/contract.png' width={25} height={25} alt='contract' />
        <p>How to write smart contracts on NEAR</p>
       </div>
       <div className='flex flex-col lg:flex-row items-center gap-4'>
        <Image src='/assets/image (1).png' width={25} height={25} alt='chain' />
        <p>How to build dapps on the NEAR blockchain</p>
       </div>
     </div>
     
     
   </div>
   <div className='hidden lg:block'>
     <Image src='/assets/arrow-2.svg' width={164} height={132} layout='responsive' alt='arrow'/>
   </div>
 </div>
  )
}

export default CompleteCourse