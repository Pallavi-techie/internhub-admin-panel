import React from "react";
import ListPage from "../templates/ListPage";

const MOCK = [
  { id: 1, name: "Super Admin", email: "admin@internhub.com", role: "Super Admin" },
  { id: 2, name: "HR Admin", email: "hr@internhub.com", role: "Admin" },
];

export default function ManageUsers() {
  return (
    <ListPage
      title="Manage Users"
      subtitle="Create and manage admin and employee accounts."
    >
      <div className="overflow-x-auto text-sm">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK.map((row) => (
              <tr key={row.id} className="border-b last:border-b-0">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.email}</td>
                <td className="px-4 py-3">{row.role}</td>
                <td className="px-4 py-3 space-x-2">
                  <button className="px-3 py-1 text-xs rounded border hover:bg-gray-50">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-xs rounded border hover:bg-gray-50">
                    Disable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <button className="px-4 py-2 text-sm rounded bg-sky-600 text-white">
            Add New User
          </button>
        </div>
      </div>
    </ListPage>
  );
}

