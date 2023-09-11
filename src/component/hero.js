import React from 'react'
import heroimg from '../img/hero/hero-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'


function hero() {
  return (
      <div>
        <div>
          <img src={heroimg} alt='heroimg' className="pt-32 h-[850px] md:hidden"/>
      </div>
       <div className='flex w-full md:justify-center md:items-center md:py-8'>
       <div className='flex  flex-col w-full  md:w-[70%] mx-auto py-28  items-center justify-center '>
        <h1 className='text-[#df6951] text-xl font-bold text-center '>Best Destinations around the world</h1>
        <h2 className='text-[35px] mt-8 font-semibold text-[#181e4b] text-center'>Travel, enjoy and live</h2>
        <h2 className='text-[30px] pl-6 text-center font-semibold text-[#181e4b]'> a new and full life</h2>
        <p className='text-center text-[#626685] mt-8 leading-9 mx-10'>Built Wicket longer admire do barton vanity itself do in it.Preferred to sportsmen it engrossed listening. Park gatesell they west hard for the.</p>
        <button className='hover:bg-[#f1a501] mx-auto hover:text-white  mt-7 p-3 rounded-md cursor-pointer bg-white transition-all duration-1000 text-[#f1a501] border border-yellow-600' >Find Out More</button> <br/>
            <FontAwesomeIcon icon={faPlayCircle} className='mx-auto mt-10 text-5xl text-red-600' />  <span className='text-[#626685] mx-auto text-xl  '>Play Demo</span>
      </div>
      <div>
          <img src={heroimg} alt='heroimg' className="pt-32 md:pt-1 hidden md:block lg:block xl:block"/>
      </div>
       </div>
      </div>
  )
}

export default hero