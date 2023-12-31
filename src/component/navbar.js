import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import bgImage from '../img/hero/hero-bg.svg'
import HeroSection from './hero'
import Service from "./Service"
import Destination from './Destination'
import Booking from './Booking'
import Testimonial from './testimonial'
import Login from './login' 
import Footer from './footer'

const Header = () => {
    let Links =[
        {name:"Service",link:"#service"},
        {name:"Destination",link:"#destination"},
        {name:"Booking",link:"#booking"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className={ ` w-screen h-[600px] bg-cover bg-center `} 
           style={{ backgroundImage: `url(${bgImage})`}} >
           
        <div className=' w-full fixed top-0 left-0 z-50 bg-white'>
           <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>

            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <h1 className='text-black  text-4xl'>HEA<span className='text-[#f4b734]'>VEN</span></h1>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <FontAwesomeIcon className='text-3xl' icon={faXmark} /> : <FontAwesomeIcon className='text-3xl' icon={faBars}/>
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-white' : 'top-[-490px] '}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-16 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-[#f4b734] duration-500 text-xl'>{link.name}</a>
                    </li>))
                }
            </ul>
           </div>
         
        </div>
        <HeroSection />
         <div>
         <Service/>
      <Destination />
      <Booking/>
       < Testimonial/>
        <Login/> 
        <Footer/>
         </div>
        </div>
    );
};

export default Header;