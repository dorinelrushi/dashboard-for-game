import React from "react";
import Search from "../components/Search";
import Link from "next/link";
import bussiness from "./../../../public/bussiness.png";
import Image from "next/image";
function HelpCenter() {
  return (
    <div className="">
      <div className="helpcenter w-[60%] h-[100vh] flex flex-col p-[50px] overflow-y-scroll    m-auto">
        {/* How can we help you */}
        <div>
          <h2 className="text-[white] font-bold text-[45px] mb-[-15px] ">
            How can I help you?
          </h2>
          <div>
            <Search />
          </div>
          <h2 className=" text-[white] text-[25px] mb-[19px]">
            Featured Topics
          </h2>
          <div className="listoffeatured">
            <ul className="flex flex-col gap-[18px] text-[#7181c4]  text-[18px] tracking-[1px]">
              <li>
                <Link href="/">Pro Games</Link>
              </li>
              <li>
                <Link href="/">About Live API Casino</Link>
              </li>
              <li>
                <Link href="/">Join a brodcast channel </Link>
              </li>
              <li>
                <Link href="/">Check your Account Status </Link>
              </li>
              <li>
                <Link href="/">Ads and how they’re managed in the EU </Link>
              </li>
              <li>
                <Link href="/">Jobs </Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div
                className="boxShad justify-between items-center flex  mt-[28px] rounded-[35px] p-[30px] mb-[65px]"
                id="iconbussiness"
              >
                <div className="leftIcon flex items-center gap-[35px] flex-wrap">
                  <Image
                    src={bussiness}
                    width={150}
                    alt="demo"
                    className="bg-[#1d2e57b5] rounded-[90px] p-[10px] border-[3px] border-dashed  border-[#199cf9]"
                  />
                  <div>
                    <h2 className="text-[white] mb-[15px] text-[28px] font-bold">
                      Create Your bussines
                    </h2>
                    <p className="text-[#7181c4] text-[18px] max-w-[455px]">
                      Paragraphs Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit.{" "}
                    </p>
                  </div>
                </div>

                <div className="icon">
                  <i className="fa fa-cloud-download text-[#7181c4] text-[28px] hover:text-[#f7d45e] cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
