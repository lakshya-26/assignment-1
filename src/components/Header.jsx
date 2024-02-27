import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
        <img className='md:w-[30%] w-[50%]' src={Logo} alt="logo" />
        </div>
    </div>
  )
}

export default Header