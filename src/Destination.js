import React from 'react'
import Romeimg from './assest/img/dest/dest1.jpg' 
import londonimg from './assest/img/dest/dest2.jpg' 
import europeimg from './assest/img/dest/dest3.jpg' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Destination() {
  return (
    <div>
        <h1 className='text-[#626685] text-center text-lg mt-10'>Top Selling</h1>
        <h1  className='text-center font-bold text-4xl text-[#14183e] mt-5'>Destination</h1>
        <div className='grid grid-cols-1'>
            <div className='flex flex-col gap-3 border border-white mx-20 mt-5 cursor-pointer shadow-black rounded-2xl  shadow-sm hover:shadow-slate-950 hover:shadow-2xl'>
            <img src={Romeimg} alt='romeimg' className=' w-10/12 rounded-3xl mx-auto mt-6'/>
            <h1 className='text-[#686b89] mx-auto mt-3 font-semibold text-2xl'>Rome,Italty</h1>
            <p className='text-[#686b89] mx-auto  font-semibold text-lg'>$5,412</p>
            <p className='text-[#686b89] mx-auto  font-semibold text-lg  mb-2'> <span className='pr-3 text-black'>  <FontAwesomeIcon icon={faPaperPlane}/></span>10 Days Trip</p>
            </div>
            <div className='flex flex-col gap-3 border border-white mx-20 mt-16 cursor-pointer shadow-black rounded-2xl  shadow-sm hover:shadow-slate-950 hover:shadow-2xl'>
            <img src={londonimg} alt='romeimg' className=' w-10/12 rounded-3xl mx-auto mt-6'/>
            <h1 className='text-[#686b89] mx-auto mt-3 font-semibold text-2xl'>London ,Uk</h1>
            <p className='text-[#686b89] mx-auto  font-semibold text-lg'>$9,999</p>
            <p className='text-[#686b89] mx-auto  font-semibold text-lg  mb-2'> <span className='pr-3 text-black'>  <FontAwesomeIcon icon={faPaperPlane}/></span>17 Days Trip</p>
            </div>
            <div className='flex flex-col gap-3 border border-white mx-20 mt-16 cursor-pointer shadow-black rounded-2xl  shadow-sm hover:shadow-slate-950 hover:shadow-2xl'>
            <img src={europeimg} alt='romeimg' className=' w-10/12 rounded-3xl mx-auto mt-6'/>
            <h1 className='text-[#686b89] mx-auto mt-3 font-semibold text-2xl'>Full Europe</h1>
            <p className='text-[#686b89] mx-auto  font-semibold text-lg'>$10,999</p>
            <p className='text-[#686b89] mx-auto  font-semibold text-lg  mb-2'> <span className='pr-3 text-black'>  <FontAwesomeIcon icon={faPaperPlane}/></span>21 Days Trip</p>
            </div>
        </div>
    </div>
  )
}

export default Destination