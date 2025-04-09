import React from 'react';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Feed from './components/Mainfeed';
import Artist from './components/Artist';

function App() {

  return (
    <div className='absolute top-0 left-0 w-full h-[1800px] bg-[#F5F5F5] opacity-100'>
      <Navbar/>
      <Sidebar/>
      <Feed/>
      <Artist/>
    </div>
  )
}

export default App
