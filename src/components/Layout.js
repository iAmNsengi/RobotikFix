import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <>
      <main>
        <Header />
        <ToastContainer />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
