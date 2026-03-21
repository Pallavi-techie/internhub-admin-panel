import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormPage from "../../templates/FormPage";
import { getBlogs, saveBlogs } from "../../store/blogStore";

export default function BlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    status: "Draft",
  });

  useEffect(() => {
    const blogs = getBlogs();
    const blog = blogs.find((b) => String(b.id) === String(id));
    if (blog) {
      setForm({
        title: blog.title,
        content: blog.content,
        status: blog.status || "Draft",
      });
    }
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const blogs = getBlogs();
    const updated = blogs.map((b) =>
      String(b.id) === String(id) ? { ...b, ...form } : b
    );
    saveBlogs(updated);
    navigate("/admin/blog/list");
  }

  return (
    <FormPage title="Edit Blog" subtitle="Update your blog content.">
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={8}
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div className="max-w-xs">
          <label className="block font-medium">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="mt-1 w-full border rounded px-3 py-2"
          >
            <option>Draft</option>
            <option>Published</option>
          </select>
        </div>

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
            className="px-4 py-2 rounded bg-sky-600 text-white"
          >
            Update Blog
          </button>
        </div>
      </form>
    </FormPage>
  );
}
