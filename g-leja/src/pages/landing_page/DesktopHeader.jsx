import React, { useState } from 'react'
import DesktopHeaderTab from '../../components/DesktopHeaderTab'
import headerTabs from '../../utils/headerTabs'

function DesktopHeader() {
    const [step, setStep] = useState("left-[4px]")

    return (
        <div className='w-full bg-red-40 px-16 py-5'>
            <div className=' bg-stone-50 shadow-sm shadow-stone-300 rounded-lg flex items-center justify-between p-3'>
                <div className='flex items-center gap-28'>
                    <div className='w-16 h-8 bg-orange-400'></div>
                    <div className='flex gap-2 items-center px-2'>
                        {headerTabs.map((tabs, index) => <DesktopHeaderTab key={tabs.keyword} idx={index} keyword={tabs.keyword} options={tabs.options} />)}
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div>
                        <button className='px-5 py-3 text-gleja-300 text-base font-normal font-inter hover:bg-orange-200 rounded-md'>Log In</button>
                    </div>
                    <div>
                        <button className='px-5 py-3 bg-gleja-300 hover:bg-orange-200 text-white hover:text-gleja-300 text-base font-normal font-inter rounded-md'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader