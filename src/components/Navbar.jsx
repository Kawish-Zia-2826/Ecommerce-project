import React,{useState} from 'react'
import { assets } from '../assets/assets'

import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [visible, setVisible] = useState(false)
  

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="logo" className='w-36' />
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
        

      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="search_icon" className='w-5 cursor-pointer' />
        <div className="group relative ">
          <img src={assets.profile_icon} alt="profile_icon" className='w-5 cursor-pointer' />
         <div className="absolute group-hover:block hidden dropdown-menu right-0 pt-4">
      <div className='flex flex-col gap-2 w-36 py-3 px-5 rounded bg-slate-100 text-gray-500 '>
        <p className='hover:text-black cursor-pointer'>My Profile</p>  
        <p className='hover:text-black cursor-pointer'>Orders</p>  
        <p className='hover:text-black cursor-pointer'>Logout</p>  

      </div>
         </div>
        </div>
         <Link to="/cart" className='relative'>
         <img src={assets.cart_icon} alt="cart_icon" className='w-5 min-w-5' />
          <p className='absolute w-4 text-center bottom-[-5px] right-[-5px] leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>50</p>

         </Link>
         <img onClick={()=> setVisible(true)} src={assets.menu_icon} alt="menu_icon" className='cursot-pointer w-5 sm:hidden'/>
        </div>
        {/* for small Screen  */}
        <div className={`absolute top-0 bottom-0 right-0 bg-white overflow-hidden transition-all ${visible?'w-full':'w-0'} `}>
          <div  className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer'>
              <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="drop_down_icon" />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/">Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/collection">Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/about">About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/contact">Contact</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar