import React from 'react'
import { header_logo } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute w-full px-10 py-5 bg-linear-to-b from-black z-10'>
      <img className="w-40 " src={header_logo} alt="logo"/>
    </div>
  )
}

export default Header