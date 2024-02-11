import React, { useEffect } from "react";
import Link from "next/link";
function Slide() {
  useEffect(() => {
    const container = document.querySelector("#overflow");
    let startY;
    let startX;
    let scrollLeft;
    let scrollTop;
    let isDown;

    container.addEventListener("mousedown", (e) => mouseIsDown(e));
    container.addEventListener("mouseup", (e) => mouseUp(e));
    container.addEventListener("mouseleave", (e) => mouseLeave(e));
    container.addEventListener("mousemove", (e) => mouseMove(e));

    function mouseIsDown(e) {
      isDown = true;
      startY = e.pageY - container.offsetTop;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      scrollTop = container.scrollTop;
    }
    function mouseUp(e) {
      isDown = false;
    }
    function mouseLeave(e) {
      isDown = false;
    }
    function mouseMove(e) {
      container.style.cursor = "grab";
      if (isDown) {
        e.preventDefault();
        //Move Horizontally
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        container.scrollLeft = scrollLeft - walkX;
      }
    }
  });
  return (
    <div className="w-[100%] overflow-hidden">
      <div className="w-[100%] ">
        <div className="demo flex gap-[30px] overflow-x-hidden" id="overflow">
          <div className="w-screen h-full flex-shrink-0 relative covers1">
            <div className="overlaygame"></div>
          </div>
          <div className="w-screen h-full flex-shrink-0 relative covers2">
            <div className="overlaygame"></div>
          </div>
          <div className="w-screen h-full flex-shrink-0 relative covers3">
            <div className="overlaygame"></div>
          </div>
          <div className="w-screen h-full flex-shrink-0 relative  covers1">
            <div className="overlaygame"></div>
          </div>
          <div className="w-screen h-full flex-shrink-0 relative covers1">
            <div className="overlaygame"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
