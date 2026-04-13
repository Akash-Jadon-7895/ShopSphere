import React from 'react'
import {assets} from '../assets/assets'

// navbar for admin panel, it will have the logo and logout button, when logout button is clicked it will set the token to empty string in the state of App.jsx

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
 <h1 class="text-3xl font-bold tracking-wide text-gray-800">
  ShopSphere<span class="text-pink-500">.</span>
</h1>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar