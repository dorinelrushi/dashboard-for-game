import React from "react";
import treasure from "./../../../public/treasure.png";
import Image from "next/image";
function HeaderUser() {
  return (
    <div className=" shadow-md">
      <div className="bg-[#071041] border-b-[2px] border-[#0d1a4a] flex justify-between items-center ">
        {/* leftManu */}
        <div className="leftManu ">
          <div className="leftOver">
            <div className="p-[10px] flex items-center gap-[20px]">
              <div className="imga">
                <Image
                  src={treasure}
                  width={60}
                  height={60}
                  alt="Description of the image"
                />
              </div>
              <div className="text">
                <h2 className="font-bold">Reward</h2>
                <p className="text-[#e4e4e4]">
                  Lorem ipsum dolor sit amet sit iplod.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* rightMenu */}
        <div className="rightMenu text-[white]">
          <div className="flex items-center gap-[10px] px-[20px]">
            <div className="notification relative ">
              <i className="fa fa-bell flex items-center justify-center bg-[#1b266b] text-[#6a7abc] w-[50px] h-[50px] rounded-[35px]"></i>
              <div className="active w-[10px] h-[10px] bg-[#59ef59] rounded-[50px] absolute right-[5px] top-[40px]"></div>
            </div>

            <div className="prices bg-[#1b266b] h-[50px] px-[15px] rounded-[45px]  justify-center flex items-center gap-[12px]">
              <p className="border-r-[1px] px-[10px] border-[#27476e]">$</p>
              <p>5 551,00</p>
              <i className="plus fa fa-plus font-light "></i>
            </div>
            <div className="profile w-[40px] h-[40px] bg-[red] rounded-[50px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderUser;
