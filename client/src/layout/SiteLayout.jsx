import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SiteLayout() {
  return (
    <>
      {/* TOP NAVBAR */}
      <Header />

      {/* PAGE CONTENT */}
      <main className="pt-20 min-h-screen bg-white">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

