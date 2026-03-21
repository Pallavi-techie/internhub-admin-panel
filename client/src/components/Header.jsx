import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/InternHub.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          
           <img
    src={logo}
    alt="InternHub Logo"
    className="h-10"
  />
          <span className="text-xs text-gray-500 -mt-2">Unlock Your Potential</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/main" className="hover:text-sky-600">Home</Link>
          <Link to="/about" className="hover:text-sky-600">About Us</Link>
          <Link to="/services" className="hover:text-sky-600">Services</Link>
          <Link to="/pricing" className="hover:text-sky-600">Pricing</Link>
          <Link to="/portfolio" className="hover:text-sky-600">Portfolio</Link>
          <Link to="/blog-public" className="hover:text-sky-600">Blog</Link>
          <Link to="/team" className="hover:text-sky-600">Team</Link>
          <Link to="/career" className="hover:text-sky-600">Career</Link>
          <Link to="/verify-credential" className="hover:text-sky-600">Verify Credential</Link>
          <Link to="/contact" className="hover:text-sky-600">Contact Us</Link>
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="border border-sky-700 px-4 py-2 rounded-lg text-sm font-semibold text-sky-700 hover:bg-sky-50"
          >
            Login
          </Link>

          <Link
            to="/free-consultant"
            className="bg-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Free Consultant
          </Link>
        </div>
      </div>
    </header>
  );
}
