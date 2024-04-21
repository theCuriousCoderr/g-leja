import React, { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ButtonLoadingState from "./ButtonLoadingState";
import { NavLink, useNavigate } from "react-router-dom";

function LogInForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  }
  return (
    <div className="h-ful px-5 pt-10">
      <div className="space-y-10">
        <h1 className="bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 text-transparent font-bold text-xl uppercase">
          Welcome Back !
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-5">
         
          {/* email */}
          <div className="flex items-center gap-3 p-1 hover:bg-gradient-to-r hover:from-transparent hover:to-orange-500 rounded-lg">
            <label htmlFor="email" className="text-slate-300 text-xs w-24">
              E-mail
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                spellCheck={false}
                required
                className="px-2 py-1 text-sm text-orange-500 bg-gray-900 bg-opacity-50 backdrop-blur-sm outline-none border border-transparent focus-within:border-gray-700 rounded-md"
              />
            </div>
          </div>
          {/* password */}
          <div className="flex items-center gap-3 p-1 hover:bg-gradient-to-r hover:from-transparent hover:to-orange-500 rounded-lg">
            <label htmlFor="password" className="text-slate-300 text-xs w-24">
              Password
            </label>
            <div className="relative">
              <div className="absolute z-10 bottom-full right-0">
                <button className="text-[10px] text-red-500">Forgot your password ?</button>
              </div>
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-10 right-2 h-full rounded-md flex items-center justify-center text-slate-500"
              >
                {showPassword ? (
                  <button type="button">
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: 15 }} />
                  </button>
                ) : (
                  <button type="button">
                    <VisibilityOffOutlinedIcon sx={{ fontSize: 15 }} />
                  </button>
                )}
              </div>
              <input
                id="password"
                name="password"
                spellCheck={false}
                required
                type={`${showPassword ? "text" : "password"}`}
                className="px-2 py-1 text-sm text-orange-500 bg-gray-900 bg-opacity-50 backdrop-blur-sm outline-none border border-transparent focus-within:border-gray-700 rounded-md"
              />
            </div>
          </div>
       
          <div>
            {!formSubmitted ? (
              <button className="w-full rounded-md bg-orange-500 hover:bg-orange-700 text-white h-10">
                Log In
              </button>
            ) : (
              <div className="w-full flex items-center justify-center h-10 bg-orange-500 bg-opacity-30 rounded-md">
                {" "}
                <ButtonLoadingState />
              </div>
            )}
          </div>

          <div className="text-xs text-center text-slate-500">
            <p>Don't have an account ? <span><NavLink type="button" to="/sign-up" className="text-orange-500">Sign Up</NavLink></span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
