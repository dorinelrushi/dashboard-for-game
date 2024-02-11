import React from "react";
import RightSideSticky from "../components/rightSideSticky/RightSideSticky";
import HeroSection from "../components/HeroSection";
import Search from "../components/Search";
import Slide from "../components/Slide";
import Slide1 from "../components/Slide1";

function Index() {
  return (
    <div className="flex gap-[19px] ">
      <div className="leftContent1 overflow-y-scroll h-[100vh]  p-[20px] pb-[150px] flex-[2.3]">
        {/* Hero section */}
        <div>
          <HeroSection />
          <Search />
          {/*  */}
          <div>
            <div className="live text-[white] mb-[25px] font-bold">
              Live Games <span className="text-[#26b2e4]">( 235 )</span>
            </div>
          </div>
          <Slide />
          <div className="live text-[white] mb-[25px] font-bold mt-[25px]">
            Mini Games <span className="text-[#26b2e4]">( 350 )</span>
          </div>
          <Slide1 />
        </div>
        {/* Search section */}
      </div>
      <div className="rightChat flex-[1]">
        <RightSideSticky />
      </div>
    </div>
  );
}

export default Index;
