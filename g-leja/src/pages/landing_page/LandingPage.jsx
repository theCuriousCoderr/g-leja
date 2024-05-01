import React from "react";
import DesktopHeader from "./DesktopHeader";
import analytics from "../../assets/images/landing_page/analytics.png";
import { NavLink, useNavigate } from "react-router-dom";
import basicFeatures from "../../utils/basicFeatures";
import premiumFeatures from "../../utils/premiumFeatures";
import { CheckCircle } from "@mui/icons-material";
import howItWorks from "../../utils/howItWorks";
import clientStories from "../../utils/clientStories";
import betty_logo from "../../assets/images/landing_page/betty_logo.png";
import dorheeys_logo from "../../assets/images/landing_page/dorheeys_logo.png";
import hj_logo from "../../assets/images/landing_page/hj_logo.png";
import wellfx_logo from "../../assets/images/landing_page/wellfx_logo.jpg";

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
        <div className="relative z-10 w-full h-screen bg-red-40 -mt-20 flex items-center justify-between px-16">
          <div className="absolute -z-10 bg-red-30 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <p className="text-[15rem] tracking-widest text-stroke animate-pulse">
              G - Leja
            </p>
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
              <p>
                Gain valuable insights into your cash flow and financial
                performance.{" "}
              </p>
              <p>Do more with G-Leja. Go Premium today</p>
            </div>
          </div>
          {/* right hand side */}
          <div className="w-1/2 flex items-center justify-center bg-red-40">
            <div className="size-2/3">
              <img src={analytics} className="size-full object-cover" />
            </div>
          </div>
        </div>

        <div className="space-y-16 mt- bg-red-30 w-full h-screen flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold font-poppins text-center text-orange-500 ">
            Pick Your Preferred Plan
          </h2>
          <div className="flex gap-10 justify-center items-center">
            <div className="p-1 rounded-[1.25rem] bg-transparent hover:scale-105 hover:shadow-md hover:shadow-orange-500 transition-all ">
              <div className="p-5 bg-transparent border-2 border-orange-300  rounded-2xl space-y-6">
                <p className="text-xl font-semibold font-inter text-orange-500">
                  Basic
                </p>
                <div>
                  <p className="text-3xl font-black font-roboto">Free</p>
                  <p className="text-xs font-roboto">
                    Manage and track your finance movement
                  </p>
                </div>
                <p className="text-base font-semibold">
                  Free plan for all users
                </p>
                <div className="space-y-2">
                  {basicFeatures.map((features) => {
                    return (
                      <div key={features} className="flex items-center gap-2">
                        <div className="size-3 text-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle sx={{ fontSize: 15 }} />
                        </div>
                        <p className="text-xs font-poppins">{features}</p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button className="px-3 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-md text-xs font-light">
                    Sign Up for Free
                  </button>
                </div>
              </div>
            </div>

            <div className="relative p-1 rounded-[1.25rem] bg-transparent hover:scale-105 hover:shadow-md hover:shadow-orange-500 transition-all ">
              <div className="absolute -top-3 z-10 w-full flex items-center justify-center">
                <span className="px-2 py-1 text-xs h-7 bg-orange-500 text-white font-semibold rounded-md ">
                  Most Preferred
                </span>
              </div>
              <div className="p-5 bg-transparent border-2 border-orange-300  rounded-2xl space-y-6">
                <p className="text-xl font-semibold font-inter text-orange-500">
                  Premium
                </p>
                <div>
                  <p className="text-3xl font-black font-roboto">
                    NGN5,000<span className="text-sm font-normal">/month</span>
                  </p>
                  <p className="text-xs font-roboto">
                    Do more with G-Leja. Go Premium
                  </p>
                </div>
                <p className="text-base font-semibold">
                  All basic features plus:
                </p>
                <div className="space-y-2">
                  {premiumFeatures.map((features) => {
                    return (
                      <div key={features} className="flex items-center gap-2">
                        <div className="size-3 text-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle sx={{ fontSize: 15 }} />
                        </div>
                        <p className="text-xs font-poppins">{features}</p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button className="px-3 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-md text-xs font-light">
                    Go Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16 mt-40 bg-red-30 w-full h-screen flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold font-poppins text-center text-orange-500 ">
            How It Works
          </h2>
          <div className="px-16 flex flex-wrap justify-between gap-5 w-full">
            {howItWorks.map((reasons) => {
              return (
                <button className="relative group w-[23%] aspect-square outline-orange-500 bg-gradient-to-r even:from-pink-500 even:to-purple-500 odd:from-blue-500 odd:to-purple-500 rounded-xl overflow-hidden">
                  <div className="absolute size-full -right-32 -top-32 animate-ping flex items-center justify-center overflow-hidden">
                    <div className="absolute size-[5rem] rounded-full border border-slate-400"></div>
                    <div className="absolute size-[10rem] rounded-full border border-slate-400"></div>
                    <div className="absolute size-[15rem] rounded-full border border-slate-400"></div>
                    <div className="absolute size-[20rem] rounded-full border border-slate-400"></div>
                  </div>
                  <div className="absolute z-10 bottom-4 left-4 group-hover:hidden group-focus-within:hidden transiton-all font-poppins text-white font-medium">
                    {reasons.keyword}
                  </div>
                  <div className="hidden size-full group-hover:flex group-focus-within:flex items-center justify-center text-sm transition-all font-inter p-3 text-white font-medium">
                    {reasons.text}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-40 bg-orange-500 w-full flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold font-poppins text-center text-white ">
            G-Leja endorsed by trusted brands
          </h2>
          <div className="flex gap-20 mt-5">
            <div className="size-20 bg-white flex items-center justify-center rounded-xl">
              <img src={betty_logo} />
            </div>
            <div className="size-20 bg-white flex items-center justify-center rounded-xl">
              <img src={dorheeys_logo} />
            </div>
            <div className="size-20 bg-white flex items-center justify-center rounded-xl">
              <img src={hj_logo} />
            </div>
            <div className="size-20 bg-white flex items-center justify-center rounded-xl">
              <img src={wellfx_logo} />
            </div>
          </div>
          <h2 className="text-3xl font-bold font-poppins text-center text-white mt-20">
            Featured client stories
          </h2>
          <div className="flex items-center gap-10 overflow-x-scroll w-[90%] mx-auto rounded-xl mt-5">
            {clientStories.map((story) => {
              return (
                <div className="relative z-10 min-w-80 h-full p-5 pb-20 rounded-xl bg-white bg-opacity-10">
                  <div className="absolute -z-10 bottom-0 rounded-b-xl left-0 w-full h-10 bg-orange-500"></div>
                  <p className="text-orange-100">
                    <p className="text-[6rem] h-10 font-black -ml-2">"</p>
                    <br />
                    {story.story}"
                  </p>
                  <div className="absolute bottom-5 flex gap-2 items-center justify-start mt-2">
                    <div className="size-10 rounded-full p-[1px] bg-orange-900">
                      <img
                        src={story.avatar}
                        className="size-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold font-poppins text-orange-900">
                        {story.name}
                      </p>
                      <p className="text-xs font-poppins text-orange-200">
                        {story.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
              <div className="flex flex-col">
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  About Us
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Contact Us
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Our Team
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Privacy Policy
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Terms of Service
                </NavLink>
              </div>
            </div>
            <div className="w-[30%] bg-red-30 space-y-5">
              <h2 className="text-lg font-semibold font-inter text-orange-500">
                LINKS
              </h2>
              <div className="flex flex-col">
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  How It Works
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Reviews
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Features
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  FAQs
                </NavLink>
              </div>
            </div>
            <div className="w-[30%] bg-red-30 space-y-5">
              <h2 className="text-lg font-semibold font-inter text-orange-500">
                HELP DESK
              </h2>
              <div className="flex flex-col">
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Tutorials
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Knowledge Base
                </NavLink>
                <NavLink className="pl-1 pr-10 py-1 outline-red-400 font-poppins">
                  Report Abuse
                </NavLink>
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
      </div>
    </div>
  );
}

export default LandingPage;
