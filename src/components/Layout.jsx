import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => (
  <div className="font-sans">
    <Header />
    <main className="pt-20">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
