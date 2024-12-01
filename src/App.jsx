import { useState } from 'react'
import React from 'react'
import './App.css'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Featured from './components/Featured'
import About from './components/About'
import Eyes from './components/Eyes'
import Footer from './components/Footer'
import locomotiveScroll from 'locomotive-scroll'

function App() {
  const LocomotiveScroll = new locomotiveScroll();
  return (
    <>
     <Nav />
     <LandingPage />
     <Marquee />
     <Featured />
     <About />
     <Eyes />
     <Footer />
    </>
  )
}

export default App
