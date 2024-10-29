import React from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'



function App() {
  return (
   
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex '>
        <Sidebar/>
        <Dashboard/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
