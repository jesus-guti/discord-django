import React from 'react'

const Navbar = () => {
  return (
    <header className='h-20 bg-color-dark flex justify-center'>
      <div className='mx-4 h-20 w-[1200px] flex items-center justify-center'>
        <h1 className="mr-20 text-2xl text-white"><img src="/src/assets/logo.png" className='w-8 h-8 inline-block mr-3' alt="" /> StudyBud</h1>
        <div className='px-6 py-3 rounded bg-color-dark-medium ml-0 mr-auto'>
          <img src="/src/assets/search.png" className='inline-block mr-3' alt="" />
          <input type="search" name="search" className='bg-transparent' placeholder='Search for rooms'/>
        </div>
        <div className="flex items-center">
          <img src="/src/assets/user.png" alt="user icon" className='w-min h-min rounded-full border-[#71c6dd] border-2 ' />
          <div className='ml-3'>
            <p className='text-[#8b8b8b]'>jesusgtrz</p>
            <p className='text-[#71c6dd]'>@jesusgtrz</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar