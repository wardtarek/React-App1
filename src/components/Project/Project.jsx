import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Project() {
  return (
    <>
      <Navbar />
      <div className="mt-[84px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
