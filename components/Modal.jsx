import React, {useState, useEffect} from 'react';
import Image from 'next/image';


function Modal(props) {
    const {setOpenModel} = props;
    const [show,setShow] = useState(true)
    useEffect(() => {
        if (show) {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '15px';
        }
        return () => {
          document.body.style.overflow = 'unset';
          document.body.style.paddingRight = '0px';
        };
      }, [show]);
  return (
    <div className='fixed inset-0 top-24 bg-black/50 z-[1000]'>
    <div className='lg:w-[454px] bg-white rounded-3xl absolute top-1/3 left-1/3 flex flex-col'>
    <div className='flex justify-between px-4 py-4 border-b'>
     <h1 className=' font-medium text-xl tracking-tight w-[98%]'>Choose language</h1>
     <button onClick={()=>setOpenModel(false)} className=''>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>  
     </button>
     </div>
<div className='p-6 flex flex-col gap-4'>
<button className='border rounded-lg border-gray-200 flex justify-between items-center px-6 py-3'>
    <div className=' items-center flex gap-4'>
    <Image src='/assets/f-croatian.svg' width={21} height={14} />
    <p>Croatian</p>
    </div>
  <div className='bg-gray-300 rounded-full h-8 w-8 items-center inline-flex justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

  </div>
</button>
<button className='border rounded-lg border-gray-200 flex justify-between items-center px-6 py-3'>
    <div className=' items-center flex gap-4'>
    <Image src='/assets/f-bulgarian.svg' width={21} height={14} />
    <p>Bulgarian</p>
    </div>
  <div className='bg-gray-300 rounded-full h-8 w-8 items-center inline-flex justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

  </div>
</button>
<button className='border rounded-lg border-gray-200 flex justify-between items-center px-6 py-3'>
    <div className=' items-center flex gap-4 '>
    <Image src='/assets/f-english.svg' width={21} height={14} />
    <p>English</p>
    </div>
  <div className='bg-gray-300 rounded-full h-8 w-8 items-center inline-flex justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

  </div>
</button></div>

    
    </div></div>
  )
}

export default Modal