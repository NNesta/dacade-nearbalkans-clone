import React, {useState} from 'react';
import Image from 'next/image';
import Button from './Button';
import Modal from './Modal';

function Navbar() {
    const [openModel, setOpenModel] = useState(false)
  return (
    <div className='fixed top-0  z-50 py-8 px-2 sm:px-8 md:px-12 lg:px-16 mx-auto container bg-white '>
        {openModel && <Modal setOpenModel={setOpenModel}/>}
   <div onClick={()=>setOpenModel(false)}  className='flex justify-between '>
    <div className='flex items-center'>
        <div className='flex gap-2 border-r-2 border-gray-300 items-center  pr-2'>
      <Image src='/assets/decade.svg' height={40} width={40} />
      <h2 className='text-lg font-bold hidden md:block'>Decade</h2>
        </div>
        <div className='pl-2'>
  
      <Image className='block lg:hidden' src='/assets/balkans-2.svg' height={10} width={30} />
      <Image className='hidden lg:block' src='/assets/balkans.svg' height={10} width={100} />
        </div>
    </div>
    <div className='flex items-center gap-8'>
        <Button clickHandler={()=>{setTimeout(()=>{setOpenModel(true);},100);}} className='hidden lg:block border-none' identifier='Start The Course' outline />
        <Button identifier="Create wallet" />
    </div>

   </div>
    </div>
  )
}

export default Navbar