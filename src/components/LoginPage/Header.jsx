import React from 'react'
import { NETFLIX_LOGO } from '../../constants'

const Header = () => {
  return (
    <div className='bg-linear-to-b from black absolute z-30'>
        <img src={NETFLIX_LOGO} alt="" srcset="" className='w-64' />
    </div>
  )
}

export default Header