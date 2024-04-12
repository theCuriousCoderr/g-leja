import React from "react";
import DesktopHeader from "./DesktopHeader";
// import bg_image from '../../assets/images/landing_page/grainy_background.jpg'

function LandingPage() {
  return (
    // designing desktop view first
    <div className="relative h-screen w-full overflow-scroll bg-grainy bg-fixed">
      <div className="sticky top-0">
        <DesktopHeader />
      </div>

      {/* first full screen */}
      <div className="h-screen w-full bg-red-40"></div>
      {/* <div className='h-screen w-full bg-blue-40'>  </div>
        <div className='h-screen w-full bg-yellow-40'>  </div> */}
    </div>
  );
}

export default LandingPage;
