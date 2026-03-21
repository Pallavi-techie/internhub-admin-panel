import React from "react";
import { Link } from "react-router-dom";

export default function CardBox({ icon, title, desc, link }) {
  return (
    <Link
      to={link}
      className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div className="text-3xl text-sky-600">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </Link>
  );
}
