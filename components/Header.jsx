import React from 'react'

function Header(props) {
    const {text} = props
  return (
    <h1 className='text-dark-100 font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative'>
{text}
    </h1>
  )
}

export default Header