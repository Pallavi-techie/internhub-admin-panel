
import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function UserQueries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all queries
  async function fetchQueries() {
    try {
      const res = await api.get("/queries");
      setQueries(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load user queries");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQueries();
  }, []);

  // Update status
  async function updateStatus(id, status) {
    try {
      await api.patch(`/queries/${id}/status`, { status });
      setQueries((prev) =>
        prev.map((q) =>
          q._id === id ? { ...q, status } : q
        )
      );
    } catch (err) {
      alert("Failed to update status");
    }
  }

  // Delete query
  async function handleDelete(id) {
    if (!window.confirm("Delete this query?")) return;

    try {
      await api.delete(`/queries/${id}`);
      setQueries((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      alert("Failed to delete query");
    }
  }

  return (
    <ListPage
      title="User Queries"
      subtitle="Read and address customer questions from the contact form."
    >
      {loading && <div className="p-4 text-sm">Loading...</div>}
      {error && <div className="p-4 text-sm text-red-600">{error}</div>}

      {!loading && !error && (
        <div className="overflow-x-auto text-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {queries.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No queries found
                  </td>
                </tr>
              ) : (
                queries.map((row) => (
                  <tr key={row._id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">
                      <div className="font-medium">{row.name}</div>
                      <div className="text-xs text-gray-500">
                        {row.email}
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      {row.subject || "General Query"}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Resolved"
                            ? "bg-green-50 text-green-700"
                            : "bg-orange-50 text-orange-700"
                        }`}
                      >
                        {row.status || "Open"}
                      </span>
                    </td>

                    <td className="px-4 py-3 space-x-2">
                      {row.status !== "Resolved" && (
                        <button
                          onClick={() =>
                            updateStatus(row._id, "Resolved")
                          }
                          className="px-3 py-1 text-xs rounded border hover:bg-green-50"
                        >
                          Mark Resolved
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(row._id)}
                        className="px-3 py-1 text-xs rounded border hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </ListPage>
  );
}
