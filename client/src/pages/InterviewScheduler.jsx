import React, { useState } from "react";
import FormPage from "../templates/FormPage";
import api from "../utils/api";

export default function InterviewScheduler() {
  const [form, setForm] = useState({
    candidate: "",
    role: "",
    date: "",
    time: "",
    mode: "Online",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.candidate || !form.role || !form.date || !form.time) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await api.post("/interviews", {
        candidateName: form.candidate,
        role: form.role,
        date: form.date,
        time: form.time,
        mode: form.mode,
        notes: form.notes,
      });

      alert("Interview scheduled successfully ✅");

      setForm({
        candidate: "",
        role: "",
        date: "",
        time: "",
        mode: "Online",
        notes: "",
      });
    } catch (err) {
      console.error("Interview schedule error:", err);
      alert("Failed to schedule interview ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormPage
      title="Interview Scheduler"
      subtitle="Schedule and manage interviews with potential candidates."
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        {/* Candidate & Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Candidate Name *</label>
            <input
              name="candidate"
              value={form.candidate}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="Enter candidate name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Role *</label>
            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="e.g. React Developer"
              required
            />
          </div>
        </div>

        {/* Date, Time, Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Date *</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Time *</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Mode</label>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
            >
              <option value="Online">Online</option>
              <option value="On-site">On-site</option>
              <option value="Phone">Phone</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block font-medium">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="Meeting link, interviewer name, instructions..."
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded bg-sky-600 text-white text-sm disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Schedule"}
          </button>
        </div>
      </form>
    </FormPage>
  );
}
