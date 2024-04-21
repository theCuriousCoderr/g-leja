import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo({}) {
  return (
    <NavLink to="/" className='items-center justify-between bg-orange-500 flex w-16'>
        <div className='text-orange-800 bg-orange-500 font-medium'>G -</div> 
        <div className='font-black text-xl bg-orange-800 text-orange-500'>Leja</div>
    </NavLink>
  )
}

export default Logo