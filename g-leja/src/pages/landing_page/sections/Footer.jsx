import React from 'react';
import { NavLink } from 'react-router-dom'
import { companyLinks, helpDeskLinks, linksLinks } from '../../../utils/footerLinks'

function Footer() {
  return (
    <div className="px-16 py-10 flex justify-between">
    <div className="w-[35%] bg-red-30 space-y-10 font-poppins">
      <h2 className="text-3xl font-bold ">G-Leja</h2>
      <p className="first-letter:text-xl first-letter:text-orange-500 text-balance ">
        We understand the challenges that small and medium-sized
        enterprises (SMEs) face when it comes to managing their finances,
        that's why we are dedicated to providing simple yet powerful
        accounting solutons tailored specifically to the needs of SMEs.
      </p>
    </div>
    <div className="w-[60%] flex justify-between">
      <div className="w-[30%] space-y-5">
        <h2 className="text-lg font-semibold font-inter text-orange-500">
          COMPANY
        </h2>
        <div className="flex flex-col space-y-2">
            
          {companyLinks.map((links) => (
            <div className="relative">
              <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins footer-link-hover hover:text-orange-500">
                {links.text}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[30%] bg-red-30 space-y-5">
        <h2 className="text-lg font-semibold font-inter text-orange-500">
          LINKS
        </h2>
        <div className="flex flex-col space-y-2">
            
          {linksLinks.map((links) => (
            <div className="relative">
              <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins footer-link-hover hover:text-orange-500">
                {links.text}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[30%] bg-red-30 space-y-5">
        <h2 className="text-lg font-semibold font-inter text-orange-500">
          HELP DESK
        </h2>
        <div className="flex flex-col space-y-2">
            
          {helpDeskLinks.map((links) => (
            <div className="relative">
              <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins footer-link-hover hover:text-orange-500">
                {links.text}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="">
          <h2 className="text-lg font-semibold font-inter text-orange-500">
            UPDATES
          </h2>
          <p className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
            {" "}
            Subscribe for updates
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-orange-600 text-white placeholder:text-sm px-2 py-1 rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer