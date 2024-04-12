import React from "react";
import wavy from "../assets/images/login_page/wavy2.jpg";

function DesktopLoginLayout() {
  return (
    <div className="h-screen w-full p-5">
      <div className="h-full w-full p-3 bg-orange-100 rounded-3xl flex gap-10">
        <div className="w-1/3"></div>
        <div className="relative w-2/3 h-full bg-red-400 rounded-2xl">
          <div className="absolute w-full h-full ">
            <img src={wavy} className="size-full object-cover rounded-2xl" />
          </div>
          <div className="relative text-white z-10">hgvhgbj</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopLoginLayout;
