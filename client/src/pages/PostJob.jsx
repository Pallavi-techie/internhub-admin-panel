import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../templates/FormPage";

export default function PostJob() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    type: "Full-time",
    location: "",
    salary: "",
    experience: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    console.log("Job form submitted:", form);
    setTimeout(() => {
      setSubmitting(false);
      alert("Job created (frontend demo).");
      navigate("/uploaded-jobs");
    }, 500);
  }

  return (
    <FormPage
      title="Post Job"
      subtitle="Create and publish a new full-time job opening."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Job Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border px-3 py-2 text-sm"
            placeholder="e.g., Senior React Developer"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Job Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
              placeholder="Delhi / Remote"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Salary</label>
            <input
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
              placeholder="₹10–15 LPA"
            />
          </div>
        </div>

        <div className="max-w-xs">
          <label className="block text-sm font-medium">Experience</label>
          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="mt-1 block w-full rounded border px-3 py-2 text-sm"
            placeholder="2+ years"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={6}
            className="mt-1 block w-full rounded border px-3 py-2 text-sm"
            placeholder="Responsibilities, skills, etc."
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded border text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 rounded bg-sky-600 text-white text-sm hover:bg-sky-700 disabled:opacity-60"
          >
            {submitting ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </FormPage>
  );
}
