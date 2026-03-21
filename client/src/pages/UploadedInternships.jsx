import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function UploadedInternships() {
  const [internships, setInternships] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch internships + applications
  async function fetchData() {
    try {
      const [internRes, appRes] = await Promise.all([
        api.get("/internships"),
        api.get("/applications?type=internship"),
      ]);

      setInternships(internRes.data);
      setApplications(appRes.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load internships");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Count applicants per internship
  function getApplicantsCount(internshipId) {
    return applications.filter(
      (app) => app.relatedId === internshipId
    ).length;
  }

  return (
    <ListPage
      title="Uploaded Internships"
      subtitle="Manage and review your internship posts."
    >
      {loading && <div className="p-4 text-sm">Loading...</div>}
      {error && <div className="p-4 text-sm text-red-600">{error}</div>}

      {!loading && !error && (
        <div className="overflow-x-auto text-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Applicants</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {internships.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No internships uploaded
                  </td>
                </tr>
              ) : (
                internships.map((item) => (
                  <tr key={item._id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">{item.title}</td>

                    <td className="px-4 py-3">
                      {item.location || "Remote"}
                    </td>

                    <td className="px-4 py-3 font-medium">
                      {getApplicantsCount(item._id)}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          item.status === "Closed"
                            ? "bg-red-50 text-red-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {item.status || "Open"}
                      </span>
                    </td>

                    <td className="px-4 py-3 space-x-2">
                      <button className="px-3 py-1 text-xs rounded border hover:bg-gray-50">
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          window.location.href =
                            "/admin/internship-applications"
                        }
                        className="px-3 py-1 text-xs rounded border hover:bg-gray-50"
                      >
                        View Applications
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
