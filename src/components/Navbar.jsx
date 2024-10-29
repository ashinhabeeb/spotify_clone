import React from 'react'
import arrow_right from '../assets/right_arrow.png'
import arrow_left from '../assets/left_arrow.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()



  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={arrow_left} alt="" />
            <img onClick={()=>navigate(+1)}  className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={arrow_right} alt="" />
        </div>

        <div className='flex items-center gap-3'>
            <button className='  px-4 py-1 sm-hidden rounded-full border-none bg-slate-50 text-black cursor-pointer'>Explore Premium</button>
            <button className='  px-3 py-1 text-[15px] sm-hidden rounded-full border-none bg-gray-900 text-white cursor-pointer'> Install App</button>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center' >A</p>
        </div>

      </div>

      <div className='flex otems-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl '>All</p>

        <p className='bg-gray-950 text-white px-3  py-0 rounded-2xl text-[15px]'>Music</p>

        <p className='bg-gray-950 text-white px-4 py-0 rounded-2xl text-[15px]'>Podcast</p>

      </div>
    </>
  )
}

export default Navbar
