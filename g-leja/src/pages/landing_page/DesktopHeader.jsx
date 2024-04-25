import React, { useState } from 'react'
import DesktopHeaderTab from '../../components/DesktopHeaderTab'
import headerTabs from '../../utils/headerTabs'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'

function DesktopHeader() {
    const [step, setStep] = useState("left-[4px]")
    const navigate = useNavigate()

    return (
        <div className='w-full px-16 py-5 '>
            <div className=' bg-stone-50 shadow-sm shadow-stone-300 border rounded-lg flex items-center justify-between p-3'>
                <div className='flex items-center gap-28'>
                    <div className='w-16 h-8 flex items-center justify-center'>
                        <Logo />
                    </div>
                    <div className='flex gap-2 items-center px-2'>
                        {headerTabs.map((tabs, index) => <DesktopHeaderTab key={tabs.keyword} idx={index} keyword={tabs.keyword} options={tabs.options} />)}
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div>
                        <button onClick={() => navigate("/log-in")} className='px-5 py-3 text-gleja-300 text-base font-normal font-inter border border-transparent hover:border-orange-500 rounded-md'>Log In</button>
                    </div>
                    <div>
                        <button onClick={() => navigate("/sign-up")} className='px-5 py-3 bg-gleja-300 hover:bg-orange-400 text-white text-base font-normal font-inter rounded-md'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader