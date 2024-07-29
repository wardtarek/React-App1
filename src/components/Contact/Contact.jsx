import React, { useEffect } from "react";
import "./contact.module.css"

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  function labelUp(e) {
    let target = e.target.getAttribute("id");
    let labels = Array.from(document.getElementsByTagName("label"));

    labels.forEach((element) => {
      if (element.getAttribute("for") == target) {
        if (e.target.value.length > 0) {
          element.classList.replace("top-[50%]", "top-[-10%]");
        } else {
          element.classList.replace("top-[-10%]", "top-[50%]");
        }
      }
    });
  }
  return (
    <>
      <div className="py-8">
        <h1
          className="text-[28px] md:text-[40px] font-bold mt-6 text-center"
          style={{ color: "var(--secondery-color)" }}
        >
          CONTACT SECTION
        </h1>
        <div
          className="row justify-center items-center my-3"
          style={{ color: "var(--secondery-color)" }}
        >
          <div className="lineDark"></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className="lineDark"></div>
        </div>
        <div className="py-8 row w-[90%] md:w-[75%] lg:w-[45%] mx-auto">
          <div className="w-full relative py-4">
            <label
              htmlFor="username"
              className="absolute top-[50%] duration-500 z-[-1]"
            >
              userName :
            </label>
            <input
              onKeyUp={labelUp}
              id="username"
              type="text"
              placeholder="userName"
              name="userName"
              className="outline-none w-full px-2 py-4 border-b rounded-lg"
            />
          </div>
          <div className="w-full relative py-4">
            <label
              htmlFor="userage"
              className="absolute top-[50%] duration-500 z-[-1]"
            >
              userAge :
            </label>
            <input
              onKeyUp={labelUp}
              id="userage"
              type="number"
              placeholder="userAge"
              name="userAge"
              className="outline-none w-full px-2 py-4 border-b rounded-lg"
            />
          </div>
          <div className="w-full relative py-4">
            <label
              htmlFor="useremail"
              className="absolute top-[50%] duration-500 z-[-1]"
            >
              userEmail :
            </label>
            <input
              onKeyUp={labelUp}
              id="useremail"
              type="email"
              placeholder="userEmail"
              name="userEmail"
              className="outline-none w-full px-2 py-4 border-b rounded-lg"
            />
          </div>
          <div className="w-full relative py-4">
            <label
              htmlFor="userpassword"
              className="absolute top-[50%] duration-500 z-[-1]"
            >
              userPassword :
            </label>
            <input
              onKeyUp={labelUp}
              id="userpassword"
              type="email"
              placeholder="userPassword"
              name="userPassword"
              className="outline-none w-full px-2 py-4 border-b rounded-lg"
            />
          </div>
          <button
            className="px-3 py-2 text-white rounded-lg m-2"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
