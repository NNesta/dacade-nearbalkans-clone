import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className='flex flex-col gap-8 px-4 lg:px-32 py-8 my-16 w-full bg-white'>
    <h1 className='text-center text-xl'>Visit nearbalkans.org and make sure to follow us on our social and community channels!</h1>
    <div className='flex items-center lg:justify-between lg:max-w-[80%] mx-auto w-full'>
        <div className=' hidden lg:block pl-32 border-r-2 flex-1' >

    <Image src='/assets/balkans.svg' height={38} width={120} />
        </div>
      
    <div className='col-span-2 flex items-center gap-4 px-12 lg:px-28 '>
       <Image src='/assets/twitter.svg' width={29} height={24} layout='responsive' />
       <Image src='/assets/discord.svg' width={28} height={22} layout='responsive' />
       <Image src='/assets/telegram.svg' width={27} height={20} layout='responsive' />
       <Image src='/assets/facebook.svg' width={15} height={28} layout='responsive' />
       <Image src='/assets/linkedin.svg' width={25} height={24} layout='responsive' />
       <Image src='/assets/instagram.svg' width={28} height={28} layout='responsive' />
       <Image src='/assets/medium.svg' width={32} height={18} layout='responsive' />
    </div>
    </div>
    <ul className='flex flex-col lg:flex-row items-center justify-between gap-8 text-lg lg:max-w-[80%] mx-auto'>

   <li className='lg:max-w-[20%] text-center'>
  <Link href='/'>NEAR Balkans 2022</Link>
   </li>
   <li className='lg:max-w-[20%] text-center'>
  <Link href='/'>info@nearbalkans.org

</Link>
   </li>
   <li className='lg:max-w-[10%] text-center'>
  <Link href='/'>Privacy Policy</Link>
   </li>
   <li className='lg:max-w-[10%] text-center'>
  <Link href='/'>Cookie Policy</Link>
   </li>
   <li className='lg:max-w-[20%] text-center'>
  <Link href='/'>Terms & Conditions</Link>
   </li>
    </ul>
    <p className='lg:max-w-[75%] mx-auto text-center'>NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, and Slovenia</p>
    </div>
  )
}

export default Footer