import React from "react";

import Link from "next/link";

function LeftHeader() {
  return (
    <div className="leftHd  bg-[#040a2f] w-[100%] h-[100vh]">
      <div className="p-[20px]">
        {/*admin profile*/}
        <div className="adminProfile flex items-center gap-[20px] border-[#0c1547] border-b-[1px] pb-[17px] w-[100%] ">
          <div className="profile w-[40px] h-[40px] bg-[#1a307b] rounded-[50px]"></div>
          <div className="name font-bold text-[#f3f3f3]">Next js framework</div>
        </div>
        {/* Menu */}
        <div className="menu mt-[25px] border-b-[1px] border-[#0c1547] pb-[25px]">
          <nav className="nav">
            <ul className="flex flex-col gap-[12px]">
              <li>
                <i className="fa fa-home"></i>
                <Link href="/">Home Page</Link>
              </li>
              <li>
                <i className="fa fa-soccer-ball-o"></i>
                <Link href="/gamebox">Game Box</Link>
              </li>
              <li>
                <i className="fa fa-life-bouy"></i>
                <Link href="/livecasino">Live Casino</Link>
              </li>
              <li>
                <i className="fa fa-gear"></i>
                <Link href="/settings">Setting</Link>
              </li>
              <li>
                <i className="fa fa-headphones"></i>
                <Link href="/HelpCenter">Help Center</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Other Information */}
        <div className="information flex gap-[10px] items-center mt-[20px]">
          <i className="fa fa-info p-[10px] bg-[#4480da] text-[11px] text-[#131313] w-[20px] h-[20px] flex items-center justify-center rounded-[50px]"></i>
          <p className="text-[white]">
            <Link href="">Other Information</Link>
          </p>
        </div>
        {/* Other Information menu */}
        <div className="inf menu mt-[15px]">
          <ul className="flex flex-col gap-[8px] text-[#7182c488] text-[14px]">
            <li>
              <Link href="">About us</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
            <li>
              <Link href="">Term and Condation</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftHeader;
