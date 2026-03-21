export function getBlogs() {
  const stored = localStorage.getItem("blogs");
  return stored ? JSON.parse(stored) : [];
}

export function saveBlogs(blogs) {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}
