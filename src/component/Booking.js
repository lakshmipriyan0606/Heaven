import React, { useState } from 'react'
import icon1 from '../img/steps/selection.svg'
import icon2 from '../img/steps/water-sport.svg'
import icon3 from '../img/steps/taxi.svg'
import img from '../img/steps/booking-img.jpg'
import leaficon from'../img/steps/leaf.svg'
import sendicon from'../img/steps/send.svg'
import mapicon from'../img/steps/map.svg'
import buildicon from'../img/steps/building.svg'
import { FaHeart } from 'react-icons/fa'




function Booking() {

  const [heart,setHeart] =useState(false)
  

  return (
    <div id='booking' >
        <h1  className='text-[#626685] text-left pl-5 text-xl mt-10 lg:text-center lg:text-2xl' >Easy and Fast</h1>
        <h2 className='font-bold text-2xl pl-5 text-[#14183e] mt-5 lg:text-center lg:text-2xl' >Book Your Next Trip In 3 Easy Steps</h2>
     <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
      <div className='grid grid-cols-1'>
        <div className='flex gap-5  m-7'>
            <img src={icon1} alt='icon' className='bg-[#f1a501] rounded-lg  ml-5 w-30 h-20 p-6 mt-4'  />
            <div className='flex flex-col justify-center '>
              <h1 className='text-[#5E6282 ] font-bold text-lg'>Choose Destination</h1>
                <p className='text-[#5E6282] font-light text-lg'>Choose your favourite place. No matter where you travel inside the World.</p>
            </div>
        </div>
        <div className='flex gap-5  m-7'>
            <img src={icon2} alt='icon' className='bg-[#df6951] rounded-lg  ml-5 w-30 h-20 p-6 mt-4'  />
            <div className='flex flex-col justify-center '>
              <h1 className='text-[#5E6282 ] font-bold text-lg'>Make Payment</h1>
                <p className='text-[#5E6282] font-light text-lg'>After find your perfect spot, make your payment and get ready to travel.</p>
            </div>
        </div>
        <div className='flex gap-5  m-7 ' >
            <img src={icon3} alt='icon' className='bg-[#006380] rounded-lg  ml-5 w-30 h-20 p-6 mt-4'  />
            <div className='flex flex-col justify-center  ' >
              <h1 className='text-[#5E6282 ] font-bold text-lg'>Reach Airport on Selected Date</h1>
                <p className='text-[#5E6282] font-light text-lg'>Lastly, you have to arrive at the airport on time and enjoy the vacation.</p>
            </div>
        </div>
        </div>
        <div  className='border border-white shadow-xl hover:shadow-black cursor-pointer rounded-3xl hover:shadow-md mt-5 w-9/12 md:w-7/12 lg:w-5/12 mx-auto overflow-hidden flex flex-col justify-center items-center gap-4' data-aos="flip-up">
            <img src={img} alt='favouriteimg' className='w-8/12 md:w-10/12 lg:w-11/12 mx-auto mt-5 rounded-3xl'/>
            <h1 className='px-8 pt-6 text-[#5E6282] text-2xl font-semibold '>Trip to  Greece </h1>
            <p className='px-8 pt-2  text-[#5E6282] text-base font-medium'>14-29 June / by Robbin joseph </p>
            <div className='flex gap-5 justify-center items-center m-5 my-4 '>
             <img src={leaficon} className='bg-[#eee] p-4 rounded-full ' alt='icon'/>
             <img src={sendicon} className='bg-[#eee] p-4 rounded-full' alt='icon'/>
             <img src={mapicon} className='bg-[#eee] p-4 rounded-full' alt='icon'/>
            </div>
            <p className='flex  gap-6 items-center ml-5 mb-5'><img src={buildicon } alt="icon"/> <span className='ml-4'>24 people going </span> <FaHeart className={heart ? "text-red-600 cursor-pointer transition-all duration-200" : " cursor-pointer  transition-all duration-200"} onClick={()=>setHeart(!heart)} /> </p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Booking