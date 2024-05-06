import React, { useState } from "react";

function DesktopHeaderTab({ idx, keyword, options }) {
  return (
    <button
      className="relative group cursor-pointer px-2 py-1"
    >
      <p className="group-hover:text-gleja-100 xs:max-md:group-hover:text-black xs:max-md:uppercase text-left font-medium font-inter bg-red-40 xs:max-md:text-right xs:max-md:text-white">
        {keyword}
      </p>
      <div className="hidden dropdown transition-all xs:max-md:group-hover:hidden group-hover:block group-focus-within:block xs:max-md:group-focus-within:hidden group-active:block absolute top-5 z-10 pt-16 left-2 min-w-28 bg-transparent ">
        <ul className="relative dropdown text-white -mt-10 flex flex-col bg-gleja-200 rounded-lg p-5 overflow-hidden">
          <div className="absolute -z-10 left-0 top-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-lg"></div>
          {options.map((item) => (
            <li key={item} className="hover:text-red-400">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

export default DesktopHeaderTab;
