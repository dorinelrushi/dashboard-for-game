import React from "react";

function List() {
  return (
    <tr className="list">
      <td>
        {" "}
        <div className="flex gap-[15px] items-center">
          <div className="listProfile w-[40px] h-[40px] rounded-[50px] bg-[#1a307b]"></div>
          <div className="text-[white]">Haunted House</div>
        </div>
      </td>
      <td>
        <div>
          <div className="flex gap-[15px] items-center">
            <div className="listProfile1 w-[40px] h-[40px] rounded-[50px] bg-[#1a307b]"></div>
            <div className="text-[white]">wade warren</div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <p>06:34 AM</p>
        </div>
      </td>
      <td>
        <div>
          $ 450.<span className="text-[#6a7abc]">00</span>
        </div>
      </td>
      <td>
        <div className="text-[#6a7abc]">
          <span className="text-[#1cb1e4]">$ 5 453,</span>00
        </div>
      </td>
    </tr>
  );
}

export default List;
