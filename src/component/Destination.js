import React from 'react'
import destinationdata from './destinationdata'
import DestinationList from './DestinationList'

function Destination() {
  return (
    <div id='destination'>
        <h1 className='text-[#626685] text-center text-lg mt-10'>Top Selling</h1>
        <h1  className='text-center font-bold text-4xl text-[#14183e] mt-5'>Destination</h1>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 p-12 '>
          {
            destinationdata.map((item)=>{
              return <DestinationList key={item.id} img={item.img} title={item.title} price={item.price} icon={item.icon} days={item.days} />
            })
          }
        </div>
    </div>
  )
}

export default Destination