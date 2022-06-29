import React from 'react'
import Logo from '../logo.jpg';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <div className='px-8 flex space-x-8 items-center py-4 bg-black'>
        <img src={Logo} className="w-[100px] md:w-[150px]"></img>
        <div className='flex justify-center items-center space-x-8'>
          <Link to="/" className='text-white text-sm md:text-3xl font-bold '>Movies</Link>
          <Link to="/favourites" className='text-white text-sm md:text-3xl font-bold '>Favourites</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar