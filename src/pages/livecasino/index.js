import React from "react";
import RightSideSticky from "../components/rightSideSticky/RightSideSticky";
import ChartWaves from "../components/Chart/Chart";
import List from "../components/List";

function Livecasino() {
  return (
    <div className="overflow-y-scroll">
      <div className="flex gap-[19px]">
        <div className="leftContent1 p-[20px] flex-[2.3] h-[100vh] pb-[120px] overflow-y-scroll">
          {/* cart */}
          <div className="chartjs flex justify-between gap-[15px] w-[100%]">
            <div className="chartinfo  flex-[1] ">
              {/* up */}
              <div>
                <div className="boxShad p-[30px] rounded-[35px]">
                  <div className="flex items-center gap-[15px] pb-[20px] border-[#141e59] border-b-[1px]">
                    <i className="fa fa-bolt text-[#19bcf9]"></i>
                    <p className="text-[white]">Manual</p>
                  </div>
                  <p className="gray text-[#344377] mt-[10px] mb-[10px]">
                    Bet Amount
                  </p>

                  {/*one replace */}
                  <div>
                    <div className="flex bg-[#1b266b] justify-between rounded-[50px] py-[10px] px-[10px]">
                      <div className="flex items-center text-[white]">
                        $ |{" "}
                        <p>
                          1 000,<span className="text-[#8993b9]">00</span>
                        </p>{" "}
                      </div>
                      <div className="flex gap-[10px] items-center text-[white]">
                        <div className="w-[70px] p-[5px] rounded-[40px] flex justify-center items-center bg-[#0e4ba4]">
                          1/2
                        </div>
                        <div className="w-[70px] p-[5px] rounded-[40px] flex justify-center items-center bg-[#0e4ba4]">
                          2x
                        </div>
                        <div className="w-[70px] p-[5px] rounded-[40px] flex justify-center items-center bg-[#0e98fa]">
                          Max
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="gray text-[#344377] mt-[10px] mb-[10px]">
                    Auto Cashout
                  </p>
                  {/*two replace */}
                  <div>
                    <div className="flex bg-[#1b266b] justify-between rounded-[50px] py-[10px] px-[10px]">
                      <div className="flex items-center text-[white]">
                        $ |{" "}
                        <p>
                          1 000,<span className="text-[#8993b9]">00</span>
                        </p>{" "}
                      </div>
                      <div className="flex gap-[10px] items-center text-[#f0efef]">
                        <div className="w-[70px] p-[5px] rounded-[40px] flex justify-center items-center bg-[#0e4ba4]">
                          1/2
                        </div>
                        <div className="w-[70px] p-[5px] rounded-[40px] flex justify-center items-center bg-[#0e98fa]">
                          2x
                        </div>
                        <div className="w-[70px] p-[5px] rounded-[40px] flex justify-center items-center bg-[#0e4ba4]">
                          10x
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* button */}
                  <button className="btn mt-[20px] flex items-center w-[100%] h-[50px] rounded-[50px] justify-center text-center text-[white] gap-2">
                    <i className="fa fa-diamond"></i>
                    <p className="font-bold">
                      Place Bet{" "}
                      <span className="font-normal">(100k round)</span>
                    </p>
                  </button>
                </div>
              </div>
              {/* down */}
              <div>
                <div className="boxShad p-[35px] rounded-[25px] mt-[15px]">
                  <div className="flex justify-between items-center border-[#141e59] border-b-[1px] pb-[20px] ">
                    <div className="chat text-[#7a8ad0]">Players</div>
                    <div className="chat1 flex  gap-[7px] items-center">
                      <div className="text-[#7a8ad0]">135</div>
                      <div className="flex items-center relative">
                        <div className="users1 w-[35px] h-[35px] relative left-[20px] z-0 bg-[red] rounded-[25px]"></div>
                        <div className="users2 w-[35px] h-[35px]  relative z-1 left-[10px] bg-[#ff6a00] rounded-[25px]"></div>
                        <div className="users3 w-[35px] h-[35px] bg-[#89f541] z-[3] rounded-[25px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]">
                    <p className="text-[#7a8ad0]">General Bank</p>
                    <p className="font-bold text-[white] mt-[1px] text-[18px]">
                      1000,00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart flex-[1.2] boxShad p-[35px] rounded-[35px] ">
              <div className="w-[100%]">
                <ChartWaves />
              </div>
            </div>
          </div>
          <div className="flex mt-[20px] mb-[1px] items-center gap-[20px] justify-center">
            <div className="line1 w-full bg-[#182167] h-[1px]"></div>
            <div className="text-[#96aacd] text-[15px] w-[154px] text-center flex">
              LIVE BETS
            </div>
            <div className="line1 w-full bg-[#182167] h-[1px]"></div>
          </div>
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
        <div className="rightChat flex-[1]">
          <RightSideSticky />
        </div>
      </div>
    </div>
  );
}

export default Livecasino;
