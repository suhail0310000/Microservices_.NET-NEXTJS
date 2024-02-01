import React from 'react'
import Logo from './Logo'
import Search from './Search'
import LoginButton from './LoginButton'
export default function Navbar() {
  return (
    <header className='
      sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md bg-white p-5'>
        <Logo/>
        <Search/>
        <LoginButton/>
    </header>
  )
}
