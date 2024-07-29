import React from "react";

export default function Footer() {
  return (
    <footer className="text-center">
      <div
        className="row text-white px-3 sm:px-8 md:px-16 lg:px-28 py-20"
        style={{ backgroundColor: "var(--secondery-color)" }}
      >
        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-2xl lg:text-[28px] font-semibold mb-2">LOCATION</h3>
          <p className="mb-2">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-2xl lg:text-[28px] font-semibold mb-2">AROUND THE WEB</h3>
          <ul>
            <li className="mr-2 inline-block border border-1 p-2 rounded-full w-[40px] h-[40px]">
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li className="mr-2 inline-block border border-1 p-2 rounded-full w-[40px] h-[40px]">
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li className="mr-2 inline-block border border-1 p-2 rounded-full w-[40px] h-[40px]">
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
            <li className="mr-2 inline-block border border-1 p-2 rounded-full w-[40px] h-[40px]">
              <i className="fa-solid fa-globe"></i>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-2xl lg:text-[28px] font-semibold mb-2">ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap <br /> theme created
            by Route
          </p>
        </div>
      </div>
      <div className="py-6" style={{ backgroundColor: "#1a252f" }}>
        <p className="text-slate-200">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
