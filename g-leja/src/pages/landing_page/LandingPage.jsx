import React from "react";
import DesktopHeader from "./DesktopHeader";
import ButtonLoadingState from "../../components/ButtonLoadingState";
import PageLoadingState from "../../components/PageLoadingState";

function LandingPage() {
  return (
    // designing desktop view first
    <div className="relative h-screen w-full overflow-scroll bg-grainy bg-fixed">
      <div className="sticky top-0">
        <DesktopHeader />
      </div>

      {/* first full screen */}
      <div className="h-screen w-full bg-red-40 flex items-center justify-center">
        <PageLoadingState width="w-1" height="h-4" />
        <ButtonLoadingState/>
      </div>
      {/* <div className='h-screen w-full bg-blue-40'>  </div>
        <div className='h-screen w-full bg-yellow-40'>  </div> */}
    </div>
  );
}

export default LandingPage;
