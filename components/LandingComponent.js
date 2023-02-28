import React from "react";

export default function LandingComponent({ text1, text2, text3, buttonText }) {
  return (
    <div>
      <p>{text1}</p>
      <p className="my-5">{text2}</p>
      <p className=" text-red-500">{text3}df</p>
      <div className="rounded-full bg-blue-400">{buttonText}</div>
    </div>
  );
}
