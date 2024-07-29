import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div
        className="h-[86vh] flex flex-col justify-center items-center text-white"
        style={{ background: "var(--primary-color)" }}
      >
        <h1 className="text-[28px] md:text-[40px] font-bold mt-6">
          ABOUT COMPONENT
        </h1>
        <div className="row justify-center items-center my-3">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className="line"></div>
        </div>
        <div className="row px-14 sm:px-40 md:px-48">
          <p className="w-full md:w-1/2 mb-3">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="w-full md:w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
