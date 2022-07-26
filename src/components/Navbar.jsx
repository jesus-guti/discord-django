import React from 'react'
import logo from '../assets/images/logo.png'
import searchIcon from '../assets/images/search.png'
import userIcon from '../assets/images/user.png'

const Navbar = () => {
  return (
    <header className='h-18 bg-color-dark flex justify-center'>
      <div className='mx-4 h-20 w-[1200px] flex items-center justify-center'>
        <h1 className="mr-20 font-bold text-white"><img src={logo} className='w-6 h-6 inline-block mr-3' alt="" />StudyBud</h1>
        <div className='px-6 py-2 rounded bg-color-dark-medium ml-0 mr-auto'>
          <img src={searchIcon} className='inline-block mr-3 w-5 h-5' alt="" />
          <input type="search" name="search" className='bg-transparent focus:outline-none text-color-gray text-sm' placeholder='Search for rooms'/>
        </div>
        <div className="flex items-center">
          <img src={userIcon} alt="user icon" className='w-min h-min rounded-full border-[#71c6dd] border-2 ' />
          <div className='ml-3'>
            <p className='text-[#8b8b8b] text-xs'>jesusgtrz</p>
            <p className='text-[#71c6dd] text-xs'>@jesusgtrz</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar