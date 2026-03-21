import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListPage from "../../templates/ListPage";
import { getBlogs, saveBlogs } from "../../store/blogStore";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  function deleteBlog(id) {
    const updated = blogs.filter((b) => b.id !== id);
    setBlogs(updated);
    saveBlogs(updated);
  }

  return (
    <ListPage
      title="Blog Management"
      subtitle="Create, edit, and manage all your blog content and news articles."
      actions={
        <Link
          to="/admin/blog/create"
          className="px-4 py-2 text-sm rounded bg-sky-600 text-white"
        >
          + New Blog
        </Link>
      }
    >
      {blogs.length === 0 ? (
        <div className="p-4 text-sm text-gray-500">
          No blogs yet. Click “New Blog” to create one.
        </div>
      ) : (
        <div className="overflow-x-auto text-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created On</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">{blog.title}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-sky-50 text-sky-700">
                      {blog.status || "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {blog.createdAt
                      ? new Date(blog.createdAt).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      to={`/admin/blog/edit/${blog.id}`}
                      className="px-3 py-1 text-xs rounded border hover:bg-gray-50 inline-block"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="px-3 py-1 text-xs rounded border hover:bg-gray-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </ListPage>
  );
}
