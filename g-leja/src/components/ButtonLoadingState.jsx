import React from 'react'

function ButtonLoadingState() {
  return (
    <div id="spinner" className='relative size-5 rounded-full'>
        <div className='absolute top-0 left-2 size-1 rounded-full bg-orange-400'></div>
        <div className='absolute top-2 left-4 size-1 rounded-full bg-green-400'></div>
        <div className='absolute top-4 left-2 size-1 rounded-full bg-blue-400'></div>
        <div className='absolute top-2 left-0 size-1 rounded-full bg-yellow-400'></div>
    </div>
  )
}

export default ButtonLoadingState