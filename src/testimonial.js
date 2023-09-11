import React from 'react'
import img from "./assest/img/testimonial/author.png"
import partner from "./assest/img/partner/1.png"
import partner2 from "./assest/img/partner/2.png"
import partner3 from "./assest/img/partner/3.png"
import partner4 from "./assest/img/partner/4.png"
import partner5 from "./assest/img/partner/5.png"

function Testimonial() {
  return (
    <div>
        <h1  className='text-[#626685] text-left pl-5 text-xl mt-10 ' >Testimonials</h1>
        <h2 className='font-bold text-2xl pl-5 text-[#14183e] mt-5' >What People Say About Us.</h2>
        <div className='border border-white rounded-lg shadow-2xl w-[300px] ml-[60px]  h-[300px]  my-20  '>
        <div className='w-[300px] h-[300px] relative bottom-4 right-10 border bg-white  border-white shadow-2xl rounded-lg  pt-14 pl-6  text-base  text-[#626685]  '>
            <p className='font-medium p-2'>"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
            <h1 className='font-semibold text-xl mt-3'>Thomas Wagon</h1>
            <h2>CEO of Red Button</h2>
            <img src={img} alt='image' className='relative bottom-72 right-7'/>
        </div>
        </div>
         <div className='grid grid-cols-2 gap-5 ml-5'>
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