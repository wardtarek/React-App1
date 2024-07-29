import React, { useEffect } from "react";
import img1 from "./../../assets/poert1.png";
import img2 from "./../../assets/port2.png";
import img3 from "./../../assets/port3.png";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  function openModal(e) {
    let items = Array.from(document.getElementsByClassName("item"));
    let target = e.target;
    items.forEach((element) => {
      if (
        target.parentElement.parentElement == element ||
        target.parentElement.parentElement.parentElement == element
      ) {
        let srcImg = element.querySelector("img").getAttribute("src");
        document.querySelector(".modal img").setAttribute("src", srcImg);
        document.querySelector(".modal").classList.replace("hidden", "flex");
      }
    });
  }
  function closeModal(e) {
    if (e.target.getAttribute("id") == "boxmodal") {
      document.querySelector(".modal").classList.replace("flex", "hidden");
    }
  }
  return (
    <>
      <div className="py-8">
        <h1
          className="text-[28px] md:text-[40px] font-bold mt-6 text-center"
          style={{ color: "var(--secondery-color)" }}
        >
          PORTFOLIO COMPONENT
        </h1>
        <div
          className="row justify-center items-center my-4"
          style={{ color: "var(--secondery-color)" }}
        >
          <div className="lineDark"></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className="lineDark"></div>
        </div>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10 md:px-20 lg:px-28">
          <div className="item group item1" onClick={openModal}>
            <div className="cursor-pointer relative">
              <img className="w-full rounded-lg" src={img1} alt="" />
              <div
                className="layer absolute w-full h-full top-0 rounded-lg row justify-center items-center opacity-0 group-hover:opacity-90 duration-500"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="item group item2" onClick={openModal}>
            <div className="cursor-pointer relative">
              <img className="w-full rounded-lg" src={img2} alt="" />
              <div
                className="layer absolute w-full h-full top-0 rounded-lg row justify-center items-center opacity-0 group-hover:opacity-90 duration-500"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="item group item3" onClick={openModal}>
            <div className="cursor-pointer relative">
              <img className="w-full rounded-lg" src={img3} alt="" />
              <div
                className="layer absolute w-full h-full top-0 rounded-lg row justify-center items-center opacity-0 group-hover:opacity-90 duration-500"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="item group item1" onClick={openModal}>
            <div className="cursor-pointer relative">
              <img className="w-full rounded-lg" src={img1} alt="" />
              <div
                className="layer absolute w-full h-full top-0 rounded-lg row justify-center items-center opacity-0 group-hover:opacity-90 duration-500"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="item group item2" onClick={openModal}>
            <div className="cursor-pointer relative">
              <img className="w-full rounded-lg" src={img2} alt="" />
              <div
                className="layer absolute w-full h-full top-0 rounded-lg row justify-center items-center opacity-0 group-hover:opacity-90 duration-500"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="item group item3" onClick={openModal}>
            <div className="cursor-pointer relative">
              <img className="w-full rounded-lg" src={img3} alt="" />
              <div
                className="layer absolute w-full h-full top-0 rounded-lg row justify-center items-center opacity-0 group-hover:opacity-90 duration-500"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fixed left-0 top-0 right-0 bottom-0 hidden justify-center items-center z-20"
          style={{ "background-color": "rgba(13,110,253,0.25)" }}
          id="boxmodal"
          onClick={closeModal}
        >
          <div className="row w-[95%] sm:w-[75%] md:w-[60%] lg:w-[40%] justify-center items-center">
            <img className="w-full" src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
