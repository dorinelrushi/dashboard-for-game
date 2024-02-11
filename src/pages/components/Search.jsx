import React from "react";

function Search() {
  return (
    <div>
      <div className="mt-[30px] mb-[30px] relative">
        <form>
          <input
            type="text"
            placeholder="Search for game"
            className="search  w-[100%] bg-[#1b266b] p-[15px] rounded-[50px] text-[#7285c4]"
          />
          <button>
            <i className="fa fa-search text-[#7285c471] absolute right-[25px] top-[18px]"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
