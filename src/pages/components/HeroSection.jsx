import React from "react";
import Link from "next/link";
function HeroSection() {
  return (
    <div>
      <div className="bg-section w-[100%] border-t-[2px] border-[#2b387a] rounded-[35px]">
        <div className="p-[70px]">
          <h2 className="texthero text-[white] font-bold text-[35px]">
            GET YOUR $400 BONUS!
          </h2>
          <p className="text-[white]">
            <span className="text-[#4ec9f6] font-bold">Free $400</span> Bonus
            for net account!
          </p>
          <button className="border-dashed border-2 border-[#2996dc] bg-[#050e3b] text-[white] w-[150px] h-[50px] rounded-[50px] mt-[30px]">
            <Link href="">Play Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
