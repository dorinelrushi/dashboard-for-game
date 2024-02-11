import React from "react";
import Link from "next/link";
import Msgs from "../msg/Msgs";
function RightSideSticky() {
  const colors = [
    {
      color1: "bg-[#0d154a]",
    },
    {
      color2: "bg-[#1b266bbd]",
    },
  ];
  return (
    <div className="rightMessages bg-[#071041] h-[100vh] ">
      <div className="p-[18px] ">
        {/* part 1 */}
        <div className="generalChat flex justify-between pb-[15px] border-b-[1px] border-[#0d1a4a] text-center items-center text-[#dadbdc]">
          <div className="general flex gap-[10px] items-center">
            <i className="fa fa-commenting text-[#1ac1f6]"></i>
            <p>General Chat</p>
          </div>
          <div className="">
            <Link href="edit" className="text-[#4e6d84]">
              Edit
            </Link>
          </div>
        </div>
        {/* part 2 */}
        <div className="flex justify-between items-center mt-[25px]">
          <div className="chat text-[#7a8ad0]">Chat Members</div>
          <div className="chat1 flex  gap-[7px] items-center">
            <div className="text-[#7a8ad0]">135</div>
            <div className="flex items-center relative">
              <div className="users1 w-[35px] h-[35px] relative left-[20px] z-0 bg-[red] rounded-[25px]"></div>
              <div className="users2 w-[35px] h-[35px]  relative z-1 left-[10px] bg-[#ff6a00] rounded-[25px]"></div>
              <div className="users3 w-[35px] h-[35px] bg-[#89f541] z-[3] rounded-[25px]"></div>
            </div>
          </div>
        </div>
        {/* part 3 */}
        <div className="msgs mt-[30px] p-[5px] h-[80vh] pb-[50px] overflow-y-scroll ">
          <Msgs color={colors[0].color1} />
          <Msgs color={colors[1].color2} />
          <Msgs color={colors[0].color1} />
          <Msgs color={colors[1].color2} />
          <Msgs color={colors[0].color1} />
          <Msgs color={colors[0].color1} />
        </div>
      </div>
    </div>
  );
}

export default RightSideSticky;
