import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function UploadedJobs() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch jobs + job applications
  async function fetchData() {
    try {
      const [jobRes, appRes] = await Promise.all([
        api.get("/jobs"),
        api.get("/applications?type=job"),
      ]);

      setJobs(jobRes.data);
      setApplications(appRes.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Count applicants per job
  function getApplicantsCount(jobId) {
    return applications.filter(
      (app) => app.relatedId === jobId
    ).length;
  }

  return (
    <ListPage
      title="Uploaded Jobs"
      subtitle="Manage and review your job postings."
    >
      {loading && <div className="p-4 text-sm">Loading...</div>}
      {error && <div className="p-4 text-sm text-red-600">{error}</div>}

      {!loading && !error && (
        <div className="overflow-x-auto text-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Applicants</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No jobs uploaded
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr key={job._id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">{job.title}</td>

                    <td className="px-4 py-3">
                      {job.type || "Full-time"}
                    </td>

                    <td className="px-4 py-3 font-medium">
                      {getApplicantsCount(job._id)}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          job.status === "Draft"
                            ? "bg-gray-100 text-gray-700"
                            : job.status === "Closed"
                            ? "bg-red-50 text-red-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {job.status || "Active"}
                      </span>
                    </td>

                    <td className="px-4 py-3 space-x-2">
                      <button className="px-3 py-1 text-xs rounded border hover:bg-gray-50">
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          window.location.href =
                            "/admin/job-applications"
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
