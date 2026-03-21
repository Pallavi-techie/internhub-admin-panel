import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">InternHub</h2>
          <p className="mt-4 text-sm leading-relaxed">
            InternHub is a next-generation innovation company providing
            internships, enterprise solutions, digital services, and verified
            credentials.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/career" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Internship Programs</li>
            <li>Enterprise Solutions</li>
            <li>Web & App Development</li>
            <li>Digital Marketing</li>
            <li>Credential Verification</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <p className="text-sm">📍 India</p>
          <p className="text-sm mt-1">📧 support@internhub.com</p>
          <p className="text-sm mt-1">📞 +91 90000 00000</p>

          <Link
            to="/free-consultant"
            className="inline-block mt-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
          >
            Free Consultation
          </Link>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} InternHub. All rights reserved.
      </div>
    </footer>
  );
}
