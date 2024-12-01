import React from 'react'
import image from '../assets/img3.jpg'
function About() {
  return (
    <div className='w-full p-20 bg-white rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw] '>AIR-INK is an innovative brand that produces inks and composites from carbon-based pollutants captured from air pollution. It is a product of Graviky Labs, a spin-off from MIT Media Lab. The ink is made using emissions collected from fossil fuel combustion and represents a step forward in utilizing waste to create sustainable materials</h1>
      <div className='w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#a1b562]'>
      <div className='w-1/2'>
      <h1 className='text-6xl'>Our Approach:</h1>
      <button className=' flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
      </button>
      <ul className='mt-10 '>
      <li className='list-disc'><h1 className='mt-3 font-["Neue_Montreal"] text-[2.5vw] leading-[3.5vw] '>AIR-INK captures carbon from vehicle emissions.</h1></li>
      <li className='list-disc'><h1 className='mt-3 font-["Neue_Montreal"] text-[2.5vw] leading-[3.5vw] '>30–50 minutes of driving = 1 pen.</h1></li>
      <li className='list-disc'><h1 className='mt-3 font-["Neue_Montreal"] text-[2.5vw] leading-[3.5vw] '>2,500 hours of driving = 150 liters of ink</h1></li>
      <li className='list-disc'><h1 className='mt-3 font-["Neue_Montreal"] text-[2.5vw] leading-[3.5vw] '>A sustainable solution to air pollution.</h1></li>
      </ul>
      </div>
      <img className='w-1/2 h-[70vh] rounded-3xl ' src={image} alt="" />
      </div>
    </div>
  )
}

export default About
