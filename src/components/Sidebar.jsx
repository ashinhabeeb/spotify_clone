import React from 'react'
import homeIcon from '../assets/home.png';
import searchicon from '../assets/search.png';
import stack_icon from '../assets/stack.png'
import arrow_icon from '../assets/arrow.png'
import plus_icon from '../assets/plus.png'





function Sidebar() {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around' >
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={homeIcon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={searchicon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>  
        <div className='bg-[#121212] h-[85%] rounded ' >
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={stack_icon} alt="" />
              <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
              <img className='w-5' src={arrow_icon} alt="" />
              <img className='w-5' src={plus_icon} alt="" />

            </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold ' >
            <p>Create your first playlist</p>
            <p>it's easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text[-15px rounded-full mt-4 text-black'>Create Playlist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold ' >
            <p>Lets find some podcast to follow</p>
            <p>we'll keep you upload on the new episode</p>
            <button className='px-4 py-1.5 bg-white text[-15px rounded-full mt-4 text-black'>Browse podcasts</button>
          </div>
        </div>    
    </div>
  )
}

export default Sidebar
