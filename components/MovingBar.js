import React from "react";

export default function MovingBar() {
  return (
    <div className=" font-zamme_light text-lg">
      <div className="  flex fixed inset-0 bg-white w-full  h-10 ">
        <div className="  animate-scroll-left   marquee-group shrink-0 flex h-full w-full items-center">
          <div className=" shrink-0 flex text-justify mr-5">Próximamente</div>
          <div className=" shrink-0 flex text-justify mr-5">Coming Soon</div>
        </div>
        <div className=" animate-scroll-left  marquee-group shrink-0 flex h-full w-full items-center">
          <div className=" shrink-0 flex text-justify mr-5">Próximamente</div>
          <div className=" shrink-0 flex text-justify mr-5">Coming Soon</div>
        </div>
      </div>
    </div>
  );
}
