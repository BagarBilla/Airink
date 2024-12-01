import React from 'react'
import vid from '../assets/Airinkvid.mp4'
const LandingPage = () => {
  return (
    <video data-scroll data-scroll-section data-scroll-speed="-.3" className='h-screen w-screen'  
    loop // Makes the video play infinitely
    autoPlay // Starts playback automatically
    muted
      controls={false}>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  )
}

export default LandingPage
