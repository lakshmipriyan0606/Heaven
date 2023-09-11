import React from 'react'
import icon1 from './assest/img/steps/selection.svg'
import icon2 from './assest/img/steps/water-sport.svg'
import icon3 from './assest/img/steps/taxi.svg'
import img from './assest/img/steps/booking-img.jpg'
import leaficon from'./assest/img/steps/leaf.svg'
import sendicon from'./assest/img/steps/send.svg'
import mapicon from'./assest/img/steps/map.svg'
import buildicon from'./assest/img/steps/building.svg'
import hearticon from'./assest/img/steps/heart.svg'




function Booking() {
  return (
    <div >
        <h1  className='text-[#626685] text-left pl-5 text-xl mt-10' >Easy and Fast</h1>
        <h2 className='font-bold text-2xl pl-5 text-[#14183e] mt-5' >Book Your Next Trip In 3 Easy Steps</h2>
     <div>
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
        <div  className='border border-white shadow-xl hover:shadow-black cursor-pointer rounded-3xl hover:shadow-xl mt-5 w-9/12 mx-auto'>
            <img src={img} alt='favouriteimg' className='w-8/12 mx-auto mt-5 rounded-3xl'/>
            <h1 className='px-8 pt-6 text-[#5E6282] text-2xl font-semibold '>Trip to  Greece </h1>
            <p className='px-8 pt-2  text-[#5E6282] text-base font-medium'>14-29 June / by Robbin joseph </p>
            <div className='flex gap-10 m-5 my-4 '>
             <img src={leaficon} className='bg-[#eee] p-5 rounded-full ' alt='icon'/>
             <img src={sendicon} className='bg-[#eee] p-5 rounded-full' alt='icon'/>
             <img src={mapicon} className='bg-[#eee] p-5 rounded-full' alt='icon'/>
            </div>
            <p className='flex  ml-9 mb-5'><img src={buildicon } alt="icon"/> <span className='ml-4'>24 people going </span> <img src={hearticon} alt='icon' className='ml-12'/> </p>
        </div>
     </div>
    </div>
  )
}

export default Booking