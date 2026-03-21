import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function ManageTeam() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Add form state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [adding, setAdding] = useState(false);

  // Edit state
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  // Fetch team members
  async function fetchTeam() {
    try {
      const res = await api.get("/team");
      setTeam(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load team members");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTeam();
  }, []);

  // Add team member
  async function handleAdd(e) {
    e.preventDefault();

    if (!name || !role) {
      alert("Name and role are required");
      return;
    }

    try {
      setAdding(true);
      const res = await api.post("/team", { name, role });
      setTeam((prev) => [...prev, res.data]);
      setName("");
      setRole("");
    } catch (err) {
      console.error(err);
      alert("Failed to add team member");
    } finally {
      setAdding(false);
    }
  }

  // Start editing
  function startEdit(member) {
    setEditId(member._id);
    setEditName(member.name);
    setEditRole(member.role);
  }

  // Cancel editing
  function cancelEdit() {
    setEditId(null);
    setEditName("");
    setEditRole("");
  }

  // Save edited member
  async function handleUpdate(id) {
    if (!editName || !editRole) {
      alert("Name and role are required");
      return;
    }

    try {
      const res = await api.put(`/team/${id}`, {
        name: editName,
        role: editRole,
      });

      setTeam((prev) =>
        prev.map((m) => (m._id === id ? res.data : m))
      );

      cancelEdit();
    } catch (err) {
      console.error(err);
      alert("Failed to update team member");
    }
  }

  // Delete member
  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to remove this member?")) return;

    try {
      await api.delete(`/team/${id}`);
      setTeam((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete team member");
    }
  }

  return (
    <ListPage
      title="Manage Team"
      subtitle="Add, edit, reorder, or remove team members and their profiles."
    >
      {/* ADD FORM */}
      <form
        onSubmit={handleAdd}
        className="mb-6 flex gap-4 items-end text-sm flex-wrap"
      >
        <div>
          <label className="block mb-1 text-gray-500">Name</label>
          <input
            className="border px-3 py-2 rounded w-64"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-500">Role</label>
          <input
            className="border px-3 py-2 rounded w-64"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter role"
          />
        </div>

        <button
          type="submit"
          disabled={adding}
          className="px-4 py-2 rounded bg-blue-600 text-white text-xs hover:bg-blue-700"
        >
          {adding ? "Adding..." : "Add Member"}
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
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {team.length === 0 ? (
                <tr>
                  <td
                    colSpan="3"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No team members found
                  </td>
                </tr>
              ) : (
                team.map((member) => (
                  <tr key={member._id} className="border-b">
                    <td className="px-4 py-3">
                      {editId === member._id ? (
                        <input
                          className="border px-2 py-1 rounded w-full"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                        />
                      ) : (
                        member.name
                      )}
                    </td>

                    <td className="px-4 py-3">
                      {editId === member._id ? (
                        <input
                          className="border px-2 py-1 rounded w-full"
                          value={editRole}
                          onChange={(e) => setEditRole(e.target.value)}
                        />
                      ) : (
                        member.role
                      )}
                    </td>

                    <td className="px-4 py-3 space-x-2">
                      {editId === member._id ? (
                        <>
                          <button
                            onClick={() => handleUpdate(member._id)}
                            className="px-3 py-1 text-xs border rounded bg-green-50"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-3 py-1 text-xs border rounded"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(member)}
                            className="px-3 py-1 text-xs border rounded"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(member._id)}
                            className="px-3 py-1 text-xs border rounded hover:bg-red-50"
                          >
                            Remove
                          </button>
                        </>
                      )}
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
