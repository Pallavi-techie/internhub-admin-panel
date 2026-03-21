import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function JobApplications() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch job applications
  async function fetchApplications() {
    try {
      const res = await api.get("/applications?type=job");
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load job applications");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  // Update application status
  async function updateStatus(id, status) {
    try {
      await api.patch(`/applications/${id}/status`, { status });
      setData((prev) =>
        prev.map((a) =>
          a._id === id ? { ...a, status } : a
        )
      );
    } catch (err) {
      alert("Failed to update status");
    }
  }

  return (
    <ListPage
      title="Job Applications"
      subtitle="Review candidates who have applied for your job positions."
    >
      {loading && <div className="p-4 text-sm">Loading...</div>}
      {error && <div className="p-4 text-sm text-red-600">{error}</div>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="px-4 py-3">Candidate</th>
                <th className="px-4 py-3">Position</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Applied On</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No job applications found
                  </td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row._id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">
                      <div className="font-medium">{row.name}</div>
                      <div className="text-xs text-gray-500">{row.email}</div>
                    </td>

                    <td className="px-4 py-3">
                      {row.position || "Job Role"}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Shortlisted"
                            ? "bg-green-50 text-green-700"
                            : row.status === "Rejected"
                            ? "bg-red-50 text-red-700"
                            : row.status === "Hired"
                            ? "bg-purple-50 text-purple-700"
                            : "bg-sky-50 text-sky-700"
                        }`}
                      >
                        {row.status || "Pending"}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {row.createdAt
                        ? new Date(row.createdAt).toLocaleDateString()
                        : "-"}
                    </td>

                    <td className="px-4 py-3 space-x-2">
                      <button
                        onClick={() =>
                          updateStatus(row._id, "Shortlisted")
                        }
                        className="px-3 py-1 text-xs rounded border hover:bg-green-50"
                      >
                        Shortlist
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(row._id, "Rejected")
                        }
                        className="px-3 py-1 text-xs rounded border hover:bg-red-50"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(row._id, "Hired")
                        }
                        className="px-3 py-1 text-xs rounded border hover:bg-purple-50"
                      >
                        Hire
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
