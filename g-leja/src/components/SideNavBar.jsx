import React from "react";
import { NavLink } from "react-router-dom";
import headerTabs from "../utils/headerTabs";
import DesktopHeaderTab from "./DesktopHeaderTab";
import { Close } from "@mui/icons-material";

function SideNavBar({ setSideNav }) {
  return (
    <div className="absolute z-20 left-0 w-full h-screen bg-orange-500 bg-opacity-50 backdrop-blur-md">
      <div className="absolute w-2/3 h-full bg-orange-500 right-0 slide-in-right flex flex-col items-end py-5 pr-5 ">
        <div
          onClick={() => setSideNav("close")}
          className="size-10 rounded-md text-orange-500 bg-white flex items-center justify-center"
        >
          <Close />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          {headerTabs.map((tabs, index) => (
            <DesktopHeaderTab
              key={tabs.keyword}
              idx={index}
              keyword={tabs.keyword}
              options={tabs.options}
            />
          ))}
        </div>
        <div className="flex w-full bg-red-40 items-center justify-end gap-5 mt-5">
          <div>
            <NavLink
              to="/log-in"
              className="px-3 py-3 text-gray-950 text-base font-bold font-inter border border-transparent hover:border-black rounded-md"
            >
              Log In
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/sign-up"
              className="px-3 py-3 bg-gray-950 hover:bg-orange-600 text-white text-sm font-normal font-inter rounded-md"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
