import React, { useState } from "react";
import balls from "../assets/images/login_page/balls.jpg";
import sand from "../assets/images/login_page/sand.jpg";
import slide1 from "../assets/images/login_page/slide1.png";
import slide2 from "../assets/images/login_page/slide2.png";
import slide3 from "../assets/images/login_page/slide3.png";
import GlassTilesGroup from "../components/GlassTilesGroup";
import Logo from "../components/Logo";
import {
  ArrowBack,
  ArrowBackIos,
  ArrowForward,
  Email,
  GitHub,
  LinkedIn,
  X,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";

function DesktopLoginLayout({ formType }) {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(1)

  function slideEl(nav) {
    if (nav === "next") {
      setSlide(slide + 1)
    } else {
      setSlide(slide - 1)
    }
   
  }
  return (
    <div className="h-screen w-full flex items-center justify-center p-5 xs:max-md:p-0 xs:max-md:pr-2 xs:max-md:py-2 bg-orange-500 ">
      <div className="h-full xs:max-md:w-full bg-gray-800 rounded-3xl xs:max-md:rounded-r-xl xs:max-md:rounded-l-none flex gap-10 p-3">
        <div className="relative xs:max-md:w-full h-full p-5 xs:max-md:p-2">
          <div>
            <Logo />
          </div>
          {formType}
          <div className="absolute w-full xs:max-md:left-0 bottom-5 ">
            <div className="flex gap-5 items-center justify-center">
              <NavLink className="text-orange-500">
                <X sx={{ fontSize: 20 }} />
              </NavLink>
              <NavLink className="text-orange-500">
                <LinkedIn />
              </NavLink>
              <NavLink className="text-orange-500">
                <Email />
              </NavLink>
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
        <div className="xs:max-md:hidden relative h-full aspect-square rounded-2xl flex justify-center">
          {/*black image cover */}
          <div className="absolute z-10 w-full h-full ">
            <div id="skeleton" className="absolute -z-10 h-full w-[2%] opacity-30 bg-gradient-to-r from-gray-600 to-gray-800 shadow-xl shadow-gray-800 load"></div>
            <img
              src={window.location.pathname === "/log-in" ? balls : sand}
              className="size-full object-cover rounded-2xl"
            />
          </div>
          {/* white center div with images */}
          <div className="relative size-full text-white z-10">
            <div className="relative w-1/2 aspect-square mx-auto bg-white rounded-xl mt-20">
              <GlassTilesGroup />
              {/* <div id="skeleton" className="absolute z-10 h-full w-[2%] opacity-30 bg-gradient-to-r from-gray-600 to-gray-800 shadow-xl shadow-gray-800 load"></div> */}
              <div className="size-full flex items-center justify-center">
               {slide === 1 && <img
                  src={slide1}
                  className="w-2/3 aspect-square object-cover"
                /> }
                 {slide === 2 && <img
                  src={slide2}
                  className="w-2/3 aspect-square object-cover"
                /> }
                 {slide === 3 && <img
                  src={slide3}
                  className="w-2/3 aspect-square object-cover"
                /> }
                
              </div>
            </div>
          </div>
          <div className="absolute z-10 bottom-10 w-full flex items-center justify-center gap-5">
            <button disabled={slide === 1} onClick={() => slideEl("prev")} className="text-white disabled:text-slate-950">
              <ArrowBack sx={{ fontSize: 20 }} />
            </button>
            {[1,2,3].map(id => <div key={id} className={`w-8 h-1 ${slide === id ? "bg-white" : "bg-opacity-20 backdrop-blur-md bg-white" }  rounded-full`}></div> ) }
            <button disabled={slide === 3} onClick={() => slideEl("next")} className="text-white disabled:text-slate-950">
              <ArrowForward sx={{ fontSize: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopLoginLayout;
