import React from 'react'

function MobileHeader({headerColor, setSideNav}) {
  return (
    <div className='flex items-center justify-between p-5 md:hidden'>
        
        <div className='w-20 h-10 bg-red-500'></div>
        <div onClick={() => setSideNav("open")} className='size-10 bg-red-500 hover:bg-green-500'></div>
    </div>
  )
}

export default MobileHeader