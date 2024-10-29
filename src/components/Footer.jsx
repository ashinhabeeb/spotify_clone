import React from 'react'
import player_img_1 from '../assets/img1.jpg'
import shuffle_icon from '../assets/shuffle.png'
import prev_icon from '../assets/prev.png'
import Play from '../assets/play.png'
import Next from '../assets/next.png'
import Loop_icon from '../assets/loop.png'
import plays_icon from '../assets/plays.png'
import mic_icon from '../assets/mic.png'
import queue_icon from '../assets/queue.png'
import volume_icon from '../assets/volume.png'
import zoom_icon from '../assets/volume.png'
import mini_player_icon from '../assets/volume.png'



function Footer() {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className=' sm-hidden flex items-center gap-4'>
        <img className='w-12' src={player_img_1} alt="" />
         <div>
           <p className='text-white'>Song 1</p>
           <p className='text-white'>Kun faya Kun</p>
         </div>
      
      </div>
      
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className=' flex gap-4'>
            <img className='w-4 cursor-pointer' src={ shuffle_icon} alt="" />
            <img className='w-4 cursor-pointer' src={ prev_icon} alt="" />
            <img className='w-4 cursor-pointer' src={ Play} alt="" />
            <img className='w-4 cursor-pointer' src={ Next} alt="" />
            <img className='w-4 cursor-pointer' src={ Loop_icon} alt="" />
        </div>
        <div className='flex items-center gap-5'>
            <p>1:06</p>
            <div className='w-[50vw] max-w-[600px] bg-gray-300 rounded-full cursor-pointer'>
                <hr className='h-1 border-none w-40 bg-green-800 rounded-full'/>
            </div>
            <p>3:20</p>
        </div>
      </div>
      <div className='sm-hidden flex items-center gap-2 opacity-75 '>
        <img className='w-4' src={plays_icon} alt="" />
        <img className='w-4' src={mic_icon} alt="" />
        <img className='w-4' src={queue_icon} alt="" />
        <img className='w-4' src={volume_icon} alt="" />
       <div className='w-20 bg-slate-50 h-1 rounded '>
       </div>
       <img className='w-4' src={mini_player_icon} alt="" />
       <img className='w-4' src={zoom_icon} alt="" />

      </div>
    </div>
  )
}

export default Footer
