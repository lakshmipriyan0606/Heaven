import React from 'react'
import partner from "../img/partner/1.png"
import partner2 from "../img/partner/2.png"
import partner3 from "../img/partner/3.png"
import partner4 from "../img/partner/4.png"
import partner5 from "../img/partner/5.png"
import { TestimonialList } from './TestimonialList'

function Testimonial() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <div>
      <h1  className='text-[#626685] text-left pl-5 text-xl mt-10 lg:text-center' >Testimonials</h1>
        <h2 className='font-bold text-2xl pl-5 text-[#14183e] text-left lg:text-center mt-5' >What People Say About Us.</h2>
      </div>
     <TestimonialList />
         <div className='grid grid-cols-2  md:grid-cols-3  justify-center items-center gap-5 mx-auto'>
            <img src={partner} alt='partnerlogo'/>
            <img src={partner2} alt='partnerlogo'/>
            <img src={partner3} alt='partnerlogo'/>
            <img src={partner4} alt='partnerlogo'/>
            <img src={partner5} alt='partnerlogo'/>
         </div>
    </div>
  )
}

export default Testimonial