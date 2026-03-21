import React from "react";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="mt-12">
      <h2 className="text-gray-600 font-semibold mb-2 text-sm flex items-center gap-1">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Link className="bg-purple-100 p-4 rounded-xl shadow" to="/admin/blog/list">
          <h3 className="font-bold text-purple-700">View Blog</h3>
          <p className="text-xs text-gray-600">See public blog</p>
        </Link>

        <Link className="bg-blue-100 p-4 rounded-xl shadow" to="/admin/blog/create">
          <h3 className="font-bold text-blue-700">Create Blog</h3>
          <p className="text-xs text-gray-600">Start writing</p>
        </Link>

        <Link className="bg-green-100 p-4 rounded-xl shadow" to="/admin/uploaded-jobs">
          <h3 className="font-bold text-green-700">Job Listings</h3>
          <p className="text-xs text-gray-600">Public jobs</p>
        </Link>

        <Link className="bg-yellow-100 p-4 rounded-xl shadow" to="/admin/uploaded-internships">
          <h3 className="font-bold text-yellow-700">Internships</h3>
          <p className="text-xs text-gray-600">Public listings</p>
        </Link>
      </div>
    </div>
  );
}
