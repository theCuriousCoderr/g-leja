import React from "react";
import wavy from "../assets/images/login_page/wavy2.jpg";
import GlassTilesGroup from "../components/GlassTilesGroup";
import Logo from "../components/Logo";
import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function DesktopLoginLayout({ formType }) {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex items-center justify-center p-5 bg-orange-500 ">
      <div className="h-full bg-gray-800 rounded-3xl flex gap-10 p-3">
        <div className="relative h-full p-5">
          <div>
            <Logo />
          </div>
          {formType}
          <div className="absolute w-full bottom-5 ">
            <div className="flex gap-5 items-center justify-center">
              <div className="text-orange-500">
                <X sx={{ fontSize: 20 }} />
              </div>
              <div className="text-orange-500">
                <LinkedIn />
              </div>
              <div className="text-orange-500">
                <Email />
              </div>
            </div>
            <div className="flex gap-10 justify-center text-xs mt-3 ">
              <div className="text-orange-500">
                <button>Terms & Conditions</button>
              </div>
              <div className="text-orange-500">
                <button>Privacy Policy</button>
              </div>
            </div>
          </div>
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
                <p className="relative z-10 text-xs text-center p-1 rounded-full font-inter">
                  WHAT'S NEW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopLoginLayout;
