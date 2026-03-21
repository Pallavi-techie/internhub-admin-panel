// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FormPage from "../templates/FormPage";

// export default function PostInternship() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     stipend: "",
//     duration: "",
//     mode: "On-site",
//     description: "",
//   });
//   const [submitting, setSubmitting] = useState(false);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSubmitting(true);

//     // For now: just log & navigate. Later replace with API.
//     console.log("Internship form submitted:", form);
//     setTimeout(() => {
//       setSubmitting(false);
//       alert("Internship created (frontend demo).");
//       navigate("/uploaded-internships");
//     }, 500);
//   }

//   return (
//     <FormPage
//       title="Post Internship"
//       subtitle="Create and publish a new internship listing for students."
//     >
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Internship Title</label>
//           <input
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded border px-3 py-2 text-sm"
//             placeholder="e.g., Frontend Development Intern"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium">Location</label>
//             <input
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded border px-3 py-2 text-sm"
//               placeholder="Mumbai / Remote"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Stipend</label>
//             <input
//               name="stipend"
//               value={form.stipend}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded border px-3 py-2 text-sm"
//               placeholder="₹5,000 / month"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Duration</label>
//             <input
//               name="duration"
//               value={form.duration}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded border px-3 py-2 text-sm"
//               placeholder="3 Months"
//             />
//           </div>
//         </div>

//         <div className="max-w-xs">
//           <label className="block text-sm font-medium">Mode</label>
//           <select
//             name="mode"
//             value={form.mode}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded border px-3 py-2 text-sm"
//           >
//             <option>On-site</option>
//             <option>Remote</option>
//             <option>Hybrid</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Description</label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             rows={6}
//             className="mt-1 block w-full rounded border px-3 py-2 text-sm"
//             placeholder="Write detailed responsibilities and requirements..."
//           />
//         </div>

//         <div className="flex justify-end gap-3">
//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 rounded border text-sm"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={submitting}
//             className="px-4 py-2 rounded bg-sky-600 text-white text-sm hover:bg-sky-700 disabled:opacity-60"
//           >
//             {submitting ? "Publishing..." : "Publish"}
//           </button>
//         </div>
//       </form>
//     </FormPage>
//   );
// }
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
  const token = localStorage.getItem("token");

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/internships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
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

