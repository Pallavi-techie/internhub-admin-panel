// src/pages/AdminLayout.jsx
import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top navbar like screenshot */}
      <Header />

      {/* Page content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Floating bot button (bottom-right) */}
      <div className="fixed right-6 bottom-6">
        <button className="bg-yellow-400 p-4 rounded-full shadow-lg">
          🤖
        </button>
      </div>
    </div>
  );
}
