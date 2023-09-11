import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import testimonialdata from './data';

export const TestimonialList = () => {

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const prevTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? testimonialdata.length - 1 : prevIndex - 1
      );
    };
  
    const nextTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonialdata.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const currentTestimonial = testimonialdata[currentTestimonialIndex];

  return (
    <div className='mx-auto transition-all duration-700'>
    <div className='border border-white rounded-lg shadow-2xl w-[250px] ml-[60px] md:w-[300px] h-[350px] md:h-[350px]  my-20 '>
      <div className='w-[250px] flex flex-col justify-center items-center h-[350px] md:w-[300px] md:h-[350px] relative bottom-6 right-12 border bg-white  border-white shadow-2xl rounded-lg  pt-14 pl-6  text-base  text-[#626685] '>
        <img src={currentTestimonial.image} alt='img' className='absolute shadow-2xl rounded-full bottom-[90%] md:bottom-[90%] md:right-[70%] right-[70%] w-[80px] object-cover h-[80px]' />
        <p className='font-medium p-2'>{currentTestimonial.description}</p>
        <h1 className='font-semibold text-xl mt-2 '>{currentTestimonial.name}</h1>
        <h2>{currentTestimonial.place}</h2>
        <div className='flex justify-between w-full p-5 text-2xl cursor-pointer '>
          <FaArrowAltCircleLeft onClick={prevTestimonial} /> <FaArrowAltCircleRight onClick={nextTestimonial} />
        </div>
      </div>
    </div>
  </div>
  )
}
