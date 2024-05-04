import React from 'react'
import headerTabs from '../utils/headerTabs'
import DesktopHeaderTab from './DesktopHeaderTab'
import { Close } from '@mui/icons-material'

function SideNavBar({setSideNav}) {
  return (
    <div  className="absolute z-20 w-full h-screen bg-orange-500 bg-opacity-50 backdrop-blur-md">
        <div className='absolute w-2/3 h-full bg-orange-500 right-0 slide-in-right flex flex-col items-end p-5 '>
            <div onClick={() => setSideNav("close")} className='size-10 rounded-md text-white bg-black flex items-center justify-center'>
                <Close />
            </div>
            <div className='flex flex-col'>
                        {headerTabs.map((tabs, index) => <DesktopHeaderTab key={tabs.keyword} idx={index} keyword={tabs.keyword} options={tabs.options} />)}
                    </div>
        </div>
    </div>
  )
}

export default SideNavBar