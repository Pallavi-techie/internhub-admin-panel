import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-7xl mx-auto px-3 lg:px-6 py-8">
        <Outlet />
      </main>

      {/* Floating bot */}
      <button className="fixed right-6 bottom-6 bg-yellow-400 w-14 h-14 rounded-full text-2xl shadow-xl">
        🤖
      </button>
    </div>
  );
}
