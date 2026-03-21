import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function ManageVerifications() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Form state
  const [form, setForm] = useState({
    employeeName: "",
    employeeId: "",
    position: "",
    department: "",
    startDate: "",
    endDate: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch verifications
  async function fetchData() {
    try {
      const res = await api.get("/verifications");
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load verifications");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Handle input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Create / Update
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editingId) {
        const res = await api.put(`/verifications/${editingId}`, form);
        setData((prev) =>
          prev.map((v) => (v._id === editingId ? res.data : v))
        );
      } else {
        const res = await api.post("/verifications", form);
        setData((prev) => [res.data, ...prev]);
      }

      setForm({
        employeeName: "",
        employeeId: "",
        position: "",
        department: "",
        startDate: "",
        endDate: "",
      });
      setEditingId(null);
    } catch (err) {
      alert("Failed to save verification");
    }
  }

  // Edit
  function handleEdit(item) {
    setEditingId(item._id);
    setForm({
      employeeName: item.employeeName,
      employeeId: item.employeeId,
      position: item.position,
      department: item.department,
      startDate: item.startDate,
      endDate: item.endDate,
    });
  }

  // Delete
  async function handleDelete(id) {
    if (!window.confirm("Delete this verification?")) return;

    try {
      await api.delete(`/verifications/${id}`);
      setData((prev) => prev.filter((v) => v._id !== id));
    } catch (err) {
      alert("Failed to delete verification");
    }
  }

  return (
    <ListPage
      title="Manage Verifications"
      subtitle="Add and manage employee & intern verification records."
    >
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm"
      >
        <input
          name="employeeName"
          value={form.employeeName}
          onChange={handleChange}
          placeholder="Employee Name"
          className="border px-3 py-2 rounded"
          required
        />
        <input
          name="employeeId"
          value={form.employeeId}
          onChange={handleChange}
          placeholder="Employee ID"
          className="border px-3 py-2 rounded"
          required
        />
        <input
          name="position"
          value={form.position}
          onChange={handleChange}
          placeholder="Position"
          className="border px-3 py-2 rounded"
        />
        <input
          name="department"
          value={form.department}
          onChange={handleChange}
          placeholder="Department"
          className="border px-3 py-2 rounded"
        />
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white text-xs col-span-2 md:col-span-1"
        >
          {editingId ? "Update Verification" : "Add Verification"}
        </button>
      </form>

      {/* TABLE */}
      {loading && <div className="p-4 text-sm">Loading...</div>}
      {error && <div className="p-4 text-sm text-red-600">{error}</div>}

      {!loading && !error && (
        <div className="overflow-x-auto text-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Employee ID</th>
                <th className="px-4 py-3">Position</th>
                <th className="px-4 py-3">Status</th>
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
                    No verifications found
                  </td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row._id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">{row.employeeName}</td>
                    <td className="px-4 py-3">{row.employeeId}</td>
                    <td className="px-4 py-3">{row.position}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Inactive"
                            ? "bg-red-50 text-red-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <button
                        onClick={() => handleEdit(row)}
                        className="px-3 py-1 text-xs border rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(row._id)}
                        className="px-3 py-1 text-xs border rounded hover:bg-red-50"
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
