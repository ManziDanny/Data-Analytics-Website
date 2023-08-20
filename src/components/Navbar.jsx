import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const[nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex text-white justify-between items-center h-24 px-4 mx-auto max-w-[1240px]'>
      <h1 className='w-full font-bold text-green-600 text-3xl'>DATA</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contacts</li>
      </ul>
      {/* md break point is 768px so when we get over it our menu is hidden */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} /> }
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-800 bg-black ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
      <h1 className='w-full font-bold text-green-600 text-3xl m-4'>DATA</h1>
        <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-700'>Home</li>
            <li className='p-4 border-b border-gray-700'>Company</li>
            <li className='p-4 border-b border-gray-700'>Resources</li>
            <li className='p-4 border-b border-gray-700'>About</li>
            <li className='p-4 border-b border-gray-700'>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
