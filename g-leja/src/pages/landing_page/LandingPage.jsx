import React from "react";
import DesktopHeader from "./DesktopHeader";
import atm_card from "../../assets/images/landing_page/atm_card.png";
import accounts from "../../assets/images/landing_page/accounts.png";
import ButtonLoadingState from "../../components/ButtonLoadingState";
import PageLoadingState from "../../components/PageLoadingState";
import { NavLink, useNavigate } from "react-router-dom";
import basicFeatures from "../../utils/basicFeatures";
import premiumFeatures from "../../utils/premiumFeatures";
import { CheckCircle, CheckCircleOutline } from "@mui/icons-material";

function LandingPage() {
  const navigate = useNavigate();
  return (
    // designing desktop view first
    <div className="relative h-screen w-full overflow-scroll bg-grainy bg-fixed">
      <div className="sticky z-20 top-0 bg-transparent bg-opacity-50 backdrop-blur-md">
        <DesktopHeader />
      </div>

      {/* first full screen */}
      <div>
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
          <img src={accounts} className="size-full object-cover" />
        </div>
      </div>

      <div className="space-y-10 mt-20">
        <h2 className="text-4xl font-bold font-poppins text-center text-orange-500 ">Pick Your Preferred Plan</h2>
        <div className="flex gap-10 justify-center items-center">
          <div className="p-1 rounded-[1.25rem] bg-black ">
          <div className="p-5 bg-teal-300 rounded-2xl space-y-5">
            <p className="text-base font-medium">Basic</p>
            <div>
              <p className="text-3xl font-black font-roboto">Free</p>
              <p className="text-xs font-roboto">Manage and track your finance movement</p>
            </div>
            <p className="text-sm font-semibold">Free plan for all users</p>
            <div className="space-y-2">
              {basicFeatures.map(features => {
                return (
                  <div key={features} className="flex items-center gap-2">
                     <div className="size-3 rounded-full flex items-center justify-center">
                      <CheckCircle sx={{fontSize:15}} />
                    </div>
                    <p className="text-xs">{features}</p>
                    </div>
                )
              })}
            </div>
            <div>
              <button className="px-3 py-2 bg-black text-white rounded-md text-xs font-light focus:outline-yellow-500">
                Sign Up for Free
              </button>
            </div>
          </div>
          </div>

          <div className="p-1 rounded-[1.25rem] bg-black ">
          <div className="p-5 bg-yellow-300 rounded-2xl space-y-5">
            <p className="text-base font-medium">Premium</p>
            <div>
              <p className="text-3xl font-black font-roboto">NGN5,000<span className="text-sm font-normal">/month</span></p>
              <p className="text-xs font-roboto">Do more with G-Leja. Go Premium</p>
            </div>
            <p className="text-sm font-semibold">All basic features plus:</p>
            <div className="space-y-2">
              {premiumFeatures.map(features => {
                return (
                  <div key={features} className="flex items-center gap-2">
                    <div className="size-3 rounded-full flex items-center justify-center">
                      <CheckCircle sx={{fontSize:15}} />
                    </div>
                    <p className="text-xs">{features}</p>
                    </div>
                )
              })}
            </div>
            <div>
              <button className="px-3 py-2 bg-black text-white rounded-md text-xs font-light focus:outline-teal-500">
                Go Premium
              </button>
            </div>
          </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;
