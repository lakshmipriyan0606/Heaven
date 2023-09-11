import React from 'react'
import bgImage from "../img/cta/shape-bg1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
function Login() {
  return (
    <div className={ ` relative w-10/12 h-auto bg-no-repeat  bg-center center mx-auto rounded-tl-[120px] border border-[#f9f6fd]  my-14 bg-[#f9f6fd] `}style={{ backgroundImage: `url(${bgImage})`}}>
       <p className='p-12 text-[20px] font-semibold text-[#5e6282] lg:text-center'>Subscribe to get information, latest news and other interesting offers about Cobham</p>
       <div className='flex flex-col'>
        <input type='email' className='mx-auto w-64 h-12  p-5  rounded-xl outline-none  text-xl ' placeholder='Enter email' />
        <button className='bg-[#ff876a] border border-[#ff876a] text-white p-3 cursor-pointer hover:bg-[#DF6951] mx-auto w-40 my-5 rounded-2xl '>Subscribe</button>
       </div>
       <FontAwesomeIcon icon={faMessage} className='text-white bg-[#6a5fe9] w-8 h-8 rounded-full p-5 absolute bottom-80 left-56 md:bottom-64 md:left-[85%]  lg:bottom-56 lg:left-[90%]' />
    </div>
  )
}

export default Login