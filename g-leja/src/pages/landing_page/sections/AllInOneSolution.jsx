import React from "react";
import { NavLink } from "react-router-dom";

import analytics from "../../../assets/images/landing_page/analytics.png";

function AllInOneSolution() {
  return (
    <div className="relative z-10 w-full h-screen xs:max-md:h-auto bg-red-40 -mt-20 xs:max-md:mt-5 flex xs:max-md:flex-col items-center justify-between px-16 xs:max-md:px-5">

      <div className="space-y-8 w-1/2 xs:max-md:w-full">
        <h1 className="font-inter font-bold text-5xl xs:max-md:text-5xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 ">
          All-In-One Solution
        </h1>
        <h2 className="font-poppins text-2xl xs:max-md:text-xl">
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
        <div className="text-md xs:max-md:text-lg font-poppins text-black">
          <p>
            Gain valuable insights into your cash flow and financial
            performance.{" "}
          </p>
          <p>Do more with G-Leja. Go Premium today</p>
        </div>
      </div>
      {/* right hand side */}
      <div className="w-1/2 xs:max-md:w-full flex items-center justify-center bg-red-40">
        <div className="size-2/3 xs:max-md:size-full">
          <img src={analytics} className="size-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default AllInOneSolution;
