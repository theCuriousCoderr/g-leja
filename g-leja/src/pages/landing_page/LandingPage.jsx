import React from "react";
import DesktopHeader from "./DesktopHeader";
import atm_card from "../../assets/images/landing_page/atm_card.png";
import ButtonLoadingState from "../../components/ButtonLoadingState";
import PageLoadingState from "../../components/PageLoadingState";
import { NavLink, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    // designing desktop view first
    <div className="relative h-screen w-full overflow-scroll bg-grainy bg-fixed">
      <div className="sticky top-0 bg-transparent bg-opacity-50 backdrop-blur-md">
        <DesktopHeader />
      </div>

      {/* first full screen */}
      <div className="relative z-10 w-full bg-red-40 flex items-center justify-between px-16">
        <div className="absolute -z-10 bg-red-30 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-[15rem] tracking-widest text-stroke animate-pulse">G - Leja</p>
        </div>
        {/* left hand side */}
        <div className="space-y-8 w-1/2">
          <h1 className="font-inter font-bold text-5xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 ">
            All-In-One Solution
          </h1>
          <h2 className="font-poppins text-2xl">
            Join thousands of SMEs to trust G-Leja to simplify their financial
            management.
            <br />
            Sign up today for{" "}
            <span className="italic text-orange-400 underline">FREE</span>.
          </h2>
          <div>
            <NavLink 
              to="/sign-up"
              className="px-5 py-3 text-slate-200 bg-orange-500 text-base font-normal font-inter hover:bg-orange-200 hover:text-orange-500 rounded-md"
            >
              Get Started
            </NavLink>
          </div>
          <div className="text-md font-poppins text-black">
            <p>Gain valuable insights into your cash flow and financial performance. </p>
            <p>Do more with G-Leja. Go Premium today</p>
          </div>
        </div>
        {/* right hand side */}
        <div className="w-1/3 flex items-center justify-center">
          <img src={atm_card} className="size-full object-cover" />
        </div>
      </div>
      {/* <div className='h-screen w-full bg-blue-40'>  </div>
        <div className='h-screen w-full bg-yellow-40'>  </div> */}
    </div>
  );
}

export default LandingPage;
