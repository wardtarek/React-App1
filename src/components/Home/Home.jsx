import React, { useEffect } from "react";
import img from "./../../assets/avataaars.svg"

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div
        className="h-[86vh] px-5 flex flex-col justify-center items-center text-white"
        style={{ background: "var(--primary-color)" }}
      >
        <img
          className="w-[250px]"
          src={img}
          alt=""
        />
        <h1 className="text-[32px] md:text-[40px] font-bold mt-8">
          START FRAMEWORK
        </h1>
        <div className="row justify-center items-center my-3">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className="line"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
