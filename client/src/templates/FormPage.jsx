import React from "react";

export default function FormPage({ title, subtitle, actions, children }) {
  return (
    <div className="p-4 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-sky-700">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 mt-1 text-sm">{subtitle}</p>
          )}
        </div>
        {actions}
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
        {children}
      </div>
    </div>
  );
}
