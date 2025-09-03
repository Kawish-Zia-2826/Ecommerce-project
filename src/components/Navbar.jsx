import React from 'react'
import logo from '../assets/logo.png'
import searchIcon from '../assets/search_icon.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={logo} alt="logo" className='w-36' />
      <ul className='hidden text-sm sm:flex font-gray-700 gap-5'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr  className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr  className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden gap-1'/>
        </NavLink>
          <NavLink to='/product' className='flex flex-col items-center gap-1'>
          <p>Product</p>
          <hr  className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden gap-1'/>
        </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr  className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden'/>
        </NavLink>
        <div className='flex items-center gap-6'>
        <img src={searchIcon} alt="search_icon" className='w-5 cursor-pointer' />
        <div>
          
        </div>
        </div>

      </ul>
    </div>
  )
}

export default Navbar