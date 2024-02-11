import React from "react";
import Link from "next/link";
import List from "../components/List";
import RightSideSticky from "../components/rightSideSticky/RightSideSticky";
import HeroSection from "../components/HeroSection";

function Index() {
  return (
    <div>
      <div className="flex gap-[19px]">
        {/* leftContent */}
        <div className="leftContent p-[20px] flex-[2.3] h-[100vh] pb-[120px] overflow-y-scroll">
          {/* Part 1 section*/}
          <HeroSection />
          {/* Part 2 section*/}
          <div className="flexbox w-[100%] flex gap-[30px] mt-[30px]">
            <div className="game1">
              <div className="overlaygame"></div>
            </div>
            <div className="game2">
              <div className="overlaygame"></div>
            </div>
            <div className="game3">
              <div className="overlaygame"></div>
            </div>
          </div>
          {/* Part 3 section*/}
          <div className="flex mt-[20px] mb-[20px] items-center gap-[20px] justify-center">
            <div className="line1 w-full bg-[#182167] h-[1px]"></div>
            <div className="text-[#96aacd] text-[15px] w-[154px] text-center flex">
              LIVE BETS
            </div>
            <div className="line1 w-full bg-[#182167] h-[1px]"></div>
          </div>
          {/* Part 4 section*/}
          <div className="boxbet rounded-[35px] border-t-[2px] border-[#182167] bg-[#0b1543]">
            {/* list section*/}
            <div className="over p-[10px]">
              <div className="list-bet rounded-[28px] h-[209px] overflow-y-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Game</th>
                      <th>Player</th>
                      <th>Time</th>
                      <th>Bet</th>
                      <th>Payout</th>
                    </tr>
                  </thead>
                  <tbody>
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* rightChat */}
        <div className="rightChat flex-[1]">
          <RightSideSticky />
        </div>
      </div>
    </div>
  );
}

export default Index;
