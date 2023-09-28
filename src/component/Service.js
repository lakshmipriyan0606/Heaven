import React from 'react'
import servicedata from './servicedata'
import ServiceList from './ServiceList'

function Service() {
  return (
    <div id='service'>
      <h1 className='text-[#626685] text-center text-lg mt-10'>CATEGORY </h1>
      <p className='text-center font-bold text-3xl text-[#14183e] mt-5'>We Offer Best Services</p>
      <div className='grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-4  gap-y-9  my-9 ' >
    {
      servicedata.map((item)=>{
        return <ServiceList key={item.id}   img={item.img} title = {item.title} desc = {item.desc}  />
      })
    }
      </div>
    </div>
  )
}

export default Service