'use client' // we made this a client component since we have to make use of useState
import React, { useState } from 'react'
import Dropdown from './Dropdown'

const Navbar = () => {

  const [show, setShow] = useState<boolean>(false); // this will manage th state of the show variable
  return (
    <nav className='bg-white border flex h-[4rem]'>
      <div className='flex-none w-[18.75rem] border-r-2 flex items-center pl-[2.12rem]'>
        <p className='font-bold text-xl'>KanBan App</p>
      </div>

      <div className='flex justify-between w-full items-center pr-[2.12rem]'>
        <p className='text-black text-l font-bold pl-6'>Current board name</p>

        <div className='flex items-center space-x-3'>
          <button className='bg-blue-500 text-black px-2 py-1 flex rounded-3xl items-center space-x-2'>
            <p>+ Add New Task</p>
          </button>
          <div className='relative flex items-center'>
            <button 
              onClick={() => setShow(!show)} //triggers function that shows dropdown here
              className='text-xl mb-4'>...</button>
            <Dropdown show={show} /> {/* render dropdown here and pass show as prop */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar