import { Menu } from '@mui/icons-material'
import React from 'react'

function MobileHeader({headerColor, setSideNav}) {
  return (
    <div className='flex items-center justify-between py-5 px-0 md:hidden'>
        
        <div className='w-20 h-10 bg-red-500'></div>
        <div onClick={() => setSideNav("open")} className='size-10 flex items-center justify-center rounded-md hover:bg-orange-500 hover:text-white'>
            <Menu />
        </div>
    </div>
  )
}

export default MobileHeader