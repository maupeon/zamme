import React from "react";
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function LandingComponent({
  text1,
  text2,
  text3,
  buttonText,
  color,
  isFirst,
}) {
  return (
    <div className=" h-full ">
      <p className=" font-zamme">{text1}</p>
      <p className="my-5 ">{text2}</p>
      {/* <p className=" ">{text3}</p> */}
      <div
        className={classNames(
          "mt-10  group relative  text-white   w-full text-xl py-10 px-10 flex justify-center items-center text-center "
        )}
      >
        <div
          className={classNames(
            color,
            "absolute inset-0 group-hover:animate-rotate  rounded-[60%] transition-transform duration-500 ease-in-outrounded-lg"
          )}
        ></div>
        <p className="w-full h-full z-10 font-zamme_bold font-thin text-xl flex items-center justify-center">
          {buttonText}
        </p>
      </div>
      {isFirst && (
        <div className=" mt-10 md:mt-0 md:fixed bottom-10  ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/zammeprojects/"
          >
            Instagram
          </a>

          <a target="_blank" rel="noreferrer" href="mailto:ciao@zamme.org">
            <p>ciao@zamme.org</p>
          </a>
          <p>Av. Ribera de San Cosme 22 Col. San Rafael, Mexico City</p>
        </div>
      )}
    </div>
  );
}
