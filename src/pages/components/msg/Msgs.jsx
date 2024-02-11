import React, { useState, useRef, useEffect } from "react";

function Msgs({ color }) {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const deleteRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (deleteRef.current && !deleteRef.current.contains(event.target)) {
        setIsDeleteVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDelete() {
    setIsDeleteVisible(!isDeleteVisible);
  }

  function deleteItem() {
    // Your delete item logic goes here
  }

  return (
    <div
      className={` ${color} rounded-[35px] mb-[20px] border-t-[2px] border-[#1b266b] `}
    >
      <div className="py-[20px] px-[15px] flex justify-center gap-[25px]">
        <div className="users w-[35px] rounded-[60px] h-[35px] bg-[#1a307b]"></div>
        <div className="namesUsers">
          <h3 className="text-[white]">Dorinel R</h3>
          <p className="max-w-[250px] text-[#5c6caf] mt-[15px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            ipsam!
          </p>
        </div>
        <div className="iconRemove relative">
          <i
            className="fa fa-ellipsis-h text-[#5c6caf] cursor-pointer"
            onClick={toggleDelete}
          ></i>
          {isDeleteVisible && (
            <div
              ref={deleteRef}
              className="deleteitem absolute bg-[#ffffffe9] w-[150px] flex gap-[10px] justify-center items-center right-[0px] p-[10px] text-[red] rounded-[5px]"
            >
              <i className="fa fa-trash-o text-[red]" onClick={deleteItem}></i>
              <p>Delete now</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-right pr-[24px] pb-[10px] text-[#5c6caf]">3 min ago</p>
    </div>
  );
}

export default Msgs;
