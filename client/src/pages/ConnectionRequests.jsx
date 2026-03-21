import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function ConnectionRequests() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    try {
      const res = await api.get("/connections");
      setData(res.data);
    } catch (err) {
      setError("Failed to load connection requests");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/connections/${id}/status`, { status });
      fetchConnections();
    } catch {
      alert("Failed to update status");
    }
  };

  return (
    <ListPage
      title="Connection Requests"
      subtitle="Review and respond to new professional connection requests."
    >
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto text-sm">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                  No connection requests found
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row._id} className="border-b">
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3">{row.message}</td>
                  <td className="px-4 py-3 space-x-2">
                    {row.status === "Pending" ? (
                      <>
                        <button
                          onClick={() =>
                            updateStatus(row._id, "Accepted")
                          }
                          className="px-3 py-1 text-xs rounded border"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            updateStatus(row._id, "Rejected")
                          }
                          className="px-3 py-1 text-xs rounded border"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500">{row.status}</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </ListPage>
  );
}
