import React from 'react'
import Navbar from './Navbar'
import {albumsData} from '../datas/data.js'
import {songsData} from '../datas/data.js'
import Albumitem from './Albumitem'
import Songitem from './Songitem.jsx'



function DisplayDashboard() {
  return (
    <>
      <Navbar/>
      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Features Charts</h1>
        <div className=' flex overflow-auto'>

        {albumsData.map((item)=>(<Albumitem  name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        
        </div>
      </div>

      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Today's Hits</h1>
        <div className=' flex overflow-auto'>

        {songsData.map((item)=>(<Songitem name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
        
        </div>
      </div>
    </>
  )
}

export default DisplayDashboard
