import React, { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import { useNavigate } from "react-router-dom";
import AllInOneSolution from "./sections/AllInOneSolution";
import PricingPlan from "./sections/PricingPlan";
import HowItWorks from "./sections/HowItWorks";
import ClientStories from "./sections/ClientStories";
import Footer from "./sections/Footer";
import MobileHeader from "./MobileHeader";
import SideNavBar from "../../components/SideNavBar";


function LandingPage() {
  const [scrollHeight, setScrollHeight] = useState("");
  const [headerColor, setHeaderColor] = useState("none");
  const [sideNav, setSideNav] = useState("close")

  function getHeight(e) {
    let container = document.getElementById("container");
    let height = container.getBoundingClientRect().top;
    if (height < scrollHeight) {
      setHeaderColor("fill");
    } else {
      setHeaderColor("none");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("container");
    setScrollHeight(container.getBoundingClientRect().top);
  });

  return (
    <div
      onScroll={getHeight}
      className="relative h-screen w-full overflow-scroll bg-grainy bg-fixed"
    >
      <div className="sticky z-40 top-0 bg-transparent bg-opacity-50 backdrop-blur-md">
        {sideNav === "open" && <SideNavBar setSideNav={setSideNav} /> }
      
        <DesktopHeader headerColor={headerColor} />
        <MobileHeader headerColor={headerColor} setSideNav={setSideNav} />
      </div>

      {/* first full screen */}
      <div id="container">
        <AllInOneSolution />
        <PricingPlan />
        <HowItWorks />
        <ClientStories />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
