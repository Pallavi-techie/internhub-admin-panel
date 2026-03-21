import React, { useState } from "react";

export default function FreeConsultant() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function submit(e) {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Free Consultation
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get expert guidance from InternHub — completely free.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white shadow-xl rounded-xl p-8">

            <h2 className="text-2xl font-semibold text-center">
              Book Your Free Consultation
            </h2>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />

              <input
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your requirement"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border rounded px-4 py-2"
              />

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
