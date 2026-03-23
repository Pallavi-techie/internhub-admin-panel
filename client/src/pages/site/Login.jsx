import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://internhub-admin-panel.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Store token
      // localStorage.setItem("token", data.token);
      localStorage.setItem("admin", JSON.stringify(data.user));

      // Redirect to dashboard
      navigate("/admin");
    } catch (err) {
      setError("Server error. Try again.");
    }

    setLoading(false);
  }

  // Google Login Click
  function handleGoogleLogin() {
    window.open("https://internhub-admin-panel.onrender.com/api/auth/google", "_self");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-sky-700">
          Admin Login
        </h1>
        <p className="text-center text-gray-600 mt-1">
          Access your InternHub admin dashboard
        </p>

        {error && (
          <div className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-sky-500"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-sky-500"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 hover:bg-sky-700 transition text-white py-2 rounded-lg font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          {/* <span className="px-3 text-gray-500 text-sm">OR</span> */}
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* GOOGLE LOGIN BUTTON */}
        {/* <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="google.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Login with Google</span>
        </button> */}
      </div>
    </div>
  );
}
