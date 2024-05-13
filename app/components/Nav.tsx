'use client'
import React, { useState } from 'react'
import Link from 'next/link';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl  font-bold">Layout TEST</div>

        <div className='md:hidden'>
          <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/menu" className="text-white">Menu</Link></li>
          <li><Link href="/contact" className="text-white">Contact Us</Link></li>
        </ul>
      </div>
      
      {isMenuOpen ? (
        <ul className="flex-col md:hidden">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/menu" className="text-white">Menu</Link></li>
          <li><Link href="/contact" className="text-white">Contact Us</Link></li>
        </ul>
      ) : null}
    </nav>
  )
}

export default Nav
