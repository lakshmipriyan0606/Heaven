import React from 'react'
import weather from '../src/assest/img/category/icon1.png'
import flight from '../src/assest/img/category/icon2.png'
import mic from '../src/assest/img/category/icon3.png'
import custom from '../src/assest/img/category/icon4.png'

function Service() {
  return (
    <div>
      <h1 className='text-[#626685] text-center text-lg mt-10'>CATEGORY </h1>
      <p className='text-center font-bold text-3xl text-[#14183e] mt-5'>We Offer Best Services</p>
      <div className='grid grid-cols-1 justify-center gap-y-9  my-9 '>
        <div className='flex flex-col gap-2  min-[w-300px]: w-10/12 mx-auto shadow-2xl cursor-pointer hover:shadow-black hover:shadow-2xl p-5  rounded-2xl'>
           <img src={weather} alt='icon' className=' w-24 h-26 object-fill mx-auto'/>
           <h1 className='text-[#14183e] font-bold text-lg'>Calculated Weather</h1>
           <p className='text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className='flex flex-col gap-2 w-10/12 mx-auto shadow-2xl cursor-pointer hover:shadow-black hover:shadow-2xl p-5  rounded-2xl'>
           <img src={flight} alt='icon' className='w-24 h-26 object-fill mx-auto'/>
           <h1 className='text-[#14183e] font-bold text-lg'>Best Flights</h1>
           <p className='text-[#5E6282]'>Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div className='flex flex-col gap-2 w-10/12 mx-auto shadow-2xl cursor-pointer hover:shadow-black hover:shadow-2xl p-5  rounded-2xl'>
           <img src={mic} alt='icon' className='w-24 h-26 object-fill mx-auto'/>
           <h1 className='text-[#14183e] font-bold text-lg'>Local Events</h1>
           <p className='text-[#5E6282]'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
        </div>
        <div className='flex flex-col gap-2 w-10/12 mx-auto shadow-2xl cursor-pointer hover:shadow-black hover:shadow-2xl p-5  rounded-2xl'>
           <img src={custom} alt='icon' className='w-24 h-26 object-fill mx-auto'/>
           <h1 className='text-[#14183e] font-bold text-lg'>Customization</h1>
           <p className='text-[#5E6282]'>We deliver outsourced aviation services for military customers</p>
        </div>
      </div>
    </div>
  )
}

export default Service