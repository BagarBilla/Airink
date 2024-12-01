import React from 'react'
import logo from '../assets/logo.png'
const Nav = () => {
  return (
    <div className='sticky top-0 h-[16vh] z-50 bg-white w-[99vw] bg-transparent flex gap-[22vw] align-middle '>
        <div className='ml-[12vw] mt-4'>
        <img src={logo}  />
        </div>
      
      <div className="content flex h-full w-[40vw] gap-6 ">
        <h5 className='w-fit font-bold h-fit mt-[10vh] '>Team Name</h5>
        <h5 className='w-fit font-bold  h-fit mt-[10vh]'>Our fight against polution</h5>
        <h4 className='w-fit font-bold  h-fit ml-20 mt-[10vh]'>Contact Us</h4>
      </div>
    </div>
  )
}

export default Nav
