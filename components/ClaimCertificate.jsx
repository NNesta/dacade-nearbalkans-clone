import React from 'react';
import Image from 'next/image';
import Header from './Header';

function ClaimCertificate() {
  return (
    <div className='container mx-auto w-full'>
    <div className='flex flex-col  my-4 items-center px-4 lg:px-24 w-full pb-16'>
        <Header text="Claim NEAR certificate"/>
        <p className='max-w-[90%] mx-auto lg:max-w-[40%] text-center pb-16'>Upon course completion, receive the NEAR dev 101
certificate as an NFT on your NEAR wallet.</p>
<Image src='/assets/certificate.png' height={500} width={800} layout='responsive' alt='certificate' />

    </div></div>
  )
}

export default ClaimCertificate