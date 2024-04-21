import React, { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ButtonLoadingState from "./ButtonLoadingState";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();
    let terms = document.getElementById("terms");
    if (!terms.checked) {
      setShowTerms(true);
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  }
  return (
    <div className="h-full px-5 pt-10">
      <div className="space-y-10">
        <h1 className="bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 text-transparent font-bold text-xl uppercase">
          Create an account
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-5">
          {/* name */}
          <div className="flex items-center gap-3 p-1 hover:bg-gradient-to-r hover:from-transparent hover:to-orange-500 rounded-lg">
            <label
              htmlFor="businessName"
              className="text-slate-300 text-xs w-24"
            >
              Business Name
            </label>
            <div>
              <input
                id="businessName"
                name="businessName"
                spellCheck={false}
                required
                className="px-2 py-1 text-sm text-orange-500 bg-gray-900 bg-opacity-50 backdrop-blur-sm outline-none border border-transparent focus-within:border-gray-700 rounded-md"
              />
            </div>
          </div>
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
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-10 right-2 top-0 rounded-md flex items-center justify-center text-slate-500"
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
          <div
            className={`flex items-start gap-3 w-72 border ${
              showTerms
                ? "border-red-500 text-red-500"
                : "border-transparent text-slate-500"
            }  rounded-md  p-1`}
          >
            <input
              onChange={() => setShowTerms(false)}
              id="terms"
              type="checkbox"
              className="size-3 border-none accent-orange-500 transition-all"
            />
            <p className="text-[10px] ">
              Creating an account means you are okay with our Terms and
              Conditions and our Privacy Policy?
            </p>
          </div>
          <div>
            {!formSubmitted ? (
              <button className="w-full rounded-md bg-orange-500 hover:bg-orange-700 text-white h-10">
                Sign Up
              </button>
            ) : (
              <div className="w-full flex items-center justify-center h-10 bg-orange-500 bg-opacity-30 rounded-md">
                {" "}
                <ButtonLoadingState />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
