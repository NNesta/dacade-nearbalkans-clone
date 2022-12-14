import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import Modal from './Modal';

function Navbar() {
    const [openModel, setOpenModel] = useState(false)
  return (
    <div className='container w-full mx-auto'>
    <div className='fixed top-0  z-50 py-8 px-2 sm:px-8 md:px-12 lg:px-16 mx-auto container bg-white '>
        {openModel && <Modal setOpenModel={setOpenModel}/>}
   <div onClick={()=>setOpenModel(false)}  className='flex justify-between '>
    <div className='flex items-center'>
        <Link href='/' className='flex gap-2 border-r-2 border-gray-300 items-center  pr-2'>
      <Image src='/assets/decade.svg' height={40} width={40} alt='balkans' />
      <h2 className='text-lg font-bold hidden md:block'>Decade</h2>
        </Link>
        <Link href='/about' className='pl-2'>
  
      <Image className='block lg:hidden' src='/assets/balkans-2.svg' height={10} width={30} alt='balkans' />
      <Image className='hidden lg:block' src='/assets/balkans.svg' height={10} width={100} alt='balkans' />
        </Link>
    </div>
    <div className='flex items-center gap-8'>
        <Button clickHandler={()=>{setTimeout(()=>{setOpenModel(true);},100);}} className='hidden lg:block border-none' identifier='Start The Course' outline />
        <Link href='/create'><Button identifier="Create wallet" /></Link>
    </div>

   </div>
    </div></div>
  )
}

export default Navbar