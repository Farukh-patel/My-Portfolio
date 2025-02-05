import React from 'react'
import { Navbar } from './components/Navbar'
import { HomePage } from './components/HomePage'

function App() {
  return (
    <>
    <Navbar/>
    <div className='bg-red-600 text-white bg-slate-900'></div>
    <HomePage/>
    </>
  )
}
    

export default App