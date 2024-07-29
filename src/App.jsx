import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Error from "./components/Error/Error";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Project />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        { path: "", element: <Home /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
        <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;
