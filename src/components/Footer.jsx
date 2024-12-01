
import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-5 w-full h-screen bg-white p-20 font-["Founders_Grotesk_X_Condensed"]'>
        <div className="w-1/2 flex flex-col justify-between h-full  ">
            <div className="heading">
            <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Eye-</h1>
            <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Opening</h1>
            </div>
            <img className='w-40' src="/src/assets/logo.png" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Team members</h1>
          <div className="dets font-['Neue_Montreal'] mt-10"></div>
          {["Piyush Prasad", "Ranjan Thakur", "Nishant Kumar", "Khushi singh", "Rimjhim Kumari", "Priya yadav", "Rahul Yadav"].map((item, index)=>(
            <a key={index} className='block text-[1.5vw] font-light' href="#">{item}</a>
          ))}
          <div className="detc mt-20">
                {["2024-2027 Batch BCA", "Srrinath Unversity"].map((item, index)=>(
            <a key={index} className='block text-[1.5vw] font-light' href="#">{item}</a>
          ))}
          <a  className='block text-[1.5vw] font-light mt-20' href="#">Thank You</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
