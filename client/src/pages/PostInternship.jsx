import React, { useState } from "react";
import FormPage from "../templates/FormPage";
import { useNavigate } from "react-router-dom";

export default function PostInternship() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    location: "",
    stipend: "",
    duration: "",
    mode: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  // Get token (from login response)
  

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://internhub-admin-panel.onrender.com/api/internships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        credentials: "include",
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to create internship");
        return;
      }

      alert("Internship created successfully!");

      navigate("/uploaded-internships");

    } catch (err) {
      alert("Server error. Try again.");
    }

    setLoading(false);
  }

  return (
    <FormPage 
      title="Post Internship" 
      subtitle="Create and publish a new internship listing."
    >
      <form onSubmit={submit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="font-medium text-sm">Internship Title</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* Grid inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div>
            <label className="font-medium text-sm">Location</label>
            <input
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium text-sm">Stipend</label>
            <input
              value={form.stipend}
              onChange={(e) =>
                setForm({ ...form, stipend: e.target.value })
              }
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>
        </div>

        {/* Duration + Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>
            <label className="font-medium text-sm">Duration</label>
            <input
              value={form.duration}
              onChange={(e) =>
                setForm({ ...form, duration: e.target.value })
              }
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium text-sm">Mode</label>
            <select
              value={form.mode}
              onChange={(e) =>
                setForm({ ...form, mode: e.target.value })
              }
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option value="">Select</option>
              <option>On-site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="font-medium text-sm">Description</label>
          <textarea
            rows="6"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded border"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded bg-sky-600 text-white"
          >
            {loading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </FormPage>
  );
}

