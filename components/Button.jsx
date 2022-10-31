import React from 'react'

function Button(props) {
    const {identifier, outline, className, clickHandler} = props;
  return (
    <div className=''>
  <button onClick={clickHandler} className={`${outline?'border-black border-[1px] text-black bg-white':'bg-black text-white'} ${className} px-4 py-2 rounded-full`}>{identifier}</button>
    </div>
  )
}

export default Button