import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function ManageClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // form
  const [form, setForm] = useState({
    name: "",
    logoUrl: "",
    order: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch clients
  async function fetchClients() {
    try {
      const res = await api.get("/clients");
      setClients(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load clients");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);

  // Handle input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Create / Update client
  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name) {
      alert("Client name is required");
      return;
    }

    try {
      if (editingId) {
        const res = await api.put(`/clients/${editingId}`, {
          ...form,
          order: Number(form.order),
        });

        setClients((prev) =>
          prev.map((c) => (c._id === editingId ? res.data : c))
        );
      } else {
        const res = await api.post("/clients", {
          ...form,
          order: Number(form.order),
        });

        setClients((prev) => [...prev, res.data]);
      }

      setForm({ name: "", logoUrl: "", order: "" });
      setEditingId(null);
    } catch (err) {
      alert("Failed to save client");
    }
  }

  // Edit
  function handleEdit(client) {
    setEditingId(client._id);
    setForm({
      name: client.name,
      logoUrl: client.logoUrl || "",
      order: client.order || "",
    });
  }

  // Delete
  async function handleDelete(id) {
    if (!window.confirm("Delete this client?")) return;

    try {
      await api.delete(`/clients/${id}`);
      setClients((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      alert("Failed to delete client");
    }
  }

  return (
    <ListPage
      title="Manage Clients"
      subtitle="Add, delete, and reorder client logos and partnerships."
    >
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Client Name"
          className="border px-3 py-2 rounded"
          required
        />

        <input
          name="logoUrl"
          value={form.logoUrl}
          onChange={handleChange}
          placeholder="Logo URL"
          className="border px-3 py-2 rounded"
        />

        <input
          name="order"
          value={form.order}
          onChange={handleChange}
          placeholder="Order"
          type="number"
          className="border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white text-xs"
        >
          {editingId ? "Update Client" : "Add Client"}
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
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Logo</th>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No clients added
                  </td>
                </tr>
              ) : (
                clients.map((row) => (
                  <tr key={row._id} className="border-b last:border-b-0">
                    <td className="px-4 py-3 font-medium">{row.name}</td>

                    <td className="px-4 py-3">
                      {row.logoUrl ? (
                        <img
                          src={row.logoUrl}
                          alt={row.name}
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-gray-100 rounded" />
                      )}
                    </td>

                    <td className="px-4 py-3">{row.order}</td>

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
