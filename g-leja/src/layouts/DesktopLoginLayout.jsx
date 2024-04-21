import React from "react";
import wavy from "../assets/images/login_page/wavy2.jpg";
import GlassTilesGroup from "../components/GlassTilesGroup";
import SignUpForm from "../components/SignUpForm";
// SignUpForm

function DesktopLoginLayout({form}) {
  return (
    <div className="h-screen w-full flex items-center justify-center p-5 ">
      <div className="h-full bg-gray-800 rounded-3xl flex gap-10 p-3">
        <div className=" h-full">
          {form}
        </div>
        <div className="relative h-full aspect-square bg-red-40 rounded-2xl flex justify-center">
          <div className="absolute w-full h-full ">
            <img src={wavy} className="size-full object-cover rounded-2xl" />
          </div>
          <div className="relative size-full text-white z-10">
            <div className="relative w-1/2 aspect-square mx-auto bg-white rounded-xl mt-20">
              <GlassTilesGroup />
            </div>
            <div className="">
              <div className="relative w-24 h-10 mx-auto bg-transparent bg-opacity-1">
                <div className="absolute z-10 backdrop-blur-sm w-full h-full bg-orange-400 bg-opacity-10"></div>
                <p className="relative z-10 text-xs text-center p-1 rounded-full bg-opacity-10 font-inter">WHAT'S NEW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopLoginLayout;
