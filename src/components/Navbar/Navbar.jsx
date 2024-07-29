import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  function navOpen() {
    const menu = document.querySelector(".mobile-menu");
    if (menu.classList.contains("h-0")) {
      menu.classList.replace("h-0", "h-[150px]");
    } else {
      menu.classList.replace("h-[150px]", "h-0");
    }
  }
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let y = window.scrollY;
      setScroll(y);
    });
  }, []);
  return (
    <nav
      className={
        scroll > 40
          ? "fixed top-0 navbar w-full px-6 sm:px-10 md:px-20 lg:px-28 py-5 transition-all duration-700 z-10"
          : "fixed top-0 navbar w-full px-6 sm:px-10 md:px-20 lg:px-28 py-9 transition-all duration-700 z-10"
      }
      style={{ backgroundColor: "var(--secondery-color)" }}
    >
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link to="/home" className="text-[26px] md:text-[32px]">
            START FRAMEWORK
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-4">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold p-2 rounded-md bg-[var(--primary-color)]"
                    : "text-white font-bold p-2 rounded-md"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold p-2 rounded-md bg-[var(--primary-color)]"
                    : "text-white font-bold p-2 rounded-md"
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold p-2 rounded-md bg-[var(--primary-color)]"
                    : "text-white font-bold p-2 rounded-md"
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={navOpen}
            className="outline-none mobile-menu-button py-2 px-4 border border-slate-800 focus:shadow-[0_0_0_4px] duration-500 rounded-lg"
          >
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
        </div>
      </div>
      <div className="mobile-menu h-0 overflow-hidden transition-[height] duration-500 lg:hidden">
        <ul className="mt-4 space-y-4">
          <li className="my-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold p-2 rounded-md bg-[var(--primary-color)]"
                  : "text-white font-bold p-2 rounded-md"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="my-6">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold p-2 rounded-md bg-[var(--primary-color)]"
                  : "text-white font-bold p-2 rounded-md"
              }
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li className="my-6">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold p-2 rounded-md bg-[var(--primary-color)]"
                  : "text-white font-bold p-2 rounded-md"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
