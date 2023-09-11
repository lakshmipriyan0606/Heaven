

import React from 'react'

const ServiceList = ({img,title,desc}) => {
  return (
    <div>
         <div className='flex flex-col gap-2  min-[w-300px] w-10/12 mx-auto shadow-md justify-center items-center text-center h-[100%] cursor-pointer  hover:shadow-xl p-5  rounded-2xl'>
           <img src={img} alt='icon' className=' w-24 h-26 object-fill mx-auto'/>
           <h1 className='text-[#14183e] font-bold text-lg'>{title}</h1>
           <p className='text-[#5E6282] text-center'>{desc} </p>
             </div>
    </div>
  )
}

export default ServiceList