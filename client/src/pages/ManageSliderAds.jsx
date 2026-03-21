import React, { useEffect, useState } from "react";
import ListPage from "../templates/ListPage";
import api from "../utils/api";

export default function ManageSliderAds() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    imageUrl: "",
    order: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch slider ads
  async function fetchAds() {
    try {
      const res = await api.get("/slider");
      setAds(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load slider ads");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAds();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Create / Update slider
  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.title || !form.imageUrl) {
      alert("Title and Image URL are required");
      return;
    }

    try {
      if (editingId) {
        const res = await api.put(`/slider/${editingId}`, {
          ...form,
          order: Number(form.order),
        });

        setAds((prev) =>
          prev.map((a) => (a._id === editingId ? res.data : a))
        );
      } else {
        const res = await api.post("/slider", {
          ...form,
          order: Number(form.order),
        });

        setAds((prev) => [...prev, res.data]);
      }

      setForm({
        title: "",
        subtitle: "",
        imageUrl: "",
        order: "",
      });
      setEditingId(null);
    } catch (err) {
      alert("Failed to save slider");
    }
  }

  function handleEdit(ad) {
    setEditingId(ad._id);
    setForm({
      title: ad.title || "",
      subtitle: ad.subtitle || "",
      imageUrl: ad.imageUrl || "",
      order: ad.order || "",
    });
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this slider ad?")) return;

    try {
      await api.delete(`/slider/${id}`);
      setAds((prev) => prev.filter((a) => a._id !== id));
    } catch {
      alert("Failed to delete slider");
    }
  }

  return (
    <ListPage
      title="Manage Slider Ads"
      subtitle="Upload, reorder, and delete promotional slider advertisements."
    >
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border px-3 py-2 rounded"
          required
        />

        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          className="border px-3 py-2 rounded"
        />

        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="border px-3 py-2 rounded"
          required
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
          className="px-4 py-2 rounded bg-sky-600 text-white text-xs"
        >
          {editingId ? "Update Slider" : "Add Slider"}
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
                <th className="px-4 py-3">Preview</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {ads.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No slider ads added
                  </td>
                </tr>
              ) : (
                ads.map((row) => (
                  <tr key={row._id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">
                      {row.imageUrl ? (
                        <img
                          src={row.imageUrl}
                          alt={row.title}
                          className="h-10 w-20 object-cover rounded"
                        />
                      ) : (
                        <div className="h-10 w-20 bg-gray-100 rounded" />
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <div className="font-medium">{row.title}</div>
                      <div className="text-xs text-gray-500">
                        {row.subtitle}
                      </div>
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
