import React from "react";

export default function MovingBar() {
  return (
    <div className=" font-zamme_light text-sm md:text-lg">
      <div className="  flex fixed inset-0 bg-white w-full h-10 ">
        <div className=" animate-scroll-left   marquee-group shrink-0 flex h-full w-full items-center">
          <div className=" text-justify inline-block mr-5 w-full">
            Zamme talk 28.03.23 19:30{" "}
          </div>
          <div className=" text-justify inline-block mr-5 w-full">
            Workshop with Dan Solbach 14.03.23
          </div>
          <div className=" text-justify inline-block mr-5 w-full">
            Zamme talk 28.03.23 19:30
          </div>
        </div>
        <div className=" animate-scroll-left  marquee-group shrink-0 flex h-full w-full items-center">
          <div className=" text-justify inline-block mr-5 w-full">
            Zamme talk 28.03.23 19:30{" "}
          </div>
          <div className=" text-justify inline-block mr-5 w-full">
            Workshop with Dan Solbach 14.03.23
          </div>
          <div className=" text-justify inline-block mr-5 w-full">
            Zamme talk 28.03.23 19:30
          </div>
        </div>
      </div>
    </div>
  );
}
